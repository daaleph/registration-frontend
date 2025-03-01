// product.tsx
import QuestionPage from '@/components/common/QuestionPage';
import { ProductService } from '@/services/Registration';

const ProductPage = () => {
    const service = ProductService.getInstance();
    return (
        <QuestionPage 
            phase='PRODUCT' 
            service={service} 
            loadingMessage='Cargando Perfil...' 
            notInitializedMessage='Descifrando...' 
            title='Tecnología - AS' 
        />
    );
};

export default ProductPage;