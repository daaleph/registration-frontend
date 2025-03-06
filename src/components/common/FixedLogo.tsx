import Image from 'next/image';
import styles from '../../styles/landing.module.css';

const FixedLogo = () => {
  return (
    <Image
      src="https://pub-dbd642a535de4512bfae0a5fd40ab343.r2.dev/CULTURE/golden-soft-logo-white-min.png"
      className={styles.fixedLogo}
      alt='Fixed Logo for corners'
      width={100}
      height={100}
      style={{ width: '1.1rem', height: 'auto', top: '1rem', right: '1rem'}}
      priority
    />
  );
};

export default FixedLogo;
