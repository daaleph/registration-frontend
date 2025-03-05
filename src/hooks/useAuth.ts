// frontend/src/hooks/useAuth.ts
import { useUser } from '@/contexts/User';
import AuthService from '@/services/Auth';
import { AccessToken } from '@/types/security';

export const useAuth = () => {

  const auth = new AuthService();
  const { setAuthToken, authToken } = useUser();

  const login = async (email: string, password: string) => {
    const { accessToken } = await auth.login<AccessToken>(email, password);
    console.log("ACESS TOKEN:", accessToken);
    setAuthToken(accessToken);
  };

  const logout = () => {
    setAuthToken(null);
  };

  return {
    login,
    logout,
    isAuthenticated: !!authToken,
  };
};