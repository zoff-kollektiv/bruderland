import React from 'react';

import Blockrenderer from '../block-renderer';
import Intro from '../blocks/intro';
import NextEpisode from '../next-episode';

import styles from './styles';

export default ({ vimeo, title, data: { acf }, next }) => {
  // eslint-disable-next-line camelcase
  const { content_episodes: contentBlocks, ...intro } = acf;

  return (
    <>
      <style jsx>{styles}</style>

      <Intro title={title} {...intro} language={acf.language} />

      <main>
        <Blockrenderer
          blocks={contentBlocks}
          vimeo={vimeo}
          language={acf.language}
        />
      </main>

      <NextEpisode currentTitle={title} next={next} />
    </>
  );
};
