// bfi.tsx
import QuestionPage from '@/components/common/QuestionPage';
import { BfiService } from '@/services/Registration';
import CSRFGuard from '@/components/guards/CSRF';

const BfiPage = () => {
  const service = BfiService.getInstance();
  return (
    <CSRFGuard>
      <QuestionPage 
        phase='BFI' 
        service={service}
        loadingMessage='Cargando Perfil...' 
        notInitializedMessage='Preparando...' 
        title='Psicología - AS' 
      />
    </CSRFGuard>
  );
};

export default BfiPage;