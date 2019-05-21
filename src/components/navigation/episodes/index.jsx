import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React from 'react';

import styles, { linkStyles } from './styles';

export default ({ items }) => (
  <>
    {items.map(
      ({
        node: {
          slug,
          title,
          acf: { number, text, published }
        }
      }) => (
        <li key={`episode-${slug}`}>
          <style jsx>{styles}</style>
          {linkStyles.styles}

          {published === true || published === null ? (
            <Link
              to={parseInt(number, 10) === 0 ? '/' : `/episodes/${slug}/`}
              className={linkStyles.className}
            >
              <div className="episode-title-container">
                <em
                  className="title"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                <p className="intro">{text}</p>
              </div>
            </Link>
          ) : (
            <span className={linkStyles.className}>
              <div className="episode-title-container">
                <em
                  className="title"
                  dangerouslySetInnerHTML={{
                    __html: `Demnächst: ${title}`
                  }}
                />
                <p className="intro">{text}</p>
              </div>
            </span>
          )}
        </li>
      )
    )}
  </>
);

export const fragment = graphql`
  fragment navigation on wordpress__wp_episodes {
    slug
    status
    acf {
      number
      text
    }
  }
`;
