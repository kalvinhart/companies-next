import { Layout } from '@/core/components/layouts/Layout';
import '@/styles/custom-bootstrap-theme.scss';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap');
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
