import { Helmet } from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import BackgroundList from '../components/background-list';
import BackgroundOverview from '../components/background-overview';
import Navigation from '../components/navigation';
import Title from '../components/title';
import withLayout from '../components/with-layout';

const BackgroundOverviewPage = ({
  pageContext: { language },
  data: {
    backgrounds: { nodes: backgrounds },
    allEpisodes: { edges: allEpisodes },
  },
}) => {
  return (
    <>
      <Helmet>
        <title>{language === 'de' ? 'Hintergründe' : 'Background'}</title>
      </Helmet>

      <Navigation items={allEpisodes} language={language} />

      <Title
        title={language === 'de' ? 'Hintergründe' : 'Background'}
        context={false}
      />

      <BackgroundOverview>
        <BackgroundList
          items={backgrounds.map(({ slug, ...rest }) => {
            let normalizedSlug = slug;

            if (normalizedSlug.endsWith('-2')) {
              normalizedSlug = normalizedSlug.replace(/-2$/g, '');
            }

            return {
              ...rest,
              link: `${
                language === 'de' ? '' : `/${language}`
              }/background/${slug}/`,
            };
          })}
        />
      </BackgroundOverview>
    </>
  );
};

export default withLayout(BackgroundOverviewPage);

export const query = graphql`
  query($language: String) {
    backgrounds: allWordpressWpBackground(
      filter: {
        acf: { show_in_overview: { eq: true }, language: { eq: $language } }
      }
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
