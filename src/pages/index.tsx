// frontend/src/pages/index.tsx
import { GridedContainer, FixedLogo, Subtitle, Title } from '@/components/common';
import styles from '@/styles/landing.module.css';
import Head from 'next/head';
import Link from 'next/link';

export default function LandingPage() {

  return (
    <GridedContainer>

      <Head>
        <title>Educación Eficiente AS</title>
        <meta name="title" content="Aleph ✴ Space" />
        <meta name="keywords" content="Aleph Space, Educación eficiente, Aprendizaje eficiente, Aprendizaje personalizado" />
        <meta name="description" content="Educación eficiente eleva tu vida: Increasing universal wisdom - Where we converge" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aleph-space.org/" />
        <meta property="og:title" content="Aleph ✴ Space" />
        <meta property="og:description" content="Educación eficiente eleva tu vida: Increasing universal wisdom - Where we converge" />
        <meta property="twitter:url" content="https://aleph-space.org/" />
        <meta property="twitter:title" content="Aleph ✴ Space" />
        <meta property="twitter:description" content="Educación eficiente eleva tu vida: Increasing universal wisdom - Where we converge" />
      </Head>

      <FixedLogo/>

      <section className={styles.heroSection}>
        <Title gifProvider='animatedicons.co'/>
        <Subtitle text='¿Tu vida elevarías?'/>
        <h2 className={styles.heroQuestion}>
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
        <h3 className={styles.calmText}>Simplifica el proceso</h3>
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
          Aprende. Crece. Impacta.<br/>
          Tu significado verdadero.
        </p>
        <Link href="/register">
          <button className={styles.submitButton}>
            Descúbrete potencialmente ahora
          </button>
        </Link>
      </section>

    </GridedContainer>
  );
}