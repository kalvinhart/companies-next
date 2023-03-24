import { CompanyService } from '@/core/services/CompanyService/CompanyService';
import { CompanyPage } from '@/modules/company/components/CompanyPage';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

type Props = {
  company: any;
};

export const getServerSideProps: GetServerSideProps = async context => {
  const companyService: CompanyService = new CompanyService();
  const company = await companyService.getCompanyById(context.params!.companyId as string);

  return {
    props: {
      company: company,
    },
  };
};

const Company: React.FC<Props> = ({ company }) => {
  return (
    <>
      <Head>
        <title>InfoSpectrum EOS - Company Information for {company.Name}</title>
        <meta
          name="description"
          content={`InfoSpectrum EOS company information for ${company.Name}.`}
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

      <CompanyPage company={company} />
    </>
  );
};

export default Company;
