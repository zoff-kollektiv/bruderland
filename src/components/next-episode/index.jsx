import Link from 'gatsby-link';
import React from 'react';

import Intro from '../blocks/intro';
import Share from './share';

import { arrowLink, arrowDownIcon } from './styles';

import ArrowDownIcon from '../../static/long-arrow-down.svg';

export default ({ node: { acf, title, slug } }) => (
  <footer>
    {arrowLink.styles}
    {arrowDownIcon.styles}

    <Share />

    <Intro
      renderQuote={false}
      linkTitle
      linkTitleSlug={slug}
      title={title}
      {...acf}
    />

    <Link
      to={`/episodes/${slug}/`}
      className={arrowLink.className}
      rel="nofollow"
    >
      <ArrowDownIcon className={arrowDownIcon.className} />
    </Link>
  </footer>
);
