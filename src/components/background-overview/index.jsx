import React from 'react';

import style from './style';

export default ({ children }) => (
  <main>
    <style jsx>{style}</style>
    {children}
  </main>
);
