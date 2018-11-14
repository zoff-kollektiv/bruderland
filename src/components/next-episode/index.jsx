import React from 'react';

import Intro from '../blocks/intro';
import Share from './share';

import styles, { arrowDownIcon } from './styles';

import ArrowDownIcon from '../../static/long-arrow-down.svg';

export default ({ node: { acf, title, slug } }) => (
  <footer>
    <style jsx>{styles}</style>
    {arrowDownIcon.styles}

    <Share />

    <Intro
      renderQuote={false}
      linkTitle
      linkTitleSlug={slug}
      title={title}
      {...acf}
    />

    <div className="next-icon">
      <ArrowDownIcon className={arrowDownIcon.className} />
    </div>
  </footer>
);
