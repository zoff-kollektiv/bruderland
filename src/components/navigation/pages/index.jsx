import Link from 'gatsby-link';
import React from 'react';

import styles, { linkStyles } from './styles';

export default ({ small = false, items }) => (
  <li className={`list-item ${small && 'list-item--is-small'}`}>
    <style jsx>{styles}</style>

    <ul>
      {items.map(({ node: { title, link } }) => (
        <li key={`page-${link}`}>
          {linkStyles.styles}

          <Link to={link} className={linkStyles.className}>
            <em className={`title ${small && 'title--is-small'}`}>{title}</em>
          </Link>
        </li>
      ))}
    </ul>
  </li>
);
