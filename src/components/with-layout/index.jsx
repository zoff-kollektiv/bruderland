import Helmet from 'react-helmet';
import React, { Fragment } from 'react';

import styles from './styles';

export default WrappedComponent => props => (
  <Fragment>
    <style jsx>{styles}</style>

    <Helmet htmlAttributes={{ lang: 'de' }} titleTemplate="%s | Bruderland" />

    <WrappedComponent {...props} />
  </Fragment>
);
