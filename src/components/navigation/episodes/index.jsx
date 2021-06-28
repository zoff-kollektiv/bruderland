import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React from 'react';

import styles, { linkStyles } from './styles';

export default ({ items }) => (
  <>
    {items.map(({ node: { slug, title, acf: { number, text, language } } }) => (
      <li key={`episode-${slug}`}>
        <style jsx>{styles}</style>
        {linkStyles.styles}

        <Link
          to={
            // eslint-disable-next-line no-nested-ternary
            parseInt(number, 10) === 0
              ? !language || language === 'de'
                ? ''
                : `/${language}`
              : `${
                  !language || language === 'de' ? '' : `/${language}`
                }/episodes/${slug}/`
          }
          className={linkStyles.className}
        >
          <div className="episode-title-container">
            <em className="title" dangerouslySetInnerHTML={{ __html: title }} />
            <p className="intro">{text}</p>
          </div>
        </Link>
      </li>
    ))}
  </>
);

export const fragment = graphql`
  fragment navigation on wordpress__wp_episodes {
    slug
    status
    acf {
      number
      text
      language
    }
  }
`;
