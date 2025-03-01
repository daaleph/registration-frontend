// frontend/src/components/navigation/phases.ts

export enum QuestionsByNature {
    PROFILE = 13,   // because there are 11 questions there
    BFI = 46,       // because there are 44 questions there
    PRODUCT = 24    // because there are 22 questions there
}

export enum ProgressIncrements {
    PROFILE = 100 / QuestionsByNature.PROFILE,
    BFI = 100 / QuestionsByNature.BFI,
    PRODUCT = 100 / QuestionsByNature.PRODUCT,
}

export const isValidPhase = (phase: string): phase is keyof typeof ProgressIncrements => {
    return phase.toUpperCase() in ProgressIncrements;
};  