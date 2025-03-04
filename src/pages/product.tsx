// product.tsx
import QuestionPage from '@/components/common/QuestionPage';
import { ProductService } from '@/services/Registration';
import CSRFGuard from '@/components/guards/CSRF';

const ProductPage = () => {
    const service = ProductService.getInstance();
    return (
        <CSRFGuard>
            <QuestionPage 
                phase='PRODUCT' 
                service={service} 
                loadingMessage='Cargando Perfil...' 
                notInitializedMessage='Descifrando...' 
                title='Tecnología - AS' 
            />
        </CSRFGuard>
    );
};

export default ProductPage;