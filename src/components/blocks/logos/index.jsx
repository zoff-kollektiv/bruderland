import { graphql } from 'gatsby';
import React from 'react';

import Constraint from '../../constraint';
import style from './style';

const Linked = ({ link = false, children }) => {
  if (link) {
    return <a href={link}>{children}</a>;
  }

  return children;
};

export default ({ logos = [] }) => (
  <section>
    <style jsx>{style}</style>

    <Constraint size="wide">
      <ul>
        {logos &&
          logos.map(
            ({
              link,
              logo: {
                altText,
                localFile: {
                  childImageSharp: { fluid }
                }
              }
            }) => (
              <li>
                <Linked link={link}>
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
      logo {
        link
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
