// frontend/src/components/common/CollaboratorCard.tsx
import styles from '@/styles/landing.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Collaborator } from '@/types/data';

const CollaboratorCard = (collab: Collaborator) => {
    return (
        <div className={styles.characterCard}>
            <div className={styles.collaboratorCard}>
                <div>
                    <h3 className={styles.heroQuestion}>{collab.title}</h3>
                    <h4 className={styles.subHeroQuestion}>{collab.name}</h4>
                    <h4>{collab.role}</h4>
                    <p>{collab.studies}</p>
                </div>
                <div className={styles.socialLinks}>
                    <Image
                        src={collab.photo}
                        className={styles.image}
                        alt={`${collab.name}'s photo`}
                        width={100}
                        height={100}
                    />
                    {collab.socialLinks.map((link, index) => (
                        <Link key={index} href={link.url} target="_blank" className={styles.socialIcon}>
                            <Image
                                src={link.icon}
                                className={styles.logo}
                                alt='Social Net'
                                width={100}
                                height={100}
                                style={{ width: '1.1rem', height: 'auto'}}
                                unoptimized
                                priority
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CollaboratorCard;
