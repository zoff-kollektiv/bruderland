import Link from 'gatsby-link';
import React from 'react';

import styles, { linkStyles } from './styles';

export default ({ small = false, items }) => (
  <>
    {items.map(({ node: { title, link } }) => (
      <li key={`page-${link}`}>
        <style jsx>{styles}</style>
        {linkStyles.styles}

        <Link to={link} className={linkStyles.className}>
          <em className={`title ${small && 'title--is-small'}`}>{title}</em>
        </Link>
      </li>
    ))}
  </>
);
