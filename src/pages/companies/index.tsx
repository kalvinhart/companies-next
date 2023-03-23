import { CompanyService } from '@/core/services/CompanyService/CompanyService';
import CompanyPage from '@/modules/companies/components/CompanyPage/CompanyPage';
import { useCompanyFilters } from '@/modules/companies/hooks/useCompanyFilters';
import { GetStaticProps } from 'next';
import Head from 'next/head';

type Props = {
  companies: any[];
};

export const getStaticProps: GetStaticProps = async _context => {
  const companyService: CompanyService = new CompanyService();
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

      <CompanyPage
        sectors={sectors}
        countries={countries}
        filteredResults={filteredResults}
        filters={filters}
        setFilters={setFilters}
      />
    </>
  );
};

export default Companies;
