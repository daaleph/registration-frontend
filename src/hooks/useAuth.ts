// frontend/src/hooks/useAuth.ts
import { useUser } from '@/contexts/User';
import AuthService from '@/services/Auth';
import { AccessToken } from '@/types/security';

export const useAuth = () => {

  const auth = new AuthService();
  const { setAuthToken, authToken } = useUser();

  const finalizeRegistrationWithPassword = async (email: string, password: string) => {
    const { accessToken } = await auth.finalizeRegistrationWithPassword<AccessToken>(email, password);
    validateAuthToken(email, accessToken);
    login(email, password);
  }

  const login = async (email: string, password: string) => {
    const { accessToken } = await auth.login<AccessToken>(email, password);
    validateAuthToken(email, accessToken);
  };

  const logout = () => {
    setAuthToken(null);
  };

  const validateAuthToken = (email: string, accessToken: string): void => {
    try {
      auth.validateAuthToken(email, accessToken);
    } catch (error ) {
      if (error instanceof Error) {
        console.error(`Error Code: ${error}, Message: ${error.message}`);
      } else {
        console.error('An unknown error occurred:', error);
      }
    }
    setAuthToken(accessToken);
  }

  return {
    finalizeRegistrationWithPassword,
    login,
    logout,
    isAuthenticated: !!authToken,
  };

};