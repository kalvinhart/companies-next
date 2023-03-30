import Image from 'next/image';
import Link from 'next/link';
import { Sector } from '../../types/Sector';
import styles from './SectorCard.module.scss';

type Props = {
  sector: Sector;
};

const SectorCard: React.FC<Props> = ({ sector }) => {
  const cmsRoot = process.env.NEXT_PUBLIC_CMS_ROOT ?? '';
  const imageUrl = (image: any): string => {
    return `${cmsRoot}/${image.path}`;
  };

  return (
    <div className="row mt-4">
      <div className="col-12 col-lg-8 ">
        <div className="bg-white rounded p-3 p-lg-4">
          <h3 className="display-3 mb-4">{sector.name}</h3>
          <div className="row">
            <div className="col-12 col-lg-6">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin fringilla quam a dapibus consequat.
                Pellentesque malesuada aliquet lectus id pulvinar. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Proin fringilla quam a dapibus consequat.
              </p>
            </div>
            <div className="col-12 col-lg-6">{/* Stats will go here */}</div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="d-flex justify-content-center my-2">
                <Link
                  href={`/companies/search?sector=${sector.name}`}
                  className="btn btn-green">
                  View all companies in {sector.name}
                </Link>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="d-flex justify-content-center my-2">
                <Link
                  href={`/companies/search?sector=${sector.name}`}
                  className="btn btn-green">
                  View Sector Ranking
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-4 mt-2 mt-md-0">
        <Image
          src={imageUrl(sector.image)}
          alt=""
          width={450}
          height={400}
          className={`${styles.sectorImage} rounded`}
        />
      </div>
    </div>
  );
};

export default SectorCard;
