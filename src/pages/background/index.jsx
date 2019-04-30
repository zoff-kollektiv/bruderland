import { Helmet } from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

import Navigation from '../../components/navigation';
import withLayout from '../../components/with-layout';

const Page = ({
  data: {
    backgrounds: { nodes: backgrounds },
    allEpisodes: { edges: allEpisodes }
  }
}) => {
  return (
    <>
      <Helmet>
        <title>Hintergründe</title>
      </Helmet>

      <Navigation items={allEpisodes} />

      <br />
      <br />
      <br />

      <ul>
        {backgrounds &&
          backgrounds.map(({ title, slug }) => (
            <li>
              <Link to={`/background/${slug}/`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default withLayout(Page);

export const query = graphql`
  query {
    backgrounds: allWordpressWpBackground {
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
