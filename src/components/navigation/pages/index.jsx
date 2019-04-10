import Link from 'gatsby-link';
import React from 'react';

import styles, { linkStyles } from './styles';

export default ({ items }) => (
  <>
    {items.map(({ node: { title, link } }) => (
      <li>
        <style jsx>{styles}</style>
        {linkStyles.styles}

        <Link to={link} className={linkStyles.className}>
          <em className="title">{title}</em>
        </Link>
      </li>
    ))}
  </>
);
