import React from 'react';

import blocks from '../blocks';
import NotImplemented from '../not-implemented';

export default ({ data }) => {
  const { title, number, quote, acf } = data;
  const { content_episodes } = acf;

  return (
    <div>
      <header>
        <h1>{number} - {title}</h1>
        <blockquote>{quote}</blockquote>
      </header>

      <main>
        {content_episodes.map((episode, index) => {
          const { __typename, ...rest } = episode;
          const Block = blocks[__typename];
          const key = `${__typename}-${index}`;

          if (!Block) {
            return <NotImplemented key={key} layout={__typename} {...rest} />
          }

          return <Block key={key} {...rest} />
        })}
      </main>
    </div>
  );
}
