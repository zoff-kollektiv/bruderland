import React from 'react';

import BlockError from '../block-error';
import BLOCKS from '../blocks';
import NotImplemented from '../not-implemented';

export default ({ vimeo, blocks, language }) => (
  <>
    {blocks.map((block, index) => {
      const { __typename, ...rest } = block;
      // eslint-disable-next-line no-underscore-dangle
      const Block = BLOCKS[__typename];
      const key = `${__typename}-${index}`;

      if (!Block) {
        return <NotImplemented key={key} layout={__typename} {...rest} />;
      }

      return (
        <BlockError key={`block-error-${key}`}>
          {__typename === 'WordPressAcf_vimeoVideo' ? (
            <Block key={key} vimeo={vimeo} language={language} {...rest} />
          ) : (
            <Block key={key} language={language} {...rest} />
          )}
        </BlockError>
      );
    })}
  </>
);
