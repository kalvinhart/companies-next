import { ContentService } from '@/core/services/ContentService/ContentService';
import HomePage from '@/modules/home/components/HomePage/HomePage';
import { HomepageContent } from '@/modules/home/types/HomePageContent';
import { GetStaticProps } from 'next';
import Head from 'next/head';

const contentService: ContentService = new ContentService();

export const getStaticProps: GetStaticProps = async _context => {
  const homePageContent = await contentService.getHomepage();

  const eosBlock = homePageContent.find((c: any) => c.blockId === 'eosBlock') ?? null;
  const sectorBlock = homePageContent.find((c: any) => c.blockId === 'sectorBlock') ?? null;
  const aboutBlock = homePageContent.find((c: any) => c.blockId === 'aboutBlock') ?? null;

  return {
    props: {
      eosBlock,
      sectorBlock,
      aboutBlock,
    },
  };
};

type Props = {
  eosBlock: HomepageContent;
  sectorBlock: HomepageContent;
  aboutBlock: HomepageContent;
};

const Home: React.FC<Props> = ({ eosBlock, sectorBlock, aboutBlock }) => {
  return (
    <>
      <Head>
        <title>InfoSpectrum Eos</title>
        <meta
          name="description"
          content="InfoSpectrum Eos"
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

      <HomePage
        aboutBlock={aboutBlock}
        eosBlock={eosBlock}
        sectorBlock={sectorBlock}
      />
    </>
  );
};

export default Home;
