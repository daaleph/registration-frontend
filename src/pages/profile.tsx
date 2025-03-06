// /frontend/src/pages/profile.tsx
import CSRFGuard from '@/components/guards/CSRF';
import { ProfileService } from '@/services/Registration';
import QuestionPage from '@/components/common/QuestionPage';

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