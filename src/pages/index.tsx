import { PageHeader } from '@/components/PageHeader';
import { ContentService } from '@/services/ContentService/ContentService';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import styles from './Home.module.scss';
import HomeContentCard from './HomeContentCard';
interface HomepageContent {
  blockId: string;
  title: string;
  content: string;
  image: {
    path: string;
  };
}

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

interface Props {
  eosBlock: HomepageContent;
  sectorBlock: HomepageContent;
  aboutBlock: HomepageContent;
}

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
      </Head>

      <PageHeader
        title="Welcome to Infospectrum EOS"
        tagline="Company Ranking and Benchmarking across Sectors<br>Sector Averages<br>Detailed Financial Data with Visualisations"
        imageUrl="/images/vessel.jpg"
        size="large-header"
      />

      {eosBlock && (
        <HomeContentCard
          title={eosBlock.title}
          paragraph={eosBlock.content}
          imagePath={eosBlock.image.path}
          imagePosition="right"
        />
      )}

      <div className={`home-content-card py-5 bg-primary text-white ${styles.isBackgroundLogo}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="py-2">4 Sectors</h4>
              <h4 className="py-2">80 Companies</h4>
              <h4 className="py-2">5+ Periods of Financial Data</h4>
            </div>
          </div>
        </div>
      </div>

      {sectorBlock && (
        <HomeContentCard
          title={sectorBlock.title}
          paragraph={sectorBlock.content}
          imagePath={sectorBlock.image.path}
          imagePosition="left"
          buttonText="View Sectors"
          buttonLink="/sectors"
        />
      )}

      {aboutBlock && (
        <div className={`home-content-card py-5 bg-primary ${styles.isBackgroundLogo}`}>
          <div style={{ height: '190px' }}></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bg-white rounded p-4 p-lg-5">
                  <h3 className="display-3 mb-4">{aboutBlock.title}?</h3>
                  <span dangerouslySetInnerHTML={{ __html: aboutBlock.content }}></span>
                  <div className="mt-4">
                    <Link
                      href="https://www.infospectrum.net"
                      className="btn btn-green"
                      target="_blank">
                      Visit our website
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
