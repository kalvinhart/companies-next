import { useCallback, useEffect, useState } from 'react';

export type Filters = {
  Name: string;
  Sector: string;
  Country: string;
  Age: string;
};

export const useCompanyFilters = (companies: any[]) => {
  const [sectors, setSectors] = useState<string[]>([]);
  const [countries, setCountries] = useState<string[]>([]);
  const [filteredResults, setFilteredResults] = useState<any[]>([]);

  const [filters, setFilters] = useState<Filters>({
    Name: '',
    Age: '',
    Country: '',
    Sector: '',
  });

  const getUniqueItems = useCallback((results: any[], key: 'Sector' | 'Country'): any => {
    const set = new Set<any>();

    results.forEach((r: any) => {
      if (!set.has(r[key])) set.add(r[key]);
    });

    const response = [...set.values()];

    return sortResultsAlphabetically(response);
  }, []);

  const resetAllFilters = useCallback((): void => {
    setSectors(getUniqueItems(companies, 'Sector'));
    setCountries(getUniqueItems(companies, 'Country'));
    setFilteredResults(groupCompaniesByLetter(companies));
  }, [companies, getUniqueItems]);

  const filterResults = useCallback(
    (filters: any): void => {
      if (companies.length === 0) return;
      console.log('filters: ', filters);

      if (hasNoFiltersApplied(filters)) {
        resetAllFilters();
        return;
      }

      let result: any[] = [];

      Object.keys(filters).forEach(key => {
        console.log('current key: ', key);

        if (filters[key]) {
          if (result.length > 0) {
            result = result.filter(c => {
              console.log('c: ', c);
              console.log('c[key]: ', c[key]);
              return c[key].toLowerCase().includes(filters[key].toLowerCase());
            });
          } else {
            result = companies.filter((c: any) => c[key].toLowerCase().includes(filters[key].toLowerCase()));
          }
        }
      });

      setSectors(getUniqueItems(result, 'Sector'));
      setCountries(getUniqueItems(result, 'Country'));
      setFilteredResults(groupCompaniesByLetter(result));
    },
    [companies, getUniqueItems, resetAllFilters]
  );

  const hasNoFiltersApplied = (filters: any): boolean => {
    if (!filters.Name && !filters.Sector && !filters.Country && !filters.Age) return true;

    return false;
  };

  const groupCompaniesByLetter = (companies: any[]): any[] => {
    const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';

    const sortedCompanies = alphabet.split('').reduce((companyArray: any[], letter: string) => {
      const companiesByLetter = companies.filter(c => c.Name.toLowerCase().startsWith(letter));

      if (companiesByLetter.length > 0)
        return [
          ...companyArray,
          {
            letter: letter.toUpperCase(),
            companies: companiesByLetter,
          },
        ];
      else return companyArray;
    }, []);

    console.log('sorted companies: ', sortedCompanies);

    return sortedCompanies;
  };

  const sortResultsAlphabetically = (results: string[]): any => {
    return results.sort();
  };

  useEffect(() => {
    setFilteredResults(groupCompaniesByLetter(companies));
    setSectors(getUniqueItems(companies, 'Sector'));
    setCountries(getUniqueItems(companies, 'Country'));
  }, [companies, getUniqueItems]);

  useEffect(() => {
    filterResults(filters);
  }, [filters, filterResults]);

  return {
    sectors,
    countries,
    filteredResults,
    filters,
    setFilters,
  };
};
