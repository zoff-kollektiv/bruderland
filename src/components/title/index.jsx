import React from 'react';

import style from './style';

export default ({ title, context = 'Hintergrund' }) => (
  <div className="container">
    <style jsx>{style}</style>
    <h1>
      {context && <small>{context}</small>}
      {title}
    </h1>
  </div>
);
