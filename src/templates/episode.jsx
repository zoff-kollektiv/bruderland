import { Helmet } from 'react-helmet';
import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import Episode from '../components/episode';
import Navigation from '../components/navigation';
import withLayout from '../components/with-layout';

const getNextEpisode = (episodes, current) => {
  const number = parseInt(current.acf.number, 10);
  return episodes[number + 1] || null;
};

const getEpisodeTitle = ({ title, acf }) => {
  const { number, topic } = acf;

  if (number && topic) {
    return `Episode ${number} – ${topic}`;
  }

  return title;
};

const Page = ({ pageContext: { videos }, data }) => {
  const { episode, allEpisodes } = data;
  const {
    acf: { topic }
  } = episode;
  const episodeTitle = getEpisodeTitle(episode);
  const publishedEpisodes = allEpisodes.edges.filter(
    ({
      node: {
        status,
        acf: { number }
      }
    }) => status === 'publish' && parseInt(number, 10) >= 0
  );

  return (
    <Fragment>
      <Helmet>
        <title>{episodeTitle}</title>
      </Helmet>
      <Navigation items={publishedEpisodes} topic={topic} />

      <Episode
        title={episodeTitle}
        data={episode}
        next={getNextEpisode(publishedEpisodes, episode)}
        vimeo={videos}
      />
    </Fragment>
  );
};

export default withLayout(Page);

export const query = graphql`
  query($number: String) {
    episode: wordpressWpEpisodes(acf: { number: { eq: $number } }) {
      title
      acf {
        quote
        number
        text
        topic
        backgroundImage {
          localFile {
            childImageSharp {
              fluid(maxHeight: 1200, maxWidth: 2000) {
                src
                srcSet
              }
            }
          }
        }
        content_episodes {
          ...annotations
          ...quote
          ...richtext
          ...illustration
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
          status
          title
          acf {
            quote
            number
            text
            topic
          }
        }
      }
    }
  }
`;
