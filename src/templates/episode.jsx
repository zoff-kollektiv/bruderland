import { Helmet } from 'react-helmet';
import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import Episode from '../components/episode';
import Navigation from '../components/navigation';

export default ({ data }) => {
  const { episode, allEpisodes } = data;
  const { edges } = episode;
  const { node } = edges[0];
  const { title } = node;

  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
      </Helmet>
      <Navigation items={allEpisodes.edges} />
      <Episode data={node} />;
    </Fragment>
  );
};

export const query = graphql`
  query($number: String) {
    episode: allWordpressWpEpisodes(
      filter: { acf: { number: { eq: $number } } }
    ) {
      edges {
        node {
          title
          acf {
            ...intro
            content_episodes {
              ...quote
              ...richtext
              ...imageTextCombination
            }
          }
        }
      }
    }

    allEpisodes: allWordpressWpEpisodes(
      sort: { fields: [acf___number], order: ASC }
    ) {
      edges {
        node {
          ...navigation
        }
      }
    }
  }
`;
