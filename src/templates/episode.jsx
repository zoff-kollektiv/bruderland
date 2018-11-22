import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import Episode from '../components/episode';
import Metadata from '../components/metadata';
import Navigation from '../components/navigation';
import withLayout from '../components/with-layout';

const getNextEpisode = (episodes, current) => {
  const number = parseInt(current.acf.number, 10);
  return episodes[number] || null;
};

const Page = ({ data }) => {
  const { episode, allEpisodes, site } = data;
  const { title } = episode;

  return (
    <Fragment>
      <Metadata title={title} site={site} />

      <Navigation items={allEpisodes.edges} />

      <Episode
        data={episode}
        next={getNextEpisode(allEpisodes.edges, episode)}
      />
    </Fragment>
  );
};

export default withLayout(Page);

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

    site: wordpressSiteMetadata {
      name
      description
      url
    }
  }
`;
