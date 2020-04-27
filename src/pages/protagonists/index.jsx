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
    protagonists: { nodes: protagonists },
    allEpisodes: { edges: allEpisodes },
  },
}) => {
  return (
    <>
      <Helmet>
        <title>Protagonist*innen</title>
      </Helmet>

      <Navigation items={allEpisodes} />

      <Title title="Protagonist*innen" context={false} />

      <BackgroundOverview>
        <BackgroundList
          items={protagonists.map(({ slug, ...rest }) => ({
            ...rest,
            link: `/protagonists/${slug}/`,
          }))}
        />
      </BackgroundOverview>
    </>
  );
};

export default withLayout(Page);

export const query = graphql`
  query {
    protagonists: allWordpressWpProtagonists(sort: { fields: title }) {
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
