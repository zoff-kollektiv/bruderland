import React, { Fragment } from 'react';

import Intro from '../blocks/intro';
import Share from './share';

export default ({ node: { acf, title } }) => (
  <Fragment>
    <Share />
    <Intro renderQuote={false} title={title} {...acf} />
  </Fragment>
);
