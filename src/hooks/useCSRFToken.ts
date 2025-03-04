// frontend/src/hooks/useCSRFToken.ts
import { useUser } from '@/contexts/User';

export const useCSRF = () => {

    const { csrfToken, setCSRFToken } = useUser();

    const initilizeRegistrationProcess = (csrftoken: string) => {
        setCSRFToken(csrftoken);
    }

    return {
        initilizeRegistrationProcess,
        isAuthenticated: !!csrfToken,
    };
    
};