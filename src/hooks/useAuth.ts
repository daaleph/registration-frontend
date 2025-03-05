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
    auth.validateAuthToken(email, accessToken);
    setAuthToken(accessToken);
  }

  return {
    finalizeRegistrationWithPassword,
    login,
    logout,
    isAuthenticated: !!authToken,
  };

};