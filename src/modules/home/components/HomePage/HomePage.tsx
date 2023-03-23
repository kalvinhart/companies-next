import { PageHeader } from '@/core/components/PageHeader';
import Link from 'next/link';
import { HomepageContent } from '../../types/HomePageContent';
import HomeContentCard from '../HomeContentCard/HomeContentCard';
import styles from './HomePage.module.scss';

type Props = {
  eosBlock: HomepageContent;
  sectorBlock: HomepageContent;
  aboutBlock: HomepageContent;
};

const HomePage: React.FC<Props> = ({ eosBlock, sectorBlock, aboutBlock }) => {
  return (
    <>
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

export default HomePage;
