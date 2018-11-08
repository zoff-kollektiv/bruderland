import { graphql } from 'gatsby';
import React from 'react';

import Image from './image';
import Slider from './slider';

import styles from './styles';

export default ({ imagesRepeat }) => (
  <section>
    <style jsx>{styles}</style>

    {imagesRepeat.length === 1 ? (
      <Image {...imagesRepeat[0]} />
    ) : (
      <Slider images={imagesRepeat} />
    )}
  </section>
);

export const fragment = graphql`
  fragment images on WordPressAcf_images {
    imagesRepeat {
      imagesImage {
        alt_text
        caption
        localFile {
          childImageSharp {
            fluid(maxWidth: 1200) {
              src
            }
          }
        }
      }
    }
  }
`;
