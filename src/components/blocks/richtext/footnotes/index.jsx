import React from 'react';

import styles from './styles';

export default ({ id, entries }) => (
  <ul>
    <style jsx>{styles}</style>

    {entries.map(({ number, text }) => (
      <li
        key={`footnote-${text}`}
        id={`footnote-${id}-${number}`}
        className="footnote"
      >
        ({number}) <span dangerouslySetInnerHTML={{ __html: text }} />
      </li>
    ))}
  </ul>
);
