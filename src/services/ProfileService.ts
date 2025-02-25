// frontend/src/services/ProfileService.ts
import { UserProfile } from "@/models/interfaces";
import { HttpUtility } from "./HttpUtility";
import { ProgressIncrements, QuestionsByNature } from "@/components/navigation/phases";
import { Progress } from "@/types/states";

export class ProfileService {
  
  private static instance: ProfileService | null = null;
  private baseUrl: string;

  private constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_NEST_URL || '';
  }

  public static getInstance(): ProfileService {
    if (!ProfileService.instance) {
      ProfileService.instance = new ProfileService();
    }
    return ProfileService.instance;
  }

  async login<T>(
    email: string,
    password: string
  ): Promise<T> {
      return await HttpUtility.withRetry(() => 
        HttpUtility.post<T>(`${this.baseUrl}auth/login`, {
          email,
          password
        })
      );
  }

  async createProfile<T>(
    data: UserProfile
  ): Promise<T> {
    return await HttpUtility.withRetry(() => 
      HttpUtility.post<T>(`${this.baseUrl}profile/create`, data)
    );
  }

  async getInitialQuestionWithOptions<T>(progress: Progress, currentPhase: keyof typeof ProgressIncrements, uuid: string): Promise<T> {
    const initialPercentage = ProgressIncrements[currentPhase];
    const currentProgress = progress.get(currentPhase);
    if (currentProgress === initialPercentage) return await HttpUtility.withRetry(() => 
      HttpUtility.get<T>(`${this.baseUrl}questions/profile/initial`)
    );
    const question = Math.round(progress.get(currentPhase)! / QuestionsByNature[currentPhase]);
    return this.getQuestionWithOptions(uuid, question);
  }

  async getQuestionWithOptions<T>(
    uuid: string,
    questionId: number
  ): Promise<T> {

    const profileId = uuid;
    return await HttpUtility.withRetry(() => 
      HttpUtility.get<T>(`${this.baseUrl}questions/profile/questionId/${questionId}/`, {
        profileId
      })
    );

  }

  async submitAnswer(
    profileId: string,
    variable: string,
    answer: number[]
  ): Promise<void> {
    return await HttpUtility.withRetry(() => 
      HttpUtility.post(`${this.baseUrl}responses/profile`, { 
        profileId, 
        variable, 
        answer 
      })
    );
  }

  async submitOtherAnswer(
    profileId: string,
    variable: string,
    answer: string
  ): Promise<void> {
    return await HttpUtility.withRetry(() => 
      HttpUtility.post(`${this.baseUrl}responses/profile/other`, {
        profileId,
        variable,
        answer
      })
    );
  }

}