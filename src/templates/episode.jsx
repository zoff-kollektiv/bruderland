import { Helmet } from 'react-helmet';
import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import Episode from '../components/episode';
import Navigation from '../components/navigation';

const getNextEpisode = (episodes, current) => {
  const number = parseInt(current.acf.number, 10);
  return episodes[number] || null;
};

export default ({ data }) => {
  const { episode, allEpisodes } = data;
  const { title } = episode;

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Navigation items={allEpisodes.edges} />
      <Episode
        data={episode}
        next={getNextEpisode(allEpisodes.edges, episode)}
      />
    </Fragment>
  );
};

export const query = graphql`
  query($number: String) {
    episode: wordpressWpEpisodes(acf: { number: { eq: $number } }) {
      title
      acf {
        ...intro
        content_episodes {
          ...annotations
          ...quote
          ...richtext
          ...images
          ...imageTextCombination
          ...slogan
          ...videoVimeo
        }
      }
    }

    allEpisodes: allWordpressWpEpisodes(
      sort: { fields: [acf___number], order: ASC }
    ) {
      edges {
        node {
          ...navigation
          title
          acf {
            ...intro
          }
        }
      }
    }
  }
`;
