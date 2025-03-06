// frontend/src/services/AuthService.ts
import { CsrfToken } from '@/types/security';
import { HttpUtility } from './HttpUtility';
import { setCsrfToken } from './axios.config';
import { UserProfile } from '@/models/interfaces';
import { createHmac } from 'crypto';
import loadEnv from '../../env.config';

loadEnv();

export default class AuthService {
    private baseUrl: string;
    private static instance: AuthService | null = null;

    constructor() {
        this.baseUrl = process.env.NEXT_PUBLIC_NEST_URL || '';
    }

    public static getInstance(): AuthService {
        if (!AuthService.instance) {
          AuthService.instance = new AuthService();
        }
        return AuthService.instance;
    }

    async initialToken(): Promise<void> {
        const response = await HttpUtility.withRetry(() => 
            HttpUtility.get<CsrfToken>(`${this.baseUrl}auth/csrf-token`)
        );
        setCsrfToken(response.csrfToken)
    }

    async profileExists<T>(
        email: string
    ): Promise<T> {
        return await HttpUtility.withRetry(() => 
            HttpUtility.get<T>(`${this.baseUrl}auth/profile-exists`, {
                email
            })
        );
    }

    async previousState<T>(
        email: string
    ): Promise<T> {
        const {counting_profile: profile, counting_bfi: bfi, counting_product: product } = 
            await HttpUtility.withRetry(() => 
            HttpUtility.get<{counting_profile: number, counting_bfi: number, counting_product: number}>(`${this.baseUrl}auth/previous-state`, {
                email
            })
        );
        return {profile, bfi, product} as T;
    }

    async validatesPasswordExistance<T>(
        email: string
    ): Promise<T> {
        return await HttpUtility.withRetry(() => 
            HttpUtility.get<T>(`${this.baseUrl}auth/password-existance`, {
                email
            })
        );
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

    validateAuthToken(
        givenEmail: string,
        token: string
    ): void {
        const parts = token.split('.');
        if (parts.length !== 3) throw new Error('Invalid token structure');
        if (!this.verifyJwt(parts)) throw new Error("Secrets don't match");
        const { email } = this.decodeJwt(token);
        if (email !== givenEmail) throw new Error("Token invalid");
    }

    verifyJwt(tokenParts: string[]): boolean {
        const [headerEncoded, payloadEncoded, signature] = tokenParts;
        const data = `${headerEncoded}.${payloadEncoded}`;
        const computedSignature = createHmac('sha256', process.env.JWT_SECRET!)
            .update(data)
            .digest('base64')
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
        return computedSignature === signature;
    }

    decodeJwt(token: string): { sub: string, email: string, iat: string, exp: string} {
        const parts = token.split('.');
        if (parts.length !== 3) throw new Error("Invalid token structure");
        const base64UrlPayload = parts[1];
        const base64Payload = base64UrlPayload.replace(/-/g, '+').replace(/_/g, '/');
        const decoded = Buffer.from(base64Payload, 'base64').toString('utf-8');
        return JSON.parse(decoded);
    }
  
    async createProfile<T>(data: UserProfile): Promise<T> {
        return await HttpUtility.withRetry(() =>
            HttpUtility.post<T>(`${this.baseUrl}profile/create`, data)
        );
    }

    async finalizeRegistrationWithPassword<T>(
        email: string,
        password: string
    ): Promise<T> {
        return await HttpUtility.withRetry(() => 
            HttpUtility.post<T>(`${this.baseUrl}auth/finalize`, { 
                email,
                password
            })
        );
    }

}