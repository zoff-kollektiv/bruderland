import React from 'react';

import style, { iconStyle } from './style';

import FacebookIcon from '../../../static/facebook-f.svg';
import TwitterIcon from '../../../static/twitter.svg';

const Icon = ({ type }) => {
  // eslint-disable-next-line default-case
  switch (type) {
    case 'Twitter':
      return <TwitterIcon className={iconStyle.className} />;

    case 'Facebook':
      return <FacebookIcon className={iconStyle.className} />;
  }

  return null;
};

export default ({ items, title }) => (
  <li className="list-item">
    <style jsx>{style}</style>
    {iconStyle.styles}

    <strong>{title}</strong>

    <ul>
      {items.map(({ node: { link, title: itemTitle } }) => (
        <li key={`follow-${itemTitle}`}>
          <a href={link} aria-label={itemTitle}>
            <Icon type={itemTitle} />
          </a>
        </li>
      ))}
    </ul>
  </li>
);
