import { Helmet } from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import BackgroundList from '../components/background-list';
import BackgroundOverview from '../components/background-overview';
import Navigation from '../components/navigation';
import Title from '../components/title';
import withLayout from '../components/with-layout';

const ProtagonistsOverviewPage = ({
  pageContext: { language },
  data: {
    protagonists: { nodes: protagonists },
    allEpisodes: { edges: allEpisodes },
  },
}) => {
  return (
    <>
      <Helmet>
        <title>
          {language === 'de' ? 'Protagonist*innen' : 'Protagonists'}
        </title>
      </Helmet>

      <Navigation items={allEpisodes} />

      <Title
        title={language === 'de' ? 'Protagonist*innen' : 'Protagonists'}
        context={false}
      />

      <BackgroundOverview>
        <BackgroundList
          items={protagonists.map(({ slug, ...rest }) => ({
            ...rest,
            link: `${
              language === 'de' ? '' : `/${language}`
            }/protagonists/${slug}/`,
          }))}
        />
      </BackgroundOverview>
    </>
  );
};

export default withLayout(ProtagonistsOverviewPage);

export const query = graphql`
  query($language: String) {
    protagonists: allWordpressWpProtagonists(
      filter: { acf: { language: { eq: $language } } }
      sort: { fields: title }
    ) {
      nodes {
        slug
        title
      }
    }

    allEpisodes: allWordpressWpEpisodes(
      filter: {
        status: { eq: "publish" }
        acf: { number: { ne: "-1" }, language: { eq: $language } }
      }
      sort: { fields: [acf___number], order: ASC }
    ) {
      ...navigationEpisodes
    }
  }
`;
