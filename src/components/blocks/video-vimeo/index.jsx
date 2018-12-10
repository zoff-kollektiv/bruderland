import { graphql } from 'gatsby';
import React, { Component } from 'react';

import Constraint from '../../constraint';
import PauseIcon from '../../../static/pause.svg';
import PlayIcon from '../../../static/play.svg';
import Progress from '../../progress';

import styles, { playPauseIconStyles } from './styles';

export default class Video extends Component {
  state = {
    isPlaying: false,
    progressPercentage: 0
  };

  video = React.createRef();

  playButton = React.createRef();

  togglePlayAndPause = () => {
    const { current: video } = this.video;

    if (video.paused || video.ended) {
      this.setState({ isPlaying: true });
      video.play();
    } else {
      this.setState({ isPlaying: false });
      video.pause();
    }
  };

  updateProgress = () => {
    const { current: video } = this.video;
    const percentage = Math.floor((100 / video.duration) * video.currentTime);
    this.setState({ progressPercentage: percentage });
  };

  render() {
    const { vimeo, wordpress_id: id, caption } = this.props;
    const { isPlaying, progressPercentage } = this.state;
    const vimeoVideo = vimeo.find(({ id: vimeoId }) => vimeoId === id);

    return (
      <figure>
        <style jsx>{styles}</style>
        {playPauseIconStyles.styles}

        <Constraint>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video ref={this.video} onTimeUpdate={() => this.updateProgress()}>
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

          <footer>
            {caption && <figcaption>{caption}</figcaption>}

            <button
              type="button"
              className="control-button"
              onClick={event => {
                event.preventDefault();
                this.togglePlayAndPause();
              }}
            >
              <Progress
                ref={this.playButton}
                strokeWidth="7"
                percentage={progressPercentage}
                sqSize="100"
              />

              {isPlaying ? (
                <PauseIcon className={playPauseIconStyles.className} />
              ) : (
                <PlayIcon className={playPauseIconStyles.className} />
              )}
            </button>
          </footer>
        </Constraint>
      </figure>
    );
  }
}

export const fragment = graphql`
  fragment videoVimeo on WordPressAcf_vimeoVideo {
    wordpress_id
    caption
  }
`;
