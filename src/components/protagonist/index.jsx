import React from 'react';

import Blockrenderer from '../block-renderer';
import Title from '../title';

export default ({ data: { title, acf } }) => {
  // eslint-disable-next-line camelcase
  const { content_protagonists: contentBlocks, language } = acf;

  return (
    <>
      <main>
        <Title
          title={title}
          context={
            !language || language === 'de' ? 'Protagonist*in' : 'Protagonist'
          }
        />
        <Blockrenderer blocks={contentBlocks} />
      </main>
    </>
  );
};
