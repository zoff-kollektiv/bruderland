import { Helmet } from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

import Navigation from '../../components/navigation';
import withLayout from '../../components/with-layout';

const Page = ({
  data: {
    countries: { nodes: countries },
    allEpisodes: { edges: allEpisodes }
  }
}) => {
  return (
    <>
      <Helmet>
        <title>Länder</title>
      </Helmet>

      <Navigation items={allEpisodes} />

      <br />
      <br />
      <br />

      <ul>
        {countries &&
          countries.map(({ title, slug }) => (
            <li>
              <Link to={`/countries/${slug}/`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default withLayout(Page);

export const query = graphql`
  query {
    countries: allWordpressWpCountries {
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
