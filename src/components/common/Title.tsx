import React from 'react'
import Image from 'next/image';
import styles from '../../styles/landing.module.css';

interface TitleProps {
  word1?: string;
  word2?: string;
  gif?: string;
  altGif?: string;
  gifProvider?: string;
}

const Title = ({
  word1 = "Aleph",
  word2 = "Space",
  gif = "sun.gif",
  altGif = "sun",
  gifProvider = "Aleph Space"
}: TitleProps) => {
  return (
    <h1 className={styles.title}>
      {word1}
      <Image
        src={`https://pub-dbd642a535de4512bfae0a5fd40ab343.r2.dev/CULTURE/${gif}`}
        alt={`An ${gifProvider}'s ${altGif} gif`}
        width={75}
        height={75}
        style={{ display: 'inline', verticalAlign: 'middle' }}
        loading="eager"
        unoptimized
      />
      {word2}
    </h1>
  );
};

export default Title;