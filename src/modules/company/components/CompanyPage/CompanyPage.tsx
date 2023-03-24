import { PageHeader } from '@/core/components/PageHeader';
import { useState } from 'react';
import { CompanyNav } from '../CompanyNav';
import { Visualisations } from '../Visualisations';

export type View = 'overview' | 'financial' | 'visualisations' | 'benchmarking';

type Props = {
  company: any;
};

const CompanyPage: React.FC<Props> = ({ company }) => {
  const [currentView, setCurrentView] = useState<View>('overview');

  const updateView = (view: View) => {
    setCurrentView(view);
  };

  const renderCompanyInfo = () => {
    switch (currentView) {
      case 'overview':
        return <div></div>;
      case 'financial':
        return <div></div>;
      case 'visualisations':
        return <Visualisations />;
      case 'benchmarking':
        return <div></div>;
      default:
        return <div></div>;
    }
  };

  return (
    <>
      <PageHeader
        title={company.Name}
        sector={company.Sector}
        imageUrl="/images/vessel.jpg"
        size="small-header"
      />

      <CompanyNav
        currentView={currentView}
        updateView={updateView}
      />

      {renderCompanyInfo()}
    </>
  );
};

export default CompanyPage;
