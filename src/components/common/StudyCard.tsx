// frontend/src/components/common/StudyCard.tsx
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/landing.module.css';
import { Study } from '@/types/data';

const StudyCard = ( study: Study ) => {

  return (
    <div className={styles.studyCard}>
      <Link href={study.link}>
        <div className={styles.studyContent}>
          <div className={styles.authorWrapper}>
            <div className={styles.authors}>
              {study.authors.map((author, index) => (
                <p key={index}>{author}</p>
              ))}
            </div>
            <div className={styles.studyThumbnailWrapper}>
              <Image
                src={study.thumbnail}
                alt={study.title}
                className={styles.studyThumbnail}
                width={300}
                height={300}
              />
            </div>
          </div>
          <p className={styles.studyReason}>{study.reason}</p>
        </div>
      </Link>
    </div>
  );
};

export default StudyCard;
