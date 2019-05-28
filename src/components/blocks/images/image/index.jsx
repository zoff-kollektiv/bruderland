import classnames from 'classnames';
import React from 'react';

import Caption from '../../../caption';
import styles from './styles';

export default ({ fullscreen = false, imagesImage }) => {
  if (!imagesImage) {
    return null;
  }

  const { alt_text: alt, caption, mimeType, localFile } = imagesImage;

  return (
    imagesImage &&
    localFile && (
      <figure className={classnames({ 'is-fullscreen': fullscreen })}>
        <style jsx>{styles}</style>
        <picture>
          <source
            type="image/webp"
            srcSet={localFile.childImageSharp.fluid.srcSetWebp}
          />

          <source
            type={mimeType}
            srcSet={localFile.childImageSharp.fluid.srcSet}
          />

          <img
            src={localFile.childImageSharp.fluid.src}
            alt={alt}
            loading="lazy"
          />
        </picture>

        {caption && <Caption caption={caption} />}
      </figure>
    )
  );
};
