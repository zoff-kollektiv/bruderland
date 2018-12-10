import { graphql } from 'gatsby';
import React from 'react';

import Constraint from '../../constraint';
import Progress from '../../progress';

import styles from './styles';

export default ({ vimeo, wordpress_id: id, caption }) => {
  const vimeoVideo = vimeo.find(({ id: vimeoId }) => vimeoId === id);

  return (
    <figure>
      <style jsx>{styles}</style>

      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video controls>
        {/* This happens whenever a video ID of a different user was supplied */}
        {vimeoVideo.files &&
          vimeoVideo.files.map(({ link, type, width }) => (
            <source
              key={link}
              src={link}
              type={type}
              media={`all and (max-width: ${width}px)`}
            />
          ))}
      </video>

      <div className="progress">
        <Progress strokeWidth="5" percentage="15" sqSize="100" />
      </div>

      {caption && (
        <figcaption>
          <Constraint>{caption}</Constraint>
        </figcaption>
      )}
    </figure>
  );
};

export const fragment = graphql`
  fragment videoVimeo on WordPressAcf_vimeoVideo {
    aspectRatio
    wordpress_id
    caption
    title
  }
`;
