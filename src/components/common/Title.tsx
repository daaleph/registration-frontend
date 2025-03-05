import Image from 'next/image';
import styles from '../../styles/landing.module.css';

const Title = () => {
  return (
    <h1 className={styles.title}>
        Aleph
        <Image
            src="https://pub-dbd642a535de4512bfae0a5fd40ab343.r2.dev/CULTURE/sun.gif"
            alt="Sun of Aleph Space"
            width={75}
            height={75}
            style={{ display: 'inline', verticalAlign: 'middle' }}
            loading="eager"
            unoptimized
        />
        Space
    </h1>
  );
};

export default Title;
