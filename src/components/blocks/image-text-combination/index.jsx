import { graphql } from 'gatsby';
import React from 'react';

import Caption from '../../caption';
import styles from './styles';

export default ({ title, text, image, language }) => {
  const fluidImage =
    image && image.localFile && image.localFile.childImageSharp.fluid;

  if (!fluidImage) {
    return null;
  }

  const { src, srcSet, srcSetWebp } = fluidImage;
  const { caption, alt_text: alt, mimeType, acf } = image;

  return (
    <section>
      <style jsx>{styles}</style>

      <div className="image-container">
        <figure>
          <picture>
            <source type="image/webp" srcSet={srcSetWebp} />
            <source type={mimeType} srcSet={srcSet} />
            <img src={src} alt={alt} loading="lazy" />
          </picture>

          {caption && (
            <Caption
              caption={
                !language || language === 'de'
                  ? caption
                  : acf?.[`caption_${language}`]
              }
            />
          )}
        </figure>
      </div>

      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="text">{text}</p>
      </div>
    </section>
  );
};

export const fragment = graphql`
  fragment imageTextCombination on WordPressAcf_imageTextCombination {
    __typename
    title
    text
    image {
      acf {
        caption_en
      }
      caption
      alt_text
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
`;
