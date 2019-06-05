import React from 'react';

import Blockrenderer from '../block-renderer';
import Title from '../title';

export default ({ data: { slug, title, acf } }) => {
  const { content_background: contentBlocks } = acf;

  return (
    <>
      <main>
        <Title
          title={title}
          context={(slug === 'impressum' || slug === 'datenschutz') && null}
        />

        <Blockrenderer blocks={contentBlocks} />
      </main>
    </>
  );
};
