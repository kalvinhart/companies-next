import { Layout } from '@/core/components/layouts/Layout';
import '@/styles/custom-bootstrap-theme.scss';
import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
