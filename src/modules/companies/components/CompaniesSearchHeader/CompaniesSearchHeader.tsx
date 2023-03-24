import { Filters } from '@/modules/companies/hooks/useCompanyFilters';
import React, { SetStateAction, useState } from 'react';
import styles from './CompaniesSearchHeader.module.scss';

type Props = {
  sectors: string[];
  countries: string[];
  filters: Filters;
  setFilters: React.Dispatch<SetStateAction<Filters>>;
};

const CompaniesSearchHeader: React.FC<Props> = ({ sectors, countries, filters, setFilters }) => {
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const toggleFilters = () => {
    setShowFilters(prev => !prev);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFilters(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className={`${styles.searchHeader} bg-secondary text-white d-flex align-items-center`}>
      <div className="container">
        <div className="d-flex flex-column">
          <h2 className="mb-2">Companies</h2>
          <p>Select a company below for more info</p>
          <button
            className={`btn btn-primary ${styles.filtersToggle}`}
            onClick={toggleFilters}>
            {showFilters ? 'Hide' : 'Show'} Filters
          </button>

          {/* Filters */}
          <div className={`${styles.filtersPanel} ${showFilters ? 'show' : ''} py-1`}>
            <div className="row">
              <div className="col-12 col-lg-3 px-3 py-1 p-lg-0 px-lg-1">
                <input
                  type="text"
                  name="Name"
                  className="form-control me-2"
                  value={filters.Name}
                  placeholder="Filter by company name"
                  onChange={handleFilterChange}
                />
              </div>
              <div className="col-12 col-lg-3 px-3 py-1 p-lg-0 px-lg-1">
                <select
                  name="Sector"
                  id="sector"
                  className="form-select me-2"
                  value={filters.Sector}
                  onChange={handleFilterChange}>
                  <option
                    value=""
                    disabled>
                    Filter by sector
                  </option>
                  <option value="">(all)</option>
                  {sectors.map(sector => (
                    <option key={sector}>{sector}</option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-lg-3 px-3 py-1 p-lg-0 px-lg-1">
                <select
                  name="Country"
                  id="country"
                  className="form-select me-2"
                  value={filters.Country}
                  onChange={handleFilterChange}>
                  <option
                    value=""
                    disabled>
                    Filter by country
                  </option>
                  <option value="">(all)</option>
                  {countries.map(country => (
                    <option key={country}>{country}</option>
                  ))}
                </select>
              </div>
              <div className="col-12 col-lg-3 px-3 py-1 p-lg-0 px-lg-1">
                <input
                  type="text"
                  name="Age"
                  className="form-control"
                  placeholder="Filter by company age"
                  value={filters.Age}
                  onChange={handleFilterChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesSearchHeader;
