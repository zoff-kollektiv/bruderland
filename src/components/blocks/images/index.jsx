import { graphql } from 'gatsby';
import React from 'react';

import Image from './image';
import Slider from './slider';

import styles from './styles';

export default ({ imagesRepeat }) => (
  <section>
    <style jsx>{styles}</style>

    {imagesRepeat && (
      <>
        {imagesRepeat.length === 1 ? (
          <Image {...imagesRepeat[0]} />
        ) : (
          <Slider images={imagesRepeat} />
        )}
      </>
    )}
  </section>
);

export const fragment = graphql`
  fragment images on WordPressAcf_images {
    imagesRepeat {
      fullscreen
      imagesImage {
        id
        alt_text
        caption
        mimeType: mime_type
        localFile {
          childImageSharp {
            fluid(maxWidth: 1200, quality: 80) {
              src
              srcSet
              srcSetWebp
            }
          }
        }
      }
    }
  }
`;
