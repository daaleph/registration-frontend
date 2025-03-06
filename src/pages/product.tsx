// product.tsx
import CSRFGuard from '@/components/guards/CSRF';
import { QuestionPage } from '@/components/common';
import { ProductService } from '@/services/Registration';

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