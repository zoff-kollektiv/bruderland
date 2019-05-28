import { graphql } from 'gatsby';
import React from 'react';

import Caption from '../../caption';
import styles from './styles';

export default ({ title, text, image }) => {
  const fluidImage =
    image && image.localFile && image.localFile.childImageSharp.fluid;

  if (!fluidImage) {
    return null;
  }

  const { src, srcSet, srcSetWebp } = fluidImage;
  const { caption, alt_text: alt, mimeType } = image;

  return (
    <figure>
      <style jsx>{styles}</style>

      <div className="image-container">
        <picture>
          <source type="image/webp" srcSet={srcSetWebp} />
          <source type={mimeType} srcSet={srcSet} />
          <img src={src} alt={alt} loading="lazy" />
        </picture>

        {caption && <Caption caption={caption} />}
      </div>

      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="text">{text}</p>
      </div>
    </figure>
  );
};

export const fragment = graphql`
  fragment imageTextCombination on WordPressAcf_imageTextCombination {
    __typename
    title
    text
    image {
      caption
      alt_text
      mimeType: mime_type
      localFile {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
            srcSet
            srcSetWebp
          }
        }
      }
    }
  }
`;
