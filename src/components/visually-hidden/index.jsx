import React from 'react';

import styles from './styles';

export default ({ children }) => (
  <span>
    <style jsx>{styles}</style>
    {children}
  </span>
);
