import React from 'react';

import styles from './styles';

export default ({ imagesImage }) => {
  const { alt_text: alt, caption, localFile } = imagesImage;

  return (
    imagesImage &&
    localFile && (
      <figure>
        <style jsx>{styles}</style>
        <img src={localFile.childImageSharp.fluid.src} alt={alt} />
        {caption && (
          <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
        )}
      </figure>
    )
  );
};
