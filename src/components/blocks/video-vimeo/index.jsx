import { graphql } from 'gatsby';
import React from 'react';

import Constraint from '../../constraint';
import Progress from '../../progress';
import Video from './video';

import styles from './styles';

export default ({ wordpress_id: id, aspectRatio, caption, title }) => (
  <figure>
    <style jsx>{styles}</style>

    <div className="container">
      <Video id={id} aspectRatio={aspectRatio} title={title} />
    </div>

    {caption && (
      <figcaption>
        <Constraint>{caption}</Constraint>
      </figcaption>
    )}

    <div className="progress">
      <Progress strokeWidth="5" percentage="15" sqSize="100" />
    </div>
  </figure>
);

export const fragment = graphql`
  fragment videoVimeo on WordPressAcf_vimeoVideo {
    aspectRatio
    wordpress_id
    caption
    title
  }
`;
