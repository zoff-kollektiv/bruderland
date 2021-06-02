import { Helmet } from 'react-helmet';
import React from 'react';

import styles from './styles';

export default (WrappedComponent) => (props) => {
  const {
    pageContext: { language },
  } = props;
  const postfix =
    language && language === 'en'
      ? 'Minds of their own'
      : 'Eigensinn im Bruderland';

  return (
    <>
      <style jsx>{styles}</style>

      <Helmet
        htmlAttributes={{ lang: language || 'de' }}
        titleTemplate={`%s | ${postfix}`}
      />

      <WrappedComponent {...props} />
    </>
  );
};
