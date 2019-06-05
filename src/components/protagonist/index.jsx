import React from 'react';

import Blockrenderer from '../block-renderer';
import Title from '../title';

export default ({ data: { title, acf } }) => {
  // eslint-disable-next-line camelcase
  const { content_protagonists: contentBlocks } = acf;

  return (
    <>
      <main>
        <Title title={title} context="Protagonist*in" />
        <Blockrenderer blocks={contentBlocks} />
      </main>
    </>
  );
};
