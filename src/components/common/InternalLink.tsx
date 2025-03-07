// frontend/src/components/InternalLink.tsx
import Link from 'next/link';
import styles from '../../styles/landing.module.css';

interface InternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * A reusable link component for internal navigation within the website.
 * @param href - The URL path to navigate to (e.g., '/about').
 * @param children - The content to be displayed inside the link (e.g., text or an icon).
 * @param className - Optional additional CSS classes to customize the link's appearance.
 */
const InternalLink: React.FC<InternalLinkProps> = ({ href, children, className }) => {
  return (
    <Link href={href} className={`${styles.link} ${className || ''}`}>
      {children}
    </Link>
  );
};

export default InternalLink;