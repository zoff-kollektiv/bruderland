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
          to={parseInt(number, 10) === 1 ? '/' : `/episodes/${slug}/`}
          className="item"
        >
          <div className="episode">
            Episode {number}
            <span className="visually-hidden">:</span>
          </div>

          <em className="topic">{topic}</em>

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
