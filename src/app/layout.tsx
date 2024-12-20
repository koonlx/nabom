import type { Metadata } from 'next';

import { Footer, Header } from '@/widgets';

import '@/shared/style/globals.css';
import styles from '@/shared/style/layout.module.css';

export const metadata: Metadata = {
   title: 'Create Next App',
   description: 'Generated by create next app',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
   return (
      <html lang='en'>
         <body className={styles.body}>
            <Header className={`${styles.header}`} />
            <main className={styles.main}>{children}</main>
            <Footer className={`${styles.footer}`} />
         </body>
      </html>
   );
}
