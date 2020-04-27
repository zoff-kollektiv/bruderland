import classnames from 'classnames';
import Modal from 'react-modal';
import React, { useState } from 'react';

import Caption from '../../../caption';
import CompressIcon from '../../../../static/compress.svg';
import ExpandIcon from '../../../../static/expand.svg';
import styles, {
  expandIcon,
  imageStyle,
  imageFullScreenStyle,
  imageExpanendStyle,
} from './styles';

const Picture = ({ file, alt, mimeType, ...rest }) => (
  <picture>
    <source type="image/webp" srcSet={file.childImageSharp.fluid.srcSetWebp} />
    <source type={mimeType} srcSet={file.childImageSharp.fluid.srcSet} />

    <img
      src={file.childImageSharp.fluid.src}
      alt={alt}
      loading="lazy"
      {...rest}
    />
  </picture>
);

export default ({
  fullscreen = false,
  allow_expansion: allowExpansion = false,
  imagesImage,
}) => {
  if (!imagesImage) {
    return null;
  }

  const {
    alt_text: alt,
    caption,
    mimeType,
    mediaDetails: { imageWidth, imageHeight },
    localFile,
  } = imagesImage;
  const isPortrait = imageWidth < imageHeight;
  const [modalOpen, setModalState] = useState(false);

  return (
    imagesImage &&
    localFile && (
      <figure className={classnames({ 'is-fullscreen': fullscreen })}>
        <style jsx>{styles}</style>
        {expandIcon.styles}
        {imageStyle.styles}
        {fullscreen && imageFullScreenStyle.styles}

        <Picture
          mimeType={mimeType}
          alt={alt}
          file={localFile}
          className={classnames(imageStyle.className, {
            [imageFullScreenStyle.className]: fullscreen,
          })}
        />

        {caption && <Caption caption={caption} isPortrait={isPortrait} />}

        {allowExpansion && (
          <>
            <button
              className="fullscreen-toggle"
              type="button"
              onClick={(event) => {
                event.preventDefault();
                setModalState(true);
              }}
              aria-label="Bild vergrößern"
            >
              <ExpandIcon className={expandIcon.className} />
            </button>

            {modalOpen && (
              <Modal
                isOpen
                className="image-modal"
                overlayClassName="image-modal-overlay"
              >
                {imageExpanendStyle.styles}

                <button
                  className="fullscreen-toggle"
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    setModalState(false);
                  }}
                  aria-label="Bild verkleinern"
                >
                  <CompressIcon className={expandIcon.className} />
                </button>

                <Picture
                  mimeType={mimeType}
                  alt={alt}
                  file={localFile}
                  className={classnames(
                    imageStyle.className,
                    imageExpanendStyle.className
                  )}
                />
              </Modal>
            )}
          </>
        )}
      </figure>
    )
  );
};
