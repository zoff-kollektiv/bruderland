import Helmet from 'react-helmet';
import React from 'react';

import styles from './styles';

export default WrappedComponent => props => (
  <>
    <style jsx>{styles}</style>

    <Helmet htmlAttributes={{ lang: 'de' }} titleTemplate="%s | Bruderland" />

    <WrappedComponent {...props} />

    {typeof window !== 'undefined' && (
      <>
        <div
          id="statify-js-snippet"
          data-home-url="https://develop--bruderland.netlify.com"
        />

        <script
          type="text/javascript"
          src="https://b2oulrk7.myraidbox.de/wp-content/plugins/statify/js/snippet.js"
        />
      </>
    )}
  </>
);
