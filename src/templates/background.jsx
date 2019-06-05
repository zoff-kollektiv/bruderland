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

      <Navigation items={allEpisodes} title={title} />

      <Background data={background} />
    </>
  );
};

export default withLayout(Page);

export const query = graphql`
  query($wordpressId: Int) {
    background: wordpressWpBackground(wordpress_id: { eq: $wordpressId }) {
      slug
      title
      acf {
        content_background {
          ...richtext
          ...logos
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
