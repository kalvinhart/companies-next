import Image from 'next/image';
import { useState } from 'react';

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
    <div className="page-header">
      {imageUrl && (
        <Image
          className={`backgroundImage ${showBgImage && 'showBackgroundImage'}`}
          src={imageUrl}
          alt=""
          draggable="false"
          onLoad={showBackgroundImage}
        />
      )}

      <div className={`background-overlay ${size}`}>
        <div className="container">
          {title && <h2 className="display-1 fw-bold">{title}</h2>}
          {tagline && <p className="tagline fs-6 lh-lg">{tagline}</p>}
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
