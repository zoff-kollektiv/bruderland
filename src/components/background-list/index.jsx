import Link from 'gatsby-link';
import React from 'react';

import style, { linkStyles } from './style';

export default ({ items = [] }) => (
  <ul>
    <style jsx>{style}</style>
    {linkStyles.styles}

    {items.map(({ title, link }) => (
      <li>
        <Link to={link} className={linkStyles.className}>
          {title}
        </Link>
      </li>
    ))}
  </ul>
);
