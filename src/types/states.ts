// src/types/states.ts
export interface PhaseState {
  currentPhase: string;
  progress: number;
  isComplete: boolean;
}

export interface ErrorState {
  message: string;
  code?: string;
  details?: unknown;
}

export interface QuestionsState {
  [key: `counting_${string}`]: number;
}

export type Progress = Map<Phases, number>;
export type Phases = 'PROFILE' | 'BFI' | 'PRODUCT';
export const PHASES: Array<Phases> = ['PROFILE', 'BFI', 'PRODUCT'];