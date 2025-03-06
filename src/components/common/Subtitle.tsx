
import styles from '../../styles/landing.module.css';

interface SubtitleProps {
  text: string;
}

const Subtitle = (subtitle: SubtitleProps) => {
  return (
    <h1 className={styles.subTitle}>
        {subtitle.text}
    </h1>
  );
};

export default Subtitle;