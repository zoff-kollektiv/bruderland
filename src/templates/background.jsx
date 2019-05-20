import { Helmet } from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import Navigation from '../components/navigation';
import Background from '../components/background';
import withLayout from '../components/with-layout';

const Page = ({
  data: {
    background,
    allEpisodes: { edges: allEpisodes }
  }
}) => {
  const { title } = background;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Navigation items={allEpisodes} topic={title} />

      <Background data={background} />
    </>
  );
};

export default withLayout(Page);

export const query = graphql`
  query($wordpressId: Int) {
    background: wordpressWpBackground(wordpress_id: { eq: $wordpressId }) {
      title
      acf {
        content_background {
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
