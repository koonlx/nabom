import styles from '@/widgets/header/ui/header.module.css';
import Link from 'next/link';

export default function Header({ className }: Readonly<{ className?: string }>) {
   return (
      <header className={`${styles.header} ${className}`}>
         <Link href="/" className={styles.link}>home</Link>
         <Link href="/signin" className={styles.link}>signin</Link>
         <Link href="/signup" className={styles.link}>signup</Link>
         <Link href="/profile" className={styles.link}>profile</Link>
      </header>
   );
}
