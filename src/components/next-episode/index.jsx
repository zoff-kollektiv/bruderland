import Link from 'gatsby-link';
import React from 'react';

import Intro from '../blocks/intro';
import Share from './share';

import { arrowLink, arrowDownIcon } from './styles';

import ArrowDownIcon from '../../static/long-arrow-down.svg';

export default ({ currentTitle, next }) => {
  const {
    node: { acf, title, slug },
  } = next || { node: { acf: { title: false } } };

  return (
    <footer>
      {arrowLink.styles}
      {arrowDownIcon.styles}

      <Share title={currentTitle} language={acf?.language} />

      {title && (
        <>
          <Intro
            renderQuote={false}
            linkTitle
            linkTitleSlug={slug}
            title={title}
            {...acf}
          />

          <Link
            to={`${acf?.language ? `/${acf.language}` : ''}/episodes/${slug}/`}
            className={arrowLink.className}
            rel="nofollow"
            aria-label={`${
              acf?.language && acf.language === 'en'
                ? 'Next episode'
                : 'Nächste Episode'
            } ${title}`}
          >
            <ArrowDownIcon className={arrowDownIcon.className} />
          </Link>
        </>
      )}
    </footer>
  );
};
