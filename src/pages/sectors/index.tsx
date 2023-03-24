import { ContentService } from '@/core/services/ContentService/ContentService';
import { SectorsPage } from '@/modules/sectors/components/SectorsPage';
import { Sector } from '@/modules/sectors/types/Sector';
import { GetStaticProps } from 'next';
import Head from 'next/head';

export const getStaticProps: GetStaticProps = async _context => {
  const contentService = new ContentService();
  const sectors = await contentService.getSectors();

  return {
    props: {
      sectors,
    },
  };
};

type Props = {
  sectors: Sector[];
};

const Sectors: React.FC<Props> = ({ sectors }) => {
  return (
    <>
      <Head>
        <title>InfoSpectrum Eos Company Sectors</title>
        <meta
          name="description"
          content="InfoSpectrum Eos Company Sectors"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/images/logos/blue-logo-32.png"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>

      <SectorsPage sectors={sectors} />
    </>
  );
};

export default Sectors;
