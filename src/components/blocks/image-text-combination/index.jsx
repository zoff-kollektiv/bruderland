import { graphql } from 'gatsby';
import React from 'react';

import styles from './styles';

export default ({ title, text, image }) => {
  const fluidImage =
    image && image.localFile && image.localFile.childImageSharp.fluid;
  const { src, srcSet } = fluidImage;

  return (
    <figure>
      <style jsx>{styles}</style>

      <img src={src} srcSet={srcSet} alt="" />

      <div className="content">
        <h3 className="title">{title}</h3>
        <p className="text">{text}</p>
      </div>
    </figure>
  );
};

export const fragment = graphql`
  fragment imageTextCombination on WordPressAcf_imageTextCombination {
    title
    text
    image {
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
