// profile.tsx
import QuestionPage from '@/components/common/QuestionPage';
import { ProfileService } from '@/services/Registration';

const ProfilePage = () => {
  const service = ProfileService.getInstance();
  return (
    <QuestionPage
      phase="PROFILE"
      service={service}
      loadingMessage="Cargando Perfil..."
      notInitializedMessage="Personalizando..."
      title="Perfil - AS"
    />
  );
};

export default ProfilePage;