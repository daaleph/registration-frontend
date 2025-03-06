// frontend/src/components/common/Container.tsx
import React, { ReactNode } from 'react';
import styles from '@/styles/landing.module.css';

interface ContainerProps {
    children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
    return <div className={styles.container}>{children}</div>;
};

export default Container;
