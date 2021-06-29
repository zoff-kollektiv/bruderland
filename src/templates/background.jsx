import { Helmet } from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import Navigation from '../components/navigation';
import Background from '../components/background';
import withLayout from '../components/with-layout';

const Page = ({
  pageContext: { language },
  data: {
    background,
    allEpisodes: { edges: allEpisodes },
  },
}) => {
  const { title } = background;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Navigation items={allEpisodes} title={title} language={language} />

      <Background data={background} />
    </>
  );
};

export default withLayout(Page);

export const query = graphql`
  query($wordpressId: Int, $language: String) {
    background: wordpressWpBackground(wordpress_id: { eq: $wordpressId }) {
      slug
      title
      acf {
        content_background {
          ...richtext
          ...logos
          ...images
        }
      }
    }

    allEpisodes: allWordpressWpEpisodes(
      filter: { acf: { number: { ne: "-1" }, language: { eq: $language } } }
      sort: { fields: [acf___number], order: ASC }
    ) {
      ...navigationEpisodes
    }
  }
`;
