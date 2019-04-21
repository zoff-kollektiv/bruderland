import { Helmet } from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import Navigation from '../components/navigation';
import Protagonist from '../components/protagonist';
import withLayout from '../components/with-layout';

const Page = ({
  data: {
    protagonist,
    allEpisodes: { edges: allEpisodes }
  }
}) => {
  const { title } = protagonist;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Navigation items={allEpisodes} topic={title} />

      <Protagonist data={protagonist} />
    </>
  );
};

export default withLayout(Page);

export const query = graphql`
  query($slug: String) {
    protagonist: wordpressWpProtagonists(slug: { eq: $slug }) {
      title
      acf {
        content_protagonists {
          ...imageTextCombination
        }
      }
    }

    allEpisodes: allWordpressWpEpisodes(
      filter: { status: { eq: "publish" }, acf: { number: { ne: "-1" } } }
      sort: { fields: [acf___number], order: ASC }
    ) {
      ...navigationEpisodes
    }
  }
`;
