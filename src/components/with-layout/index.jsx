import Helmet from 'react-helmet';
import React from 'react';

import styles from './styles';

export default WrappedComponent => props => (
  <>
    <style jsx>{styles}</style>

    <Helmet htmlAttributes={{ lang: 'de' }} titleTemplate="%s | Bruderland" />

    <WrappedComponent {...props} />
  </>
);
