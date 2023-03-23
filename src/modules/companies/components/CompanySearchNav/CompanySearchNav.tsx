import styles from './CompanySearchNav.module.scss';

type Props = {
  results: any[];
};

const CompanySearchNav: React.FC<Props> = ({ results }) => {
  const locateLetter = (letter: string) => {
    const letterEl: HTMLElement = document.getElementById(letter)!;
    if (!letterEl) return;

    const offset = letterEl.offsetTop - 240; // less search bar & header height

    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  return results.length > 0 ? (
    <ul className={`${styles.searchNav} ${styles.ul} py-3`}>
      {results.map(result => (
        <li
          key={result.letter}
          className={styles.letter}>
          <button
            className="btn btn-link"
            onClick={() => locateLetter(result.letter)}>
            {result.letter}
          </button>
        </li>
      ))}
    </ul>
  ) : null;
};

export default CompanySearchNav;
