// frontend/src/pages/we.tsx
import Head from 'next/head';
import studies from '@/data/studies';
import Title from '@/components/common/Title';
import collaborators from '@/data/collaborators';
import styles from '@/styles/landing.module.css';
import { CollaboratorCard, GridedContainer, FixedLogo, StudyCard, Subtitle } from '@/components/common';

export default function LandingPage() {

    return (
        <GridedContainer>
            
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

            <section className={styles.heroSection}>
                <Title word1="Somos" word2='Legión' />
                <Subtitle text='¿Tu vida elevarías?'/>
                <h2 className={styles.heroQuestion}>
                    Nuestra historia contándose
                </h2>
            </section>

            <section className={styles.characterSection}>
                <Subtitle text="Team Aleph Space" />
                {collaborators.map((collaborator, index) => (
                    <CollaboratorCard key={index} {...collaborator} />
                ))}
            </section>
            
            <div>
                <Subtitle text="Comenzamos por esto"/>
                <h2 className={styles.heroQuestion}>
                    Estudiando como locos
                </h2>
            </div>
            
            { studies.map((study, index) => (
                <StudyCard key={index} {...study} />
            ))}

        </GridedContainer>
    );
}
