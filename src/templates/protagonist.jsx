import { Helmet } from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import Navigation from '../components/navigation';
import Protagonist from '../components/protagonist';
import withLayout from '../components/with-layout';

const Page = ({
  data: {
    protagonist,
    allEpisodes: { edges: allEpisodes },
  },
}) => {
  const { title } = protagonist;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Navigation
        items={allEpisodes}
        title={title}
        langugage={protagonist.langugage}
      />

      <Protagonist data={protagonist} />
    </>
  );
};

export default withLayout(Page);

export const query = graphql`
  query($wordpressId: Int, $language: String) {
    protagonist: wordpressWpProtagonists(wordpress_id: { eq: $wordpressId }) {
      title
      acf {
        language
        content_protagonists {
          ...richtext
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
