import { graphql } from 'gatsby';
import React from 'react';

import Image from './image';
import Slider from './slider';

import styles from './styles';

export default ({ imagesRepeat, language }) => (
  <section>
    <style jsx>{styles}</style>

    {imagesRepeat && (
      <>
        {imagesRepeat.length === 1 ? (
          <Image {...imagesRepeat[0]} language={language} />
        ) : (
          <Slider images={imagesRepeat} language={language} />
        )}
      </>
    )}
  </section>
);

export const fragment = graphql`
  fragment images on WordPressAcf_images {
    imagesRepeat {
      fullscreen
      allow_expansion
      transcription
      imagesImage {
        id
        alt_text
        caption
        mimeType: mime_type
        mediaDetails: media_details {
          imageHeight: height
          imageWidth: width
        }
        acf {
          caption_en
        }
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
