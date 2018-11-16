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
    episode: wordpressWpEpisodes(
      status: { eq: "publish" }
      acf: { number: { eq: $number } }
    ) {
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
          ...images
          ...imageTextCombination
          ...slogan
          ...videoVimeo
        }
      }
    }

    allEpisodes: allWordpressWpEpisodes(
      filter: { status: { eq: "publish" } }
      sort: { fields: [acf___number], order: ASC }
    ) {
      edges {
        node {
          ...navigation
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
