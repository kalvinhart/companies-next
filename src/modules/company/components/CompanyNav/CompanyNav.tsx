import Button from 'react-bootstrap/Button';
import { View } from '../CompanyPage/CompanyPage';
import styles from './CompanyNav.module.scss';

type Props = {
  currentView: View;
  updateView: (view: View) => void;
};

const CompanyNav: React.FC<Props> = ({ currentView, updateView }) => {
  return (
    <div className="container">
      <div className={`${styles.companyNav} my-4`}>
        <span className={`${styles.activeCompanyNavItem} ${currentView}`}></span>
        <Button
          className={`${styles.companyNavItem}`}
          onClick={() => updateView('overview')}>
          Overview
        </Button>
        <Button
          className={`${styles.companyNavItem}`}
          onClick={() => updateView('financial')}>
          Financial
        </Button>
        <Button
          className={`${styles.companyNavItem}`}
          onClick={() => updateView('visualisations')}>
          Visualisations
        </Button>
        <Button
          className={`${styles.companyNavItem}`}
          onClick={() => updateView('benchmarking')}>
          Benchmarking
        </Button>
      </div>
    </div>
  );
};

export default CompanyNav;
