import { Helmet } from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import Episode from '../components/episode';
import Metadata from '../components/metadata';
import Navigation from '../components/navigation';
import withLayout from '../components/with-layout';

const getNextEpisode = (episodes, current) => {
  const number = parseInt(current.acf.number, 10);
  return episodes[number + 1] || null;
};

const Page = ({
  pageContext: { videos },
  data: {
    episode,
    allEpisodes: { edges: allEpisodes }
  }
}) => {
  const {
    title,
    acf: {
      topic,
      og_descriptiom: ogDescription,
      og_title: ogTitle,
      og_image: ogImage,
      twitter_image: twitterImage
    }
  } = episode;
  const episodeTitle = topic || title;

  return (
    <>
      <Helmet>
        <title>{episodeTitle}</title>
      </Helmet>

      <Metadata
        title={episodeTitle}
        ogDescription={ogDescription}
        ogTitle={ogTitle}
        ogImage={ogImage}
        twitterImage={twitterImage}
      />

      <Navigation items={allEpisodes} topic={topic} />

      <Episode
        title={episodeTitle}
        data={episode}
        next={getNextEpisode(allEpisodes, episode)}
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
        og_image {
          localFile {
            childImageSharp {
              fixed(width: 1200, height: 630) {
                src
              }
            }
          }
        }
        twitter_image: og_image {
          localFile {
            childImageSharp {
              fixed(width: 1200, height: 675) {
                src
              }
            }
          }
        }
        og_title
        og_description
        backgroundImage {
          caption
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
      filter: { acf: { number: { ne: "-1" } } }
      sort: { fields: [acf___number], order: ASC }
    ) {
      ...navigationEpisodes
    }
  }
`;
