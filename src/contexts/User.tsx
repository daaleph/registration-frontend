// frontend/src/context/UserContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { UserProfile } from '../models/interfaces';
import { ProgressIncrements } from '@/data/phases';
import { useRouter } from 'next/router';
import { Phases, PHASES, Progress, QuestionsState } from '@/types/states';

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserContextType {
  // Core user data
  userProfile: UserProfile | null;
  responses: Map<string, number[] | number>;
  currentPhase: Phases;
  progress: Map<Phases, number>;
  csrfToken: string | null;
  authToken: string | null;
  error: string | null;
  isLoading: boolean;

  // State setters
  setUserProfile: (profile: UserProfile) => void;
  setResponses: (variable: string, answer: number[] | number) => void;
  setCurrentPhase: (phase: Phases) => void;
  setProgress: () => void;
  setPreviousState: (state: QuestionsState) => void;
  setCSRFToken: (token: string | null) => void;
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
  const [csrfToken, setCSRFToken] = useState<string | null>(null);
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
    const isProduct = currentPhase === 'PRODUCT';
    const progressIncrement = ProgressIncrements[currentPhase];
    const currentProgress = progress.get(currentPhase) || progressIncrement;
    if (currentProgress + progressIncrement < 100 && currentProgress < 100) return;
    if (isProduct) {
      router.push('/finalize');
    } else {
      moveToNextPhase();
    }
  }, [progress]);

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
      newProgress.set(currentPhase, currentValue + increment);
      return newProgress;
    });
  };

  const setPreviousState = (state: QuestionsState) => {
    setProgressState(prevProgress => {
      const newProgress = new Map(prevProgress);
      for (const phase of PHASES) {
        const key = Object.keys(state).find((key) => key.endsWith(phase.toLowerCase())) as keyof QuestionsState;
        let advance = state[key] + 1;
        if (phase === 'PROFILE' && advance < 4) advance = 1;
        newProgress.set(phase, advance * ProgressIncrements[phase]);
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
    }
  };

  // Context value
  const value: UserContextType = {
    userProfile,
    responses,
    currentPhase,
    progress,
    csrfToken,
    authToken,
    error,
    isLoading,
    setUserProfile,
    setResponses,
    setCurrentPhase,
    setProgress,
    setPreviousState,
    setCSRFToken,
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