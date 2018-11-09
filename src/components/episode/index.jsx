import React from 'react';

import blocks from '../blocks';
import Intro from '../blocks/intro';
import NextEpisode from '../next-episode';
import NotImplemented from '../not-implemented';
import withLayout from '../with-layout';

const Episode = ({ data, next }) => {
  const { acf, title } = data;
  // eslint-disable-next-line camelcase
  const { content_episodes, ...intro } = acf;

  return (
    <div>
      <Intro title={title} {...intro} />

      <main>
        {content_episodes.map((episode, index) => {
          const { __typename, ...rest } = episode;
          // eslint-disable-next-line no-underscore-dangle
          const Block = blocks[__typename];
          const key = `${__typename}-${index}`;

          if (!Block) {
            return <NotImplemented key={key} layout={__typename} {...rest} />;
          }

          return <Block key={key} {...rest} />;
        })}
      </main>

      <NextEpisode {...next} />
    </div>
  );
};

export default withLayout(Episode);
