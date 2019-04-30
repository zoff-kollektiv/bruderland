import React from 'react';

import style from './style';

export default ({ title }) => (
  <div className="container">
    <style jsx>{style}</style>
    <h1>{title}</h1>
  </div>
);
