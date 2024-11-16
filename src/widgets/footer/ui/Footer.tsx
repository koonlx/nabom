import styles from '@/widgets/footer/ui/footer.module.css';
import Link from 'next/link';

export default function Footer({ className }: Readonly<{ className?: string }>) {
   return (
      <footer className={`${styles.footer} ${className}`}>
         developed by © <Link className={`${styles.link}`} href={`https://github.com/koonlx`}>koonlx</Link>
      </footer>
   );
}
