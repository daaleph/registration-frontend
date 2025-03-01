import { UserProfile } from "@/models/interfaces";
import { HttpUtility } from "./HttpUtility";
import { Progress } from "@/types/states";
import { ProgressIncrements } from "@/data/phases";

class Service {
    private static instances: Map<string, Service> = new Map();
    protected baseUrl: string;
  
    protected constructor() {
      this.baseUrl = process.env.NEXT_PUBLIC_NEST_URL || '';
    }
  
    public static getInstance<T extends Service>(this: new () => T): T {
        const className = this.name;
        if (!Service.instances.has(className)) {
            Service.instances.set(className, new this());
        }
        return Service.instances.get(className) as T;
    }
}

export class QuestionService extends Service {
    protected type: string;
    protected hasOtherAnswer: boolean;
  
    constructor(type: string, hasOtherAnswer: boolean = false) {
        super();
        this.type = type;
        this.hasOtherAnswer = hasOtherAnswer;
    }
  
    get initialQuestionEndpoint() {
        return `questions/${this.type}/initial`;
    }
  
    get questionWithIdEndpoint() {
        return `questions/${this.type}/questionId/{questionId}/`;
    }
  
    get submitAnswerEndpoint() {
        return `responses/${this.type}`;
    }
  
    get submitOtherAnswerEndpoint() {
        if (this.hasOtherAnswer) {
            return `responses/${this.type}/other`;
        }
        return null;
    }
  
    async getInitialQuestionWithOptions<T>(progress: Progress, currentPhase: keyof typeof ProgressIncrements, uuid: string): Promise<T> {
        const initialPercentage = ProgressIncrements[currentPhase];
        const currentProgress = progress.get(currentPhase) || initialPercentage;
        const isProfile = currentPhase === 'PROFILE';
        if (currentProgress === initialPercentage) {
            return await HttpUtility.withRetry(() => 
                HttpUtility.get<T>(`${this.baseUrl}questions/${this.type}/initial`), 11, 3000
            );
        }
        const question = currentProgress / initialPercentage;
        return this.getQuestionWithOptions(uuid, isProfile ? question + 4 : question);
    }
  
    async getQuestionWithOptions<T>(profileId: string, questionId: number): Promise<T> {
        return await HttpUtility.withRetry(() =>
            HttpUtility.get<T>(`${this.baseUrl + this.questionWithIdEndpoint.replace('{questionId}', questionId.toString())}`, { profileId })
        );
    }
  
    async submitAnswer(profileId: string, variable: string, answer: number[]): Promise<void> {
        return await HttpUtility.withRetry(() =>
            HttpUtility.post(`${this.baseUrl + this.submitAnswerEndpoint}`, { profileId, variable, answer })
        );
    }
  
    async submitOtherAnswer(profileId: string, variable: string, answer: string): Promise<void> {
        if (this.submitOtherAnswerEndpoint) {
            return await HttpUtility.withRetry(() =>
                HttpUtility.post(`${this.baseUrl + this.submitOtherAnswerEndpoint}`, { profileId, variable, answer })
            );
        } else {
            throw new Error('submitOtherAnswer not supported');
        }
    }
}
  

export class ProfileService extends QuestionService {
    constructor() {
        super('profile', true);
    }
  
    async login<T>(email: string, password: string): Promise<T> {
        return await HttpUtility.withRetry(() =>
            HttpUtility.post<T>(`${this.baseUrl}auth/login`, { email, password })
        );
    }
  
    async createProfile<T>(data: UserProfile): Promise<T> {
        return await HttpUtility.withRetry(() =>
            HttpUtility.post<T>(`${this.baseUrl}profile/create`, data)
        );
    }
    
}

export class BfiService extends QuestionService {
    constructor() {
        super('bfi');
    }
}
  
export class ProductService extends QuestionService {
    constructor() {
        super('product', true);
    }
}