import { graphql } from 'gatsby';
import React from 'react';

import styles from './styles';

export default ({ title, text, image }) => {
  const fluidImage =
    image && image.localFile && image.localFile.childImageSharp.fluid;
  const { src, srcSet } = fluidImage;
  const { caption } = image;

  return (
    <figure>
      <style jsx>{styles}</style>

      <div className="image-container">
        <img src={src} srcSet={srcSet} alt="" loading="lazy" />

        {caption && (
          <figcaption dangerouslySetInnerHTML={{ __html: caption }} />
        )}
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
      localFile {
        childImageSharp {
          fluid(maxWidth: 500) {
            src
            srcSet
          }
        }
      }
    }
  }
`;
