import React from 'react';

import blocks from '../../components/blocks';
import NotImplemented from '../../components/not-implemented';

export default ({ pathContext }) => {
  const { episode } = pathContext;
  const { acf } = episode;
  const { number, quote, topic } = acf;
  const { content } = acf;

  return <div>
    <header>
      <h1>{number} - {topic}</h1>
      <blockquote>{quote}</blockquote>
    </header>

    <main>
      {content.map(({ acf_fc_layout, ...rest }, index) => {
        const Block = blocks[acf_fc_layout];
        const key = `${acf_fc_layout}-${index}`;

        if (!Block) {
          return <NotImplemented key={key} layout={acf_fc_layout} {...rest} />
        }

        return <Block key={key} {...rest} />
      })}
    </main>
  </div>;
};
