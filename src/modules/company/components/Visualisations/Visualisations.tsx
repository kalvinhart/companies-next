import { BarChart } from '@/core/components/BarChart';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import styles from './Visualisations.module.scss';

type Props = {};

const Visualisations: React.FC<Props> = () => {
  return (
    <Container fluid>
      <div className="row px-3">
        <div className="col-12 d-flex align-items-center">
          <Button
            variant="green"
            size="sm"
            className="rounded-2 me-2">
            First Preset
          </Button>
          <Button
            variant="green"
            size="sm"
            className="rounded-2 me-2">
            Second Preset
          </Button>
          <Button
            variant="green"
            size="sm"
            className="rounded-2 me-2">
            Third Preset
          </Button>

          <div className="form-check form-check-inline m-0">
            <input
              type="checkbox"
              className="form-check-input"
              id="checkboxExample1"
            />
            <label
              className="form-check-label text-white"
              htmlFor="checkboxExample1">
              Include Sector Averages
            </label>
          </div>
        </div>
        <div className="col-12">
          <Card>
            <Card.Body className="d-flex justify-content-center">
              <div className={styles.visualisationChart}>
                <BarChart
                  title="Turnover"
                  legendLabel="USD (Thousands)"
                  labels={['2018', '2019', '2020', '2021', '2022']}
                  data={[1020, 1500, 850, 1100, 1400]}
                />
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Visualisations;
