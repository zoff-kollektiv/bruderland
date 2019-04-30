import { Helmet } from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import Navigation from '../components/navigation';
import withLayout from '../components/with-layout';

const Page = ({
  data: {
    page,
    allEpisodes: { edges: allEpisodes }
  }
}) => {
  const { title } = page;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Navigation items={allEpisodes} topic={title} />
    </>
  );
};

export default withLayout(Page);

export const query = graphql`
  query($wordpressId: Int) {
    page: wordpressPage(wordpress_id: { eq: $wordpressId }) {
      title
    }

    allEpisodes: allWordpressWpEpisodes(
      filter: { status: { eq: "publish" }, acf: { number: { ne: "-1" } } }
      sort: { fields: [acf___number], order: ASC }
    ) {
      ...navigationEpisodes
    }
  }
`;