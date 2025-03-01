// bfi.tsx
import QuestionPage from '@/components/common/QuestionPage';
import { BfiService } from '@/services/Registration';

const BfiPage = () => {
  const service = BfiService.getInstance();
  return (
    <QuestionPage 
      phase='BFI' 
      service={service}
      loadingMessage='Cargando Perfil...' 
      notInitializedMessage='Preparando...' 
      title='Psicología - AS' 
    />
  );
};

export default BfiPage;