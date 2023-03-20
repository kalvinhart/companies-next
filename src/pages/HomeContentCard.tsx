import Image from 'next/image';
import Link from 'next/link';

interface Props {
  title?: string;
  paragraph?: string;
  imagePath?: string;
  imagePosition: 'left' | 'right';
  buttonText?: string;
  buttonLink?: string;
}

const HomeContentCard: React.FC<Props> = ({
  title,
  paragraph,
  imagePath,
  imagePosition = 'left',
  buttonText,
  buttonLink,
}) => {
  const imageUrl = `${process.env.CMS_ROOT}/${imagePath}`;

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row">
          {imagePosition === 'left' && (
            <div className="col-12 col-md-5">
              <div className="content-image-parent">
                <div className="content-image-frame mb-5 mb-md-0 pe-md-4">
                  {imagePath && (
                    <Image
                      src={imageUrl}
                      className="content-image rounded shadow"
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>
          )}

          <div className="col-12 col-md-7">
            {title && <h3 className="display-3 mb-4">{title}</h3>}
            {paragraph && (
              <p
                className="mb-5 mb-md-0"
                dangerouslySetInnerHTML={{ __html: paragraph }}></p>
            )}
            {buttonText && buttonLink && (
              <Link
                href={buttonLink}
                className="btn btn-green">
                {buttonText}
              </Link>
            )}
          </div>

          {imagePosition === 'right' && (
            <div className="col-12 col-md-5">
              <div className="content-image-parent">
                <div className="content-image-frame ps-md-4">
                  {imagePath && (
                    <Image
                      src={imageUrl}
                      className="content-image rounded shadow"
                      alt=""
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HomeContentCard;
