import classnames from 'classnames';
import Modal from 'react-modal';
import React, { useState } from 'react';

import Caption from '../../../caption';
import CompressIcon from '../../../../static/compress.svg';
import Constraint from '../../../constraint';
import ExpandIcon from '../../../../static/expand.svg';
import styles, {
  expandIcon,
  imageStyle,
  imageFullScreenStyle,
  imageExpanendStyle,
  transcription as transcriptionStyle,
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
  transcription,
  language,
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
    acf,
  } = imagesImage;
  const isPortrait = imageWidth < imageHeight;
  const [modalOpen, setModalState] = useState(false);

  return (
    imagesImage &&
    localFile && (
      <>
        <figure
          className={classnames({ 'is-fullscreen': fullscreen })}
          // eslint-disable-next-line jsx-a11y/aria-props
          aria-description={transcription?.replace(/<[^>]*>?/gm, '')}
        >
          <style jsx>{styles}</style>
          {expandIcon.styles}
          {imageStyle.styles}
          {fullscreen && imageFullScreenStyle.styles}
          {transcriptionStyle.styles}

          <Picture
            mimeType={mimeType}
            alt={alt}
            file={localFile}
            className={classnames(imageStyle.className, {
              [imageFullScreenStyle.className]: fullscreen,
            })}
          />

          {caption && (
            <Caption
              caption={
                !language || language === 'de'
                  ? caption
                  : acf?.[`caption_${language}`]
              }
              isPortrait={isPortrait}
              transcription={transcription}
            />
          )}

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

        {transcription && (
          <div className={transcriptionStyle.className}>
            <Constraint>
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                <p>${language === 'en' && 'The document states'}</p>
                ${transcription}
              `,
                }}
              />
            </Constraint>
          </div>
        )}
      </>
    )
  );
};
