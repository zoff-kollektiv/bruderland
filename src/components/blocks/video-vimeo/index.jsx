import { graphql } from 'gatsby';
import React from 'react';

import Constraint from '../../constraint';

import styles from './styles';

export default ({ wordpress_id: id, caption, title }) => (
  <figure>
    <style jsx>{styles}</style>

    <div className="video-container">
      {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
      <iframe
        title={title}
        src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`}
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
        height="360"
        width="640"
        className="video"
      />
    </div>

    {caption && (
      <figcaption>
        <Constraint>{caption}</Constraint>
      </figcaption>
    )}
  </figure>
);

export const fragment = graphql`
  fragment videoVimeo on WordPressAcf_vimeoVideo {
    wordpress_id
    caption
    title
  }
`;
