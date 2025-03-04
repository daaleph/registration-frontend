// src/components/guards/CSRF.tsx
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useCSRF } from '@/hooks/useCSRFToken';

const Guard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isAuthenticated } = useCSRF();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) router.push('/register', undefined, { shallow: true });
    }, [isAuthenticated, router]);

    return <>{children}</>;
};

export default Guard;