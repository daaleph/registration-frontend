// frontend/src/pages/we.tsx
import Head from 'next/head';
import studies from '@/data/studies';
import Title from '@/components/common/Title';
import collaborators from '@/data/collaborators';
import styles from '@/styles/landing.module.css';
import { CollaboratorCard, Container, FixedLogo, StudyCard, Subtitle } from '@/components/common';

export default function LandingPage() {

    return (
        <Container>
            <Head>
                <title>Nosotros AS</title>
                <meta name="title" content="Aleph ✴ Space" />
                <meta name="keywords" content="Aleph Space, Educación eficiente, Aprendizaje eficiente, Aprendizaje personalizado" />
                <meta name="description" content="Quienes somos y por qué nosotros" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://aleph-space.org/" />
                <meta property="og:title" content="Aleph ✴ Space" />
                <meta property="og:description" content="Quienes somos y por qué nosotros" />
                <meta property="twitter:url" content="https://aleph-space.org/" />
                <meta property="twitter:title" content="Aleph ✴ Space" />
                <meta property="twitter:description" content="Quienes somos y por qué nosotros" />
            </Head>

            <FixedLogo/>

            <Title word1="¿Por qué" word2='nosotros?' />

            <section className={styles.characterSection}>
                <Subtitle text="El Team AS" />
                {collaborators.map((collaborator, index) => (
                    <CollaboratorCard key={index} {...collaborator} />
                ))}
            </section>

            <section className={styles.validationSection}>
                <Subtitle text="Comenzamos por esto" />
                {studies.map((study, index) => (
                    <StudyCard key={index} {...study} />
                ))}
            </section>
        </Container>
    );
}
