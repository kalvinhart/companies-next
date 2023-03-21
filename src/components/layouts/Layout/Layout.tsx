import { Ubuntu } from 'next/font/google';
import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';

interface Props {
  children: React.ReactNode;
}

const ubuntu = Ubuntu({ weight: ['400', '700'], subsets: ['latin'] });

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={ubuntu.className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
