import classnames from 'classnames';
import React from 'react';

import styles from './styles';

export default ({ fullscreen = false, imagesImage }) => {
  const { alt_text: alt, caption, localFile } = imagesImage;

  return (
    imagesImage &&
    localFile && (
      <figure className={classnames({ 'is-fullscreen': fullscreen })}>
        <style jsx>{styles}</style>
        <img src={localFile.childImageSharp.fluid.src} alt={alt} />
        {caption && (
          <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
        )}
      </figure>
    )
  );
};
