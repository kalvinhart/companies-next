import { SetStateAction } from 'react';
import { Filters } from '../../hooks/useCompanyFilters';
import CompanySearchHeader from '../CompanySearchHeader/CompanySearchHeader';
import CompanySearchNav from '../CompanySearchNav/CompanySearchNav';
import CompanySearchResults from '../CompanySearchResults/CompanySearchResults';
import styles from './CompanyPage.module.scss';

type Props = {
  sectors: string[];
  countries: string[];
  filteredResults: string[];
  filters: Filters;
  setFilters: React.Dispatch<SetStateAction<Filters>>;
};

const CompanyPage: React.FC<Props> = ({ sectors, countries, filteredResults, filters, setFilters }) => {
  return (
    <>
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

export default CompanyPage;
