import { PageHeader } from '@/components/PageHeader';
import Head from 'next/head';
import Link from 'next/link';
import HomeContentCard from './HomeContentCard';

interface HomepageContent {
  blockId: string;
  title: string;
  content: string;
  image: {
    path: string;
  };
}

export default function Home() {
  const eosBlock: HomepageContent = {
    blockId: '',
    title: '',
    content: '',
    image: {
      path: '',
    },
  };

  const sectorsBlock: HomepageContent = {
    blockId: '',
    title: '',
    content: '',
    image: {
      path: '',
    },
  };

  const aboutBlock: HomepageContent = {
    blockId: '',
    title: '',
    content: '',
    image: {
      path: '',
    },
  };

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
          href="/favicon.ico"
        />
      </Head>

      <PageHeader
        title="Welcome to Infospectrum EOS"
        tagline="Company Ranking and Benchmarking across Sectors<br>Sector Averages<br>Detailed Financial Data with Visualisations"
        imageUrl="/public/images/vessel.jpg"
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

      <div className="home-content-card py-5 bg-primary text-white is-background-logo">
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

      {sectorsBlock && (
        <HomeContentCard
          title={sectorsBlock.title}
          paragraph={sectorsBlock.content}
          imagePath={sectorsBlock.image.path}
          imagePosition="left"
          buttonText="View Sectors"
          buttonLink="/sectors"
        />
      )}

      {aboutBlock && (
        <div className="home-content-card py-5 bg-primary is-background-logo">
          <div style={{ height: '190px' }}></div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bg-white rounded p-4 p-lg-5">
                  <h3 className="display-3 mb-4">{aboutBlock.title}?</h3>
                  <p dangerouslySetInnerHTML={{ __html: aboutBlock.content }}></p>
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
}
