// frontend/src/pages/index.tsx
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useUser } from '../contexts/User';
import { useCSRF } from '@/hooks/useCSRFToken';
import AuthService from '../services/Auth';
import { getCsrfToken } from '../services/axios.config';
import { UserProfile } from '@/models/interfaces';
import styles from '../styles/register.module.css';
import React, { useEffect, useState } from 'react';
import { ErrorDisplay, FixedLogo, LoadingState, Title } from '@/components/common';

const InitialRegistration: React.FC = () => {
  const router = useRouter();
  const { initilizeRegistrationProcess } = useCSRF();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setUserProfile, setPreviousState, currentPhase } = useUser();
  const [formData, setFormData] = useState<UserProfile>({
    id: '',
    complete_name: '',
    preferred_name: '',
    email: '',
    movil: '',
    telegram: '',
    password: '',
  });

  const authService = AuthService.getInstance();

  useEffect(() => {
    async function getInitialToken() {
      try {
        await authService.initialToken();
      } catch (error) {
        console.error('Failed to get CSRF token:', error);
      }
    }
    getInitialToken();
  }, []);

  const validateForm = (): boolean => {
    if (!formData.complete_name.trim()) {
      setError('Complete name is required');
      return false;
    }
    if (!formData.preferred_name.trim()) {
      setError('Preferred name is required');
      return false;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Valid email is required');
      return false;
    }
    if (!formData.movil.trim() || !/^\+?[\d\s-]{8,}$/.test(formData.movil)) {
      setError('Valid mobile number is required');
      return false;
    }
    return true;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(null);
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    try {
      let response;
      setIsLoading(true);
      const profileInfo = await authService.profileExists<UserProfile>(formData.email);
      if (profileInfo) {
        const newProfile = {...formData, id: profileInfo.id };
        if (profileInfo.password) {
          router.push('/login', undefined, { shallow: true });
          return;
        } 
        setUserProfile(newProfile);
        const previousState = await authService.previousState<{profile: number, bfi: number, product: number}>(formData.email);
        setPreviousState(previousState);
        initilizeRegistrationProcess(getCsrfToken());
        router.push(`/${currentPhase.toLowerCase()}`, undefined, { shallow: true });
      } else {
        response = await authService.createProfile<{ id: string }>(formData);
        const newProfile = {
          ...formData,
          id: response.id
        };
        setUserProfile(newProfile);
        initilizeRegistrationProcess(getCsrfToken());
        router.push('/profile', undefined, { shallow: true });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create profile');
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <LoadingState />

  return (
    <>  
      <Head>
        <title>Registro AS</title>
        <meta name="title" content="Aleph Space - Increasing universal wisdom" />
        <meta name="description" content="Where eternity tends to converge." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.aleph-space.org/" />
        <meta property="og:title" content="Aleph Space - Increasing universal wisdom" />
        <meta property="og:description" content="Where eternity tends to converge." />
        <meta property="twitter:url" content="https://www.aleph-space.org/" />
        <meta property="twitter:title" content="Aleph Space - Increasing universal wisdom" />
        <meta property="twitter:description" content="Where eternity tends to converge." />
      </Head>

      <FixedLogo/>
      
      <div className={styles.container}>
        <div className={styles.welcomeSection}>
          <Title gifProvider='animatedicons.co'/>
          <p className={styles.subTitle}>Increasing universal wisdom.</p>
        </div>

        <div className={styles.privacyNotice}>
          <h3 className={styles.privacyTitle} style={{textAlign: 'center'}}>Seguridad</h3>
          <p className={styles.privacyText} style={{textAlign: 'center'}}>
            Sagrada información nuestra.<br/>
            Tesoros tecnológicamente comunicados<br/>
            Mejorando experiencias humanas.
          </p>
        </div>

        <div className={styles.formWrapper}>
          <form onSubmit={handleSubmit} className={styles.registrationForm}>
            <div className={styles.formGroup}>
              <label htmlFor="complete_name">Nombres y Apellidos *</label>
              <input
                type="text"
                id="complete_name"
                name="complete_name"
                value={formData.complete_name}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="preferred_name">¿Cómo prefieres ser conocido? *</label>
              <input
                type="text"
                id="preferred_name"
                name="preferred_name"
                value={formData.preferred_name}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="movil">Número Móvil *</label>
              <input
                type="tel"
                id="movil"
                name="movil"
                value={formData.movil}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="telegram">Telegram</label>
              <input
                type="text"
                id="telegram"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                disabled={isLoading}
              />
            </div>

            {error && <ErrorDisplay message={error} />}

            <p className={styles.calmText}>
              Toma tu tiempo. Respira. No habrá más prisas.
            </p>

            <div className={styles.buttonContainer}>
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isLoading}
              >
                {isLoading ? 'Creando Perfil...' : 'Comienza'}
              </button>
            </div>
          </form>
        </div>

        <div className={styles.formFooter}>
          <p className={styles.calmText}>
            Asegura información válida.<br/>
            Nuestra aventura comenzará.<br/>
            Solo si llegas hasta el final.
          </p>
        </div>
      </div>
    </>
  );
};

export default InitialRegistration;