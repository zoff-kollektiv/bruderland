import React from 'react';

import style from './style';

export default ({ caption }) => (
  <figcaption>
    <style jsx>{style}</style>
    <div dangerouslySetInnerHTML={{ __html: caption }} />
  </figcaption>
);
