import React, { Fragment } from 'react';

import styles from './styles';

export default WrappedComponent => props => (
  <Fragment>
    <style jsx>{styles}</style>

    <WrappedComponent {...props} />
  </Fragment>
);
