import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React from 'react';

import styles, { linkStyles } from './styles';

export default ({ items }) => (
  <>
    {items.map(({ node: { slug, title, acf: { number, topic, text } } }) => (
      <li>
        <style jsx>{styles}</style>
        {linkStyles.styles}

        <Link
          to={parseInt(number, 10) === 0 ? '/' : `/episodes/${slug}/`}
          className={linkStyles.className}
        >
          <div className="episode-title-container">
            <em className="topic">{topic || title}</em>
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
    acf {
      number
      topic
      text
    }
  }
`;
