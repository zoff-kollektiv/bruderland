import { Helmet } from 'react-helmet';
import React from 'react';

export default ({ title, site: { name, description } }) => (
  <Helmet>
    <title>
      {title} | {name}
    </title>

    <meta name="description" content={description} />
  </Helmet>
);
