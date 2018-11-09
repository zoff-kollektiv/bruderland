import React, { Fragment } from 'react';

import Intro from '../blocks/intro';
import Share from './share';

export default ({ node: { acf, title, slug } }) => (
  <Fragment>
    <Share />
    <Intro
      renderQuote={false}
      linkTitle
      linkTitleSlug={slug}
      title={title}
      {...acf}
    />
  </Fragment>
);
