import React from 'react';

import blocks from '../blocks';
import Intro from '../blocks/intro';
import NextEpisode from '../next-episode';
import NotImplemented from '../not-implemented';
import withLayout from '../with-layout';

const Episode = ({ data: { acf }, next }) => {
  // eslint-disable-next-line camelcase
  const { content_episodes: contentBlocks, ...intro } = acf;

  return (
    <div>
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

          return <Block key={key} {...rest} />;
        })}
      </main>

      {next && <NextEpisode {...next} />}
    </div>
  );
};

export default withLayout(Episode);
