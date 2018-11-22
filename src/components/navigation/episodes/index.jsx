import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React from 'react';

import styles from './styles';

export default ({ items }) => (
  <ul className="navigation">
    <style jsx>{styles}</style>

    {items.map(({ node: { slug, acf: { number, topic, text } } }) => (
      <li>
        <Link
          to={parseInt(number, 10) === 0 ? '/' : `/episodes/${slug}/`}
          className="item"
        >
          {number && parseInt(number, 10) !== 0 && (
            <div className="episode">Episode {number}</div>
          )}

          {topic && <em className="topic">{topic}</em>}

          <p className="intro">{text}</p>
        </Link>
      </li>
    ))}
  </ul>
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
