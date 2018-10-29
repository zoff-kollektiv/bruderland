import React from 'react';

import blocks from '../blocks';
import Intro from '../blocks/intro';
import NotImplemented from '../not-implemented';
import withLayout from '../with-layout';

const Episode = ({ data }) => {
  const { acf } = data;
  // eslint-disable-next-line camelcase
  const { content_episodes, quote } = acf;

  return (
    <div>
      <Intro quote={quote} />

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
    </div>
  );
};

export default withLayout(Episode);
