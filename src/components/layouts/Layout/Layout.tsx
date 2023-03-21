import { Ubuntu } from 'next/font/google';
import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import styles from './Layout.module.scss';

interface Props {
  children: React.ReactNode;
}

const ubuntu = Ubuntu({ weight: ['400', '700'], subsets: ['latin'] });

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={ubuntu.className}>
      <Header />
      <div className={styles.page}>
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
