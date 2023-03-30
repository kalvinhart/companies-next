import { PageHeader } from '@/core/components/PageHeader';
import Container from 'react-bootstrap/Container';
import { Sector } from '../../types/Sector';
import { SectorCard } from '../SectorCard';

type Props = {
  sectors: Sector[];
};
const SectorsPage: React.FC<Props> = ({ sectors }) => {
  return (
    <>
      <PageHeader
        title="Sectors"
        tagline="Infospectrum has assessed these sectors"
        imageUrl="/images/vessel2.jpg"
      />

      <Container>
        {sectors.map(sector => (
          <SectorCard
            key={sector.name}
            sector={sector}
          />
        ))}
      </Container>
    </>
  );
};

export default SectorsPage;
