import { useUser } from "@/contexts/User";
import { QuestionController, QuestionState } from "@/controllers";
import { hookManager } from "@/marketing/hooks";
import { QuestionWithOptions } from "@/models/interfaces";
import { Phases } from "@/types/states";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { LoadingState } from "./LoadingState";
import { ErrorDisplay } from "./ErrorDisplay";
import Head from "next/head";
import { QuestionForm } from "./QuestionForm";
import styles from '../../styles/components.module.css';
import { QuestionService } from "@/services/Registration";
import { ProgressIncrements } from "@/data/phases";

interface QuestionPageProps {
  phase: Phases;
  service: QuestionService;
  loadingMessage: string;
  notInitializedMessage: string;
  title: string;
}

const QuestionPage: React.FC<QuestionPageProps> = ({ phase, service, loadingMessage, notInitializedMessage, title }) => {
    const router = useRouter();
    const { setResponses, setProgress, progress, userProfile, currentPhase } = useUser();
    const [answerSelected, setAnswerSelected] = useState(false);
    const [showDescription, setShowDescription] = useState(false);
    const [hook, setHook] = useState(hookManager.getRandomHook());
    const [controllerState, setControllerState] = useState<{
      controller: QuestionController;
      state: QuestionState;
    }>(() => {
      const controller = new QuestionController({
        initialState: {
          currentPhase: phase,
          currentQuestion: null,
          currentOptions: null,
          isLoading: true,
          currentProgress: 0,
          error: null,
          isInitialized: false,
          selectedAnswer: null,
          otherText: undefined
        },
        onProgressUpdate: () => {
          setProgress();
        },
        onAnswerSubmitted: (variable: string, answer: number[] | number) => {
          setResponses(variable, answer);
        }
      });
      return {
        controller,
        state: controller.getState()
      };
    });
  
    const initQuestions = async () => {
      if (!router.isReady || typeof userProfile?.id !== "string") return;
      try {
        await controllerState.controller.initializeQuestions<QuestionWithOptions>(
          userProfile.id,
          () => service.getInitialQuestionWithOptions<QuestionWithOptions>(
            progress,
            currentPhase,
            userProfile.id
          )
        );
        setControllerState(current => ({
          ...current,
          state: current.controller.getState()
        }));
      } catch (error) {
        console.error('Failed to initialize questions:', error);
      }
    };
  
    useEffect(() => {
      initQuestions();
    }, [router.isReady, userProfile?.id]);
  
    const handleAnswerSelected = useCallback((answer: number[] | number, otherText?: string) => {
      controllerState.controller.handleAnswerSelection(answer, otherText);
      setControllerState(current => ({
        ...current,
        state: current.controller.getState()
      }));
    }, [controllerState.controller]);
  
    const handleSubmit = useCallback(async () => {
      if (!userProfile?.id) return;
      setHook(hookManager.getRandomHook());
      setShowDescription(false);
      try {
        await controllerState.controller.submitAnswer(
          userProfile.id,
          service.submitAnswer.bind(service),
          progress,
          phase,
          service.submitOtherAnswer ? service.submitOtherAnswer.bind(service) : undefined
        );
        setControllerState(current => ({
          ...current,
          state: controllerState.controller.getState()
        }));
        if (progress.get(phase)! > 100 || phase !== currentPhase) return;
        await controllerState.controller.nextQuestionWithOptions<QuestionWithOptions>(
          userProfile.id,
          controllerState.state,
          service.getQuestionWithOptions.bind(service)
        );
        setControllerState(current => ({
          ...current,
          state: controllerState.controller.getState()
        }));
      } catch (error) {
        console.error('Failed to initialize questions:', error);
      }
    }, [userProfile?.id, controllerState.state]);
  
    if (!controllerState.state || !router.isReady) {
      return <LoadingState message={loadingMessage} />;
    }
  
    if (controllerState.state.error) {
      return <ErrorDisplay message={controllerState.state.error} />;
    }
  
    if (!controllerState.state.currentQuestion || !controllerState.state.currentOptions) {
      return <LoadingState message={notInitializedMessage} />;
    }
  
    const isSubmitDisabled =
      !answerSelected ||
      controllerState.state.isLoading ||
      controllerState.state.selectedAnswer === null ||
      (controllerState.state.otherText !== undefined && controllerState.state.otherText.trim() === '');
  
    return (
      <>
        <Head><title>{title}</title></Head>
        <div className={styles.content}>
          <QuestionForm
            hook={hook}
            showDescription={showDescription}
            setShowDescription={setShowDescription}
            question={controllerState.state.currentQuestion}
            options={controllerState.state.currentOptions}
            onAnswerSelected={handleAnswerSelected}
            currentPhase={phase}
            progressPercentage={(progress.get(phase) || ProgressIncrements[phase]) + 2 * ProgressIncrements[phase]}
            setAnswerSelected={setAnswerSelected}
            isLoading={controllerState.state.isLoading}
          />
          {
            controllerState.controller.getState().isLoading ?
            <div className={styles.loading} /> :
            <button
              className={styles.submitButton}
              onClick={handleSubmit}
              disabled={isSubmitDisabled}
            >
              Contestar
            </button>
          }
        </div>
      </>
    );
};

export default QuestionPage;