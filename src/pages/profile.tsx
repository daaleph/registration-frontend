// profile.tsx
import QuestionPage from '@/components/common/QuestionPage';
import { ProfileService } from '@/services/Registration';
import CSRFGuard from '@/components/guards/CSRF';

const ProfilePage = () => {
  const service = ProfileService.getInstance();
  return (
    <CSRFGuard>
      <QuestionPage
        phase="PROFILE"
        service={service}
        loadingMessage="Cargando Perfil..."
        notInitializedMessage="Personalizando..."
        title="Perfil - AS"
      />
    </CSRFGuard>
  );
};

export default ProfilePage;