import { SetStateAction } from 'react';
import { Filters } from '../../hooks/useCompanyFilters';
import CompaniesSearchHeader from '../CompaniesSearchHeader/CompaniesSearchHeader';
import CompaniesSearchNav from '../CompaniesSearchNav/CompaniesSearchNav';
import CompaniesSearchResults from '../CompaniesSearchResults/CompaniesSearchResults';
import styles from './CompaniesPage.module.scss';

type Props = {
  sectors: string[];
  countries: string[];
  filteredResults: string[];
  filters: Filters;
  setFilters: React.Dispatch<SetStateAction<Filters>>;
};

const CompaniesPage: React.FC<Props> = ({ sectors, countries, filteredResults, filters, setFilters }) => {
  return (
    <>
      <CompaniesSearchHeader
        sectors={sectors}
        countries={countries}
        filters={filters}
        setFilters={setFilters}
      />

      <div className={styles.searchContent}>
        <div className="container">
          <div className="row">
            <div className="col-10 col-lg-11 search-col">
              <CompaniesSearchResults companies={filteredResults} />
            </div>
            <div className="col-2 col-lg-1">
              <CompaniesSearchNav results={filteredResults} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompaniesPage;
