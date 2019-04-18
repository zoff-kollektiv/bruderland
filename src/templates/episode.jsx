import { Helmet } from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import Episode from '../components/episode';
import Navigation from '../components/navigation';
import withLayout from '../components/with-layout';

const getNextEpisode = (episodes, current) => {
  const number = parseInt(current.acf.number, 10);
  return episodes[number + 1] || null;
};

const Page = ({ pageContext: { videos }, data }) => {
  const { episode, allEpisodes } = data;
  const {
    title,
    acf: { topic }
  } = episode;
  const episodeTitle = topic || title;
  const publishedEpisodes = allEpisodes.edges.filter(
    ({
      node: {
        status,
        acf: { number }
      }
    }) => status === 'publish' && parseInt(number, 10) >= 0
  );

  return (
    <>
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
    </>
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
        intro
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
