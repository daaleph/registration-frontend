// frontend/src/components/common/StudyCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/landing.module.css';

interface Study {
    title: string;
    thumbnail: string;
    link: string;
}

const StudyCard = (study: Study) => {
    return (
        <div className={styles.studyCard}>
            <Link href={study.link}>
                <Image src={study.thumbnail} alt={study.title} className={styles.studyThumbnail} width={100} height={100}/>
                <h3>{study.title}</h3>
            </Link>
        </div>
    );
};

export default StudyCard;
