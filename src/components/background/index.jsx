import React from 'react';

import Blockrenderer from '../block-renderer';

export default ({ data: { acf } }) => {
  // eslint-disable-next-line camelcase
  const { content_background: contentBlocks } = acf;

  return (
    <>
      <main>
        <Blockrenderer blocks={contentBlocks} />
      </main>
    </>
  );
};
