import { Helmet } from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import BackgroundList from '../../components/background-list';
import BackgroundOverview from '../../components/background-overview';
import Navigation from '../../components/navigation';
import Title from '../../components/title';
import withLayout from '../../components/with-layout';

const Page = ({
  data: {
    backgrounds: { nodes: backgrounds },
    allEpisodes: { edges: allEpisodes },
  },
}) => {
  return (
    <>
      <Helmet>
        <title>Hintergründe</title>
      </Helmet>

      <Navigation items={allEpisodes} />

      <Title title="Hintergründe" context={false} />

      <BackgroundOverview>
        <BackgroundList
          items={backgrounds.map(({ slug, ...rest }) => ({
            ...rest,
            link: `/background/${slug}/`,
          }))}
        />
      </BackgroundOverview>
    </>
  );
};

export default withLayout(Page);

export const query = graphql`
  query {
    backgrounds: allWordpressWpBackground(
      filter: { acf: { show_in_overview: { eq: true } } }
      sort: { fields: title }
    ) {
      nodes {
        slug
        title
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
