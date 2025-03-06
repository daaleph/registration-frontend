// frontend/src/components/common/Container.tsx
import React, { ReactNode } from 'react';
import styles from '@/styles/landing.module.css';

interface GridedContainerProps {
    children: ReactNode;
}

const GridedContainer: React.FC<GridedContainerProps> = ({ children }) => {
    return <div className={styles.gridedContainer}>{children}</div>;
};

export default GridedContainer;
