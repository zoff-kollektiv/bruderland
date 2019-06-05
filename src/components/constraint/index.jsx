import classnames from 'classnames';
import React from 'react';

import styles from './styles';

export default ({ children, size = false }) => (
  <div
    className={classnames('constraint', {
      'constraint--wide': size === 'wide'
    })}
  >
    <style jsx>{styles}</style>
    {children}
  </div>
);
