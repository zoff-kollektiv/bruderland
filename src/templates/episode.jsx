import {Helmet} from 'react-helmet';
import React, { Fragment } from 'react';
import { graphql } from 'gatsby';

import Episode from '../components/episode';

export default ({ data }) => {
  const { allWordpressWpEpisodes } = data;
  const { edges } = allWordpressWpEpisodes;
  const { node } = edges[0];
  const { title } = node;

  return <Fragment>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>

    <Episode data={node} />;
  </Fragment>
};

export const query = graphql`
  query($number: String) {
    allWordpressWpEpisodes(filter: { acf: { number: { eq: $number } } }) {
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
  }
`;
