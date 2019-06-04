import classnames from 'classnames';
import React from 'react';

import style from './style';

export default ({ caption, isPortrait = false, className = null, ...rest }) => (
  <figcaption
    className={classnames(className, { 'is-portrait': isPortrait })}
    {...rest}
  >
    <style jsx>{style}</style>
    <div dangerouslySetInnerHTML={{ __html: caption }} />
  </figcaption>
);
