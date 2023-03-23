import { useCompanyFilters } from '@/hooks/useCompanyFilters';
import { CompanyService } from '@/services/CompanyService/CompanyService';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import CompanySearchHeader from './CompanySearchHeader';
import CompanySearchNav from './CompanySearchNav';
import CompanySearchResults from './CompanySearchResults';
import styles from './Index.module.scss';

interface Props {
  companies: any[];
}

const companyService: CompanyService = new CompanyService();

export const getStaticProps: GetStaticProps = async _context => {
  const companies = await companyService.getCompanys();

  return {
    props: {
      companies: JSON.parse(companies),
    },
  };
};

const Companies: React.FC<Props> = ({ companies }) => {
  const { sectors, countries, filteredResults, filters, setFilters } = useCompanyFilters(companies);

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

      <CompanySearchHeader
        sectors={sectors}
        countries={countries}
        filters={filters}
        setFilters={setFilters}
      />

      <div className={styles.searchContent}>
        <div className="container">
          <div className="row">
            <div className="col-10 col-lg-11 search-col">
              <CompanySearchResults companies={filteredResults} />
            </div>
            <div className="col-2 col-lg-1">
              <CompanySearchNav results={filteredResults} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Companies;
