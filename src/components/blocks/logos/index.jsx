import { graphql } from 'gatsby';
import React from 'react';

import Constraint from '../../constraint';
import style from './style';

export default ({ logos = [] }) => (
  <section>
    <style jsx>{style}</style>

    <Constraint>
      <ul>
        {logos &&
          logos.map(
            ({
              logo: {
                altText,
                localFile: {
                  childImageSharp: { fluid }
                }
              }
            }) => (
              <li>
                <img {...fluid} alt={altText} />
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
