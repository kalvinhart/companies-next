import { Ubuntu } from 'next/font/google';
import React from 'react';
import { Footer } from '../Footer';
import { HeaderNav } from '../HeaderNav';
import styles from './Layout.module.scss';

type Props = {
  children: React.ReactNode;
};

const ubuntu = Ubuntu({ weight: ['400', '700'], subsets: ['latin'] });

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={ubuntu.className}>
      <HeaderNav />
      <div className={styles.page}>
        <main className={styles.content}>{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
