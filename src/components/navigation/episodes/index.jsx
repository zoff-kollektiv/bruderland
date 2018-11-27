import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React from 'react';

import styles from './styles';

export default ({ items }) => (
  <ul className="navigation">
    <style jsx>{styles}</style>

    {items.map(({ node: { slug, title, acf: { number, topic, text } } }) => (
      <li>
        <Link
          to={parseInt(number, 10) === 0 ? '/' : `/episodes/${slug}/`}
          className="item"
        >
          <div className="episode">
            {topic && number ? <>Episode {number}</> : <>{title}</>}
          </div>

          <em className="topic">{topic || title}</em>

          {parseInt(number, 10) !== 0 && <p className="intro">{text}</p>}
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
