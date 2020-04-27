import { graphql } from 'gatsby';
import React from 'react';

import Constraint from '../../constraint';
import style, { logoLink } from './style';

const Linked = ({ link = false, children }) => {
  if (link) {
    return <a href={link}>{children}</a>;
  }

  return children;
};

export default ({ logos = [] }) => (
  <section>
    <style jsx>{style}</style>
    {logoLink.styles}

    <Constraint size="wide">
      <ul>
        {logos &&
          logos.map(
            ({
              link,
              logo: {
                altText,
                localFile: {
                  childImageSharp: { fluid },
                },
              },
            }) => (
              <li key={`logo-${link}`}>
                <Linked link={link} className={logoLink.className}>
                  <img {...fluid} alt={altText} />
                </Linked>
              </li>
            )
          )}
      </ul>
    </Constraint>
  </section>
);

export const fragment = graphql`
  fragment logos on WordPressAcf_logos {
    logos {
      link
      logo {
        altText: alt_text
        localFile {
          childImageSharp {
            fluid(maxWidth: 400) {
              src
              srcSet
            }
          }
        }
      }
    }
  }
`;
