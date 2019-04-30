import React from 'react';

import Blockrenderer from '../block-renderer';
import Title from '../title';

export default ({ data: { title, acf } }) => {
  const { content_background: contentBlocks } = acf;

  return (
    <>
      <main>
        <Title title={title} />

        <Blockrenderer blocks={contentBlocks} />
      </main>
    </>
  );
};
