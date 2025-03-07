import Head from 'next/head';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { useUser } from '@/contexts/User';
import CSRFGuard from '@/components/guards/CSRF';
import styles from '../styles/register.module.css';
import landingStyles from '../styles/landing.module.css';
import Title from '@/components/common/Title';

const FinalizePage: React.FC = () => {

  const router = useRouter();
  const { finalizeRegistrationWithPassword } = useAuth();
  const [password, setPassword] = useState('');
  const { userProfile } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState({
    length: false,
    number: false,
    uppercase: false,
    lowercase: false,
    special: false,
  });

  const validatePassword = (pass: string) => {
    const validations = {
      length: pass.length >= 8,
      number: /\d/.test(pass),
      uppercase: /[A-Z]/.test(pass),
      lowercase: /[a-z]/.test(pass),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(pass),
    };
    setValidationErrors(validations);
    return Object.values(validations).every(Boolean);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleFinalize = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!validatePassword(password)) {
      setError('Por favor, cumple con todos los requisitos de la contraseña');
      return;
    }
    setIsLoading(true);
    try {
      if (!userProfile?.id) throw new Error('Profile ID not found');
      if (!password) throw new Error('Password is required');
      await finalizeRegistrationWithPassword(userProfile.email, password);
      router.push('/home');
    } catch (err: unknown) {
      if (err instanceof Error) setError(err.message || 'An error occurred');
      console.error('Failed to finalize registration:', error);
      router.push('/login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // <CSRFGuard>
    <>
      <Head><title>Sellar AS</title></Head>
      <div className={styles.container}>
        
        <div className={styles.welcomeSection}>
          <Title word1='Casi' word2='Listo' gifProvider='animatedicons.co'/>
          <p className={styles.subTitle }>
            Elige tu llave
          </p>
        </div>

        <div className={styles.formWrapper}>
          <form className={styles.registrationForm} onSubmit={handleFinalize}>
            
            <div className={landingStyles.solutionSection}>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
                placeholder="Contraseña"
                style={{
                  width: '100%',
                  maxWidth: '320px',
                  padding: '1rem',
                  background: 'transparent',
                  border: '1px solid var(--border-color)',
                  borderRadius: '6px',
                  color: 'var(--text-primary-color)',
                  fontSize: '1rem',
                  textAlign: 'center'
                }}
              />
              <div className={landingStyles.solutionFeatures} style={{alignItems: 'center'}}>
                <p style={{
                  color: 'var(--forth-color)',
                  marginBottom: '1rem',
                  fontSize: '1.1rem'
                }}>Tu contraseña debe tener:</p>
                
                <div className={landingStyles.feature}>
                  <span className={validationErrors.length ? '✓' : '×'}>
                    Mínimo 8 caracteres
                  </span>
                </div>
                <div className={landingStyles.feature}>
                  <span className={validationErrors.number ? '✓' : '×'}>
                    Al menos un número
                  </span>
                </div>
                <div className={landingStyles.feature}>
                  <span className={validationErrors.uppercase ? '✓' : '×'}>
                    Al menos una mayúscula
                  </span>
                </div>
                <div className={landingStyles.feature}>
                  <span className={validationErrors.lowercase ? '✓' : '×'}>
                    Al menos una minúscula
                  </span>
                </div>
                <div className={landingStyles.feature}>
                  <span className={validationErrors.special ? '✓' : '×'}>
                    Al menos un carácter especial (!@#$%^&amp;*(),.?&quot;:{}|&lt;&gt;)
                  </span>
                </div>
              </div>
            </div>

            {error && (
              <div style={{
                color: '#ff4444',
                textAlign: 'center',
                margin: '1rem 0',
                padding: '0.5rem',
                borderRadius: '4px',
                fontSize: '0.9rem'
              }}>
                {error}
              </div>
            )}

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
      </div>
    </>
    // </CSRFGuard>
  );
};

export default FinalizePage;