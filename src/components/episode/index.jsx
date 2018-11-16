import React, { Fragment } from 'react';

import BlockError from '../block-error';
import blocks from '../blocks';
import Intro from '../blocks/intro';
import NextEpisode from '../next-episode';
import NotImplemented from '../not-implemented';

import styles from './styles';

export default ({ data: { acf }, next }) => {
  // eslint-disable-next-line camelcase
  const { content_episodes: contentBlocks, ...intro } = acf;

  return (
    <Fragment>
      <style jsx>{styles}</style>

      <Intro {...intro} />

      <main>
        {contentBlocks.map((block, index) => {
          const { __typename, ...rest } = block;
          // eslint-disable-next-line no-underscore-dangle
          const Block = blocks[__typename];
          const key = `${__typename}-${index}`;

          if (!Block) {
            return <NotImplemented key={key} layout={__typename} {...rest} />;
          }

          return (
            <BlockError>
              <Block key={key} {...rest} />
            </BlockError>
          );
        })}
      </main>

      {next && <NextEpisode {...next} />}
    </Fragment>
  );
};
