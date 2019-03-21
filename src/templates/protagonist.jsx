import { Helmet } from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import Navigation from '../components/navigation';
import Protagonist from '../components/protagonist';
import withLayout from '../components/with-layout';

const Page = ({ data: { protagonist } }) => {
  const { title } = protagonist;

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>

      <Navigation items={[]} topic={title} />

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
  }
`;
