import Link from 'next/link';

interface Props {
  companies: any[];
}

const CompanySearchResults: React.FC<Props> = ({ companies }) => {
  return (
    <div id="searchResults">
      {companies.length === 0 ? (
        <span className="fs-3">No companies matched your search.</span>
      ) : (
        <ul className="list-group list-group-flush">
          {companies.map(company => (
            <li
              key={company.letter}
              id={company.letter}
              className="list-group-item">
              <h3 className="p-3">{company.letter}</h3>
              <hr />
              <ul className="p-2">
                {company.companies.map((c: any) => (
                  <li
                    key={c.Name}
                    className="list-group-item mb-2">
                    <Link
                      href={`/companies/${c.SafeName}`}
                      className="fs-5 mb-1">
                      <h5 className="fw-bold mb-0">{c.Name}</h5>
                      <span className="fs-6 mb-1 me-3">
                        <b>Sector:</b> {c.Sector}
                      </span>
                      <span className="fs-6 mb-1">
                        <b>Country:</b> {c.Country || c.CountryCode}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompanySearchResults;
