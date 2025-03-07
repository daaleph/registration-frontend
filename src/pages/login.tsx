// frontend/src/pages/login.tsx
import Head from 'next/head';
import Image from 'next/image';
import router from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import AuthService from '@/services/Auth';
import { GridedContainer, Title } from '@/components/common';
import styles from '@/styles/landing.module.css';
import React, { useEffect, useState } from 'react';

const LoginPage: React.FC = () => {
    const { login } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const authService = AuthService.getInstance();

    // useEffect(() => {
    //     async function getInitialToken() {
    //         try {
    //             await authService.initialToken();
    //         } catch (error) {
    //             console.error('Failed to get CSRF token:', error);
    //         }
    //     }
    //     getInitialToken();
    // }, []);
  

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (!email.trim() || !password.trim()) {
                setError('All fields are required');
                return;
            }
            await login(email, password);
            router.push('/home');
        } catch (error) {
            console.error('Login failed:', error);
            setError('Invalid credentials');
        }
    };

    return (
        <GridedContainer>
            <Head>
                <title>Entrar AS</title>
                <meta name="title" content="Aleph Space - Login" />
                <meta name="description" content="Enter to the space where eternity tends to converge." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.aleph-space.org/" />
                <meta property="og:title" content="Aleph Space - Login" />
                <meta property="og:description" content="Enter to the space where eternity tends to converge." />
                <meta property="twitter:url" content="https://www.aleph-space.org/" />
                <meta property="twitter:title" content="Aleph Space - Login" />
                <meta property="twitter:description" content="Enter to the space where eternity tends to converge." />
            </Head>
            
            <div className={styles.heroSection}>
                <Title gifProvider='animatedicons.co'/>
                <p className={styles.subTitle}>Increasing universal wisdom</p>
                <form className={styles.solutionSection} onSubmit={handleSubmit}>
                    <div className={styles.solutionFeatures}>
                        <div className={styles.feature} style={{border: 0}}>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                className={styles.input}
                            />
                        </div>
                        
                        <div className={styles.feature} style={{border: 0}}>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                className={styles.input}
                            />
                        </div>

                        {error && (
                            <div className={styles.obstacle}>
                                {error}
                            </div>
                        )}

                        <button type="submit" className={styles.submitButton}>
                            Entrar
                        </button>
                    </div>
                </form>

                <p className={styles.calmText}>
                    Continua tu jornada con propósito
                </p>
            </div>

            
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <Image
                    src="https://pub-dbd642a535de4512bfae0a5fd40ab343.r2.dev/CULTURE/soft-logo-white-reduced.png"
                    className={styles.image}
                    alt="Corner Logo"
                    width={100}
                    height={100}
                    style={{ width: '10rem', height: 'auto' }}
                    priority
                />
            </div>
        </GridedContainer>
    );
};

export default LoginPage;