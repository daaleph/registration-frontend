// src/components/guards/Auth.tsx
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';

const Guard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Must be added the JWT Strategy
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) router.push('/login', undefined, { shallow: true });
    }, [isAuthenticated, router]);

    return <>{children}</>;
};

export default Guard;