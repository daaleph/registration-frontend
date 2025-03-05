// frontend/src/pages/index.tsx
import styles from '@/styles/landing.module.css';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import FixedLogo from '@/components/common/FixedLogo';

export default function LandingPage() {

  return (
    <>
      <Head>
        <title>Educación Eficiente AS</title>
        <meta name="title" content="Aleph Space" />
        <meta name="keywords" content="Aleph Space, Educación eficiente, Aprendizaje eficiente, Aprendizaje personalizado, Educacion eficiente" />
        <meta name="description" content="Educación eficiente y personalizada elevando tu vida con simples clics: Increasing universal wisdom - Where eternity tends to converge" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aleph-space.org/" />
        <meta property="og:title" content="Aleph Space" />
        <meta property="og:description" content="Educación eficiente y personalizada elevando tu vida con simples clics: Increasing universal wisdom - Where eternity tends to converge" />
        <meta property="twitter:url" content="https://aleph-space.org/" />
        <meta property="twitter:title" content="Aleph Space" />
        <meta property="twitter:description" content="Educación eficiente y personalizada elevando tu vida con simples clics: Increasing universal wisdom - Where eternity tends to converge" />
      </Head>
      
      <FixedLogo/>
      
      <div className={styles.landingContainer}>
        <section className={styles.heroSection}>
          <h1 className={styles.title}>
            Aleph
            <Image
              src="/sun.gif"
              alt="Sun of Aleph Space"
              width={75}
              height={75}
              style={{ display: 'inline', verticalAlign: 'middle', margin: '0 0.5rem' }}
            />
            Space
          </h1>
          <h1 className={styles.heroQuestion}>
            ¿Tu vida elevarías?
          </h1>
          <h2 className={styles.subHeroQuestion}>
            Poderosa tu mente, hazla más eficiente
          </h2>
        </section>

        <section className={styles.characterSection}>
          <div className={styles.characterCard}>
            <h3 className={styles.gothicText}>Tú</h3>
            <p className={styles.calmText}>
              Alguien buscando <b>más</b>.<br/>
              Para tu <b>familia</b>, tu <b>futuro</b>, el <b>mundo</b>.<br/>
              <b>Imposible</b> sin <b>eficiencia</b>.
            </p>
          </div>

          <div className={styles.characterCard}>
            <h3 className={styles.gothicText}>Nosotros</h3>
            <p className={styles.calmText}>
              Garantizamos tu <b>potencial</b>.<br/>
              Crecimiento <b>menos forzoso</b>.<br/>
              Cumplen <b>algoritmos verificados</b>.
            </p>
          </div>
        </section>

        <section className={styles.obstaclesSection}>
          <div className={styles.obstaclesList}>
            <div className={styles.obstacle}>
              <span className={styles.obstacleIcon}>⚠</span>
              <p>¿<b>Frustración</b> por incapacidad?</p>
            </div>
            <div className={styles.obstacle}>
              <span className={styles.obstacleIcon}>⏳</span>
              <p>El <b>tiempo finito</b></p>
            </div>
            <div className={styles.obstacle}>
              <span className={styles.obstacleIcon}>❓</span>
              <p>La <b>incertidumbre</b> paralizante</p>
            </div>
          </div>
        </section>

        <section className={styles.visionSection}>
          <p className={styles.visionText}>
            <b>Impactando mejor</b> tu presente.<br/>
            Disfrutando <b>menos esfuerzo</b>.<br/>
            Caminos gratificantemente <b>garantizados</b>.
          </p>
        </section>

        <section className={styles.solutionSection}>
          <h3 className={styles.calmText} style={{marginBottom: '1rem'}}>Simplifica el proceso</h3>
          <div className={styles.solutionFeatures}>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>🎯</span>
              <p>Con tu psicología</p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>📊</span>
              <p>Material, resultados y feedback <i>personalizados</i></p>
            </div>
            <div className={styles.feature}>
              <span className={styles.featureIcon}>✨</span>
              <p>Métodos eficaces garantizados</p>
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <p className={styles.ctaText}>
            Aprende. Crece. Impacta. 
            Tu significado verdadero.
          </p>
          <Link href="/register">
            <button className={styles.submitButton}>
              Descúbrete potencialmente ahora
            </button>
          </Link>
        </section>
      </div>
    </>
  );
}