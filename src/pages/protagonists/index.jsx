import { Helmet } from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';

import Navigation from '../../components/navigation';
import withLayout from '../../components/with-layout';

const Page = ({
  data: {
    protagonists: { nodes: protagonists },
    allEpisodes: { edges: allEpisodes }
  }
}) => {
  return (
    <>
      <Helmet>
        <title>Protagonist*innen</title>
      </Helmet>

      <Navigation items={allEpisodes} />

      <br />
      <br />
      <br />

      <ul>
        {protagonists &&
          protagonists.map(({ title, slug }) => (
            <li>
              <Link to={`/protagonists/${slug}/`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default withLayout(Page);

export const query = graphql`
  query {
    protagonists: allWordpressWpProtagonists {
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
