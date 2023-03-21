import Image from 'next/image';
import { useState } from 'react';
import styles from './PageHeader.module.scss';

interface Props {
  title?: string;
  tagline?: string;
  address?: string;
  sector?: string;
  country?: string;
  imageUrl?: string;
  size: 'small-header' | 'large-header';
}

const PageHeader: React.FC<Props> = ({ title, tagline, address, sector, country, imageUrl, size = 'small-header' }) => {
  const [showBgImage, setShowBgImage] = useState<boolean>(false);

  const showBackgroundImage = () => {
    setShowBgImage(true);
  };

  return (
    <div className={styles.pageHeader}>
      {imageUrl && (
        <Image
          className={`${styles.backgroundImage} ${showBgImage && styles.showBackgroundImage}`}
          src={imageUrl}
          alt=""
          draggable="false"
          onLoad={showBackgroundImage}
          width={500}
          height={337}
          priority
        />
      )}

      <div className={`${styles.backgroundOverlay} ${styles[size]}`}>
        <div className="container">
          {title && <h2 className="display-1 fw-bold">{title}</h2>}
          {tagline && (
            <span
              className="tagline fs-6 lh-lg"
              dangerouslySetInnerHTML={{ __html: tagline }}></span>
          )}
          {address && (
            <p>
              <span className="fw-bold">Registered Address:</span>
              {address}
            </p>
          )}
          {sector && (
            <p>
              <span className="fw-bold">Sector:</span>
              {sector}
            </p>
          )}
          {country && (
            <p>
              <span className="fw-bold">Country:</span>
              {country}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
