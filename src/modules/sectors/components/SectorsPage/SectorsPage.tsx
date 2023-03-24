import { PageHeader } from '@/core/components/PageHeader';
import Container from 'react-bootstrap/Container';
import { Sector } from '../../types/Sector';

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
          <div key={sector.name}>{sector.name}</div>
        ))}
      </Container>
    </>
  );
};

export default SectorsPage;
