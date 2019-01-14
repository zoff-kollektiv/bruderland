import Link from 'gatsby-link';
import React from 'react';

import styles from './styles';

export default ({ items }) => (
  <>
    {items.map(({ node: { title, link } }) => (
      <li>
        <style jsx>{styles}</style>

        <Link to={link} className="item">
          <em className="title">{title}</em>
        </Link>
      </li>
    ))}
  </>
);
