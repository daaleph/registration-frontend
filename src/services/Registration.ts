import { UserProfile } from "@/models/interfaces";
import { HttpUtility } from "./HttpUtility";

class Service {
    private static instance: Service | null = null;
    protected baseUrl: string;
  
    protected constructor() {
        this.baseUrl = process.env.NEXT_PUBLIC_NEST_URL || '';
    }
  
    public static getInstance(): Service {
        if (!Service.instance) {
            Service.instance = new Service();
        }
        return Service.instance;
    }
}

export default class QuestionService extends Service {
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
  
    async getInitialQuestionWithOptions<T>(uuid: string): Promise<T> {
        const profileId = uuid;
        return await HttpUtility.withRetry(() =>
            HttpUtility.get<T>(`${this.baseUrl + this.initialQuestionEndpoint}`, { profileId })
        );
    }
  
    async getQuestionWithOptions<T>(uuid: string, questionId: number): Promise<T> {
        const profileId = uuid;
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