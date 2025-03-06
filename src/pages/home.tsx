// frontend/src/pages/home.tsx
import React from 'react';
import Head from 'next/head';
import { useAuth } from '@/hooks/useAuth';
import { useUser } from '@/contexts/User';
import AuthGuard from '@/components/guards/Auth';
import styles from '@/styles/home.module.css';
import { FixedLogo, Subtitle, Title } from '@/components/common';

const HomePage: React.FC = () => {

    const { logout } = useAuth();
    const { userProfile } = useUser();

    return (
        <AuthGuard>

            <Head><title>Inicio AS</title></Head>
            <FixedLogo/>
            
            <div className={styles.homeContainer}>
                <section className={styles.welcomeSection}>
                    <h1 className={styles.title}>
                        Bienvenido, {userProfile?.preferred_name || 'Usuario'}!
                    </h1>
                    <Title />
                    <Subtitle text='Has completado exitosamente el proceso de registro.'/>
                </section>

                <section className={styles.developmentSection}>
                    <div className={styles.devCard} style={{background: 'var(--primary-color)'}}>
                        <div className={styles.devHeader}>
                            <span className={styles.devIcon}>🧠</span>
                            <h2>En Desarrollo</h2>
                        </div>
                        <div className={styles.loadingBar}>
                            <div className={styles.loadingProgress}></div>
                        </div>
                        <p className={styles.devDescription}>
                            Estamos diseñando tu perfil psicométrico personalizado que incluirá:
                        </p>
                        <ul className={styles.featureList}>
                            <li>
                                <span className={styles.checkmark}>✓</span>
                                Análisis cuantitativo detallado
                            </li>
                            <li>
                                <span className={styles.checkmark}>✓</span>
                                Evaluación cualitativa profunda
                            </li>
                            <li>
                                <span className={styles.checkmark}>✓</span>
                                Recomendaciones personalizadas
                            </li>
                        </ul>
                        <div className={styles.devFooter}>
                            <div className={styles.pulsingDot}></div>
                            <span>Trabajando en tu perfil...</span>
                        </div>
                    </div>
                </section>

                <button className={styles.logoutButton} onClick={logout}>
                    Cerrar Sesión
                </button>
            </div>
        </AuthGuard>
    );
};

export default HomePage;