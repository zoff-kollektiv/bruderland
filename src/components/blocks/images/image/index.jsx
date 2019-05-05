import classnames from 'classnames';
import React from 'react';

import Caption from '../../../caption';
import styles from './styles';

export default ({ fullscreen = false, imagesImage }) => {
  if (!imagesImage) {
    return null;
  }

  const { alt_text: alt, caption, localFile } = imagesImage;

  return (
    imagesImage &&
    localFile && (
      <figure className={classnames({ 'is-fullscreen': fullscreen })}>
        <style jsx>{styles}</style>
        <img
          src={localFile.childImageSharp.fluid.src}
          srcSet={localFile.childImageSharp.fluid.srcSet}
          alt={alt}
          loading="lazy"
        />
        {caption && <Caption caption={caption} />}
      </figure>
    )
  );
};
