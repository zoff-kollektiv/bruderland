import React from 'react';

import styles from './styles';

export default ({ title, id, aspectRatio }) => (
  <div className={`ratio-${aspectRatio}`}>
    <style jsx>{styles}</style>

    {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
    <iframe
      title={title}
      src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`}
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      height={`${aspectRatio === '16-9' ? 340 : 480}`}
      width={640}
    />
  </div>
);
