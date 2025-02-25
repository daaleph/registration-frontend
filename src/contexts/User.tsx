// frontend/src/context/UserContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { UserProfile } from '../models/interfaces';
import { ProgressIncrements, QuestionsByNature } from '@/data/phases';
import { useRouter } from 'next/router';
import { Phases, PHASES, Progress, QuestionsState } from '@/types/states';

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserContextType {
  // Core user data
  userProfile: UserProfile | null;
  responses: Map<string, number[] | number>;
  currentPhase: Phases;
  progress: Map<Phases, number>;
  authToken: string | null;
  error: string | null;
  isLoading: boolean;

  // State setters
  setUserProfile: (profile: UserProfile) => void;
  setResponses: (variable: string, answer: number[] | number) => void;
  setCurrentPhase: (phase: Phases) => void;
  setProgress: () => void;
  setPreviousState: (state: QuestionsState) => void;
  setAuthToken: (token: string | null) => void;
  setError: (error: string | null) => void;
  setIsLoading: (loading: boolean) => void;

  // Phase management
  moveToNextPhase: () => void;
}

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  
  const router = useRouter();
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [responses, setResponsesState] = useState<Map<string, number[] | number>>(new Map());
  const [currentPhase, setCurrentPhase] = useState<Phases>('PROFILE');
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [progress, setProgressState] = useState<Progress>(
    new Map([
      ['PROFILE', ProgressIncrements.PROFILE],
      ['BFI', ProgressIncrements.BFI],
      ['PRODUCT', ProgressIncrements.PRODUCT]
    ])
  );

  useEffect(() => {
    if (progress.get(currentPhase)! > 100) moveToNextPhase();
  }, [progress]);

  useEffect(() => {
    console.log("PROGRESS:", progress);
  }, [progress])

  useEffect(() => {
    console.log("USER PROFILE:", userProfile);
  }, [userProfile])

  // Response management
  const setResponses = (variable: string, answer: number[] | number) => {
    setResponsesState(prevResponses => {
      const newResponses = new Map(prevResponses);
      newResponses.set(variable, answer);
      return newResponses;
    });
  };

  const setProgress = () => {
    setProgressState(prevProgress => {
      const newProgress = new Map(prevProgress);
      const increment = ProgressIncrements[currentPhase as keyof typeof ProgressIncrements];
      const currentValue = newProgress.get(currentPhase)!;
      newProgress.set(currentPhase, Math.min(currentValue + increment, 101));
      return newProgress;
    });
  };

  const setPreviousState = (state: QuestionsState) => {
    setProgressState(prevProgress => {
      const newProgress = new Map(prevProgress);
      for (const phase of PHASES) {
        const key = Object.keys(state).find((key) => key.endsWith(phase.toLowerCase())) as keyof QuestionsState;
        var advance = state[key];
        if (phase === 'PROFILE' && advance < 4) advance = 1;
        const totalQuestions = QuestionsByNature[phase];
        newProgress.set(phase, advance * ProgressIncrements[phase] + 1);
        if (advance != totalQuestions) break;
        setCurrentPhase(phase);
      }
      return newProgress;
    });
  }

  const moveToNextPhase = () => {
    const currentIndex = PHASES.indexOf(currentPhase);
    if (currentIndex < PHASES.length - 1) {
      const newPhase = PHASES[currentIndex + 1]
      router.push(`/${newPhase.toLowerCase()}`);
      setCurrentPhase(newPhase);
      setProgress();
      setError(null);
    } else {
      router.push('/finalize');
    }
  };

  // Context value
  const value: UserContextType = {
    userProfile,
    responses,
    currentPhase,
    progress,
    authToken,
    error,
    isLoading,
    setUserProfile,
    setResponses,
    setCurrentPhase,
    setProgress,
    setPreviousState,
    setAuthToken,
    setError,
    setIsLoading,
    moveToNextPhase
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};