import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import React from 'react';
import ReactModal from 'react-modal';

import styles from './styles';

export default ({ items }) => (
  <div>
    <style jsx>{styles}</style>

    <ReactModal isOpen>
      <ul className="items">
        {items.map(({ node: { slug, acf: { number, topic, text } } }) => (
          <li className="item">
            <Link to={parseInt(number, 10) === 1 ? '/' : `/episodes/${slug}/`}>
              Episode {number}:{topic}
            </Link>
            <p>{text}</p>
          </li>
        ))}
      </ul>
    </ReactModal>
  </div>
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
