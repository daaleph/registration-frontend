// frontend/src/components/common/CollaboratorCard.tsx
import styles from '@/styles/landing.module.css';
import Link from 'next/link';
import Image from 'next/image';

type SocialLink = {
    url: string;
    icon: string;
}

interface Collaborator {
    title: string;
    name: string;
    studies: string;
    socialLinks: SocialLink[];
}

const CollaboratorCard = (collab: Collaborator) => {
    return (
        <div className={styles.characterCard}>
            <h3>{collab.title}</h3>
            <h4>{collab.name}</h4>
            <p>{collab.studies}</p>
            <div className={styles.socialLinks}>
                {collab.socialLinks.map((link, index) => (
                    <Link key={index} href={link.url} target="_blank" className={styles.socialIcon}>
                        <Image
                            src={link.icon}
                            className={styles.fixedLogo}
                            alt='Social'
                            width={100}
                            height={100}
                            style={{ width: '1.1rem', height: 'auto'}}
                            priority
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CollaboratorCard;
