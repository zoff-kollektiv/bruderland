import classnames from 'classnames';
import { graphql } from 'gatsby';
import React, { Component } from 'react';

import { formatDuration, formatCurrentTime } from '../../../lib/time';
import PauseIcon from '../../../static/pause.svg';
import PlayIcon from '../../../static/play.svg';
import Progress from '../../progress';

import styles, { playPauseIconStyles } from './styles';

export default class Video extends Component {
  state = {
    isPlaying: false,
    progressPercentage: 0,
    currentTime: ''
  };

  video = React.createRef();

  playButton = React.createRef();

  pause = el => {
    this.setState({ isPlaying: false });
    el.pause();
  };

  play = el => {
    el.play();

    if (el.paused === false && el.ended === false) {
      this.setState({ isPlaying: true });
    }
  };

  stop = el => {
    this.setState({ isPlaying: false });

    el.pause();
    // eslint-disable-next-line no-param-reassign
    el.currentTime = 0;
  };

  togglePlayAndPause = () => {
    const { current: video } = this.video;

    if (video.paused || video.ended) {
      this.play(video);
    } else {
      this.pause(video);
    }
  };

  updateProgress = () => {
    const { current: video } = this.video;
    const { currentTime, duration } = video;
    const percentage = Math.floor((100 / duration) * currentTime);
    const currentTimeFormatted = formatCurrentTime(duration - currentTime);

    this.setState({
      progressPercentage: percentage,
      currentTime: currentTimeFormatted
    });
  };

  setVideoLength = () => {
    const { current: video } = this.video;
    const { duration } = video;

    this.setState({ currentTime: formatDuration(duration) });
  };

  render() {
    const {
      vimeo,
      wordpress_id: id,
      caption,
      fullsize,
      loop = false
    } = this.props;
    const { isPlaying, progressPercentage, currentTime } = this.state;
    const vimeoVideo = vimeo && vimeo.find(({ id: vimeoId }) => vimeoId === id);

    if (!vimeoVideo || !vimeoVideo.files) {
      return null;
    }

    const { pictures, files: sources } = vimeoVideo;
    const poster = pictures.sizes.find(image => image.width >= 1280);

    return (
      <figure className={classnames({ 'is-fullsize': fullsize })}>
        <style jsx>{styles}</style>
        {playPauseIconStyles.styles}

        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={this.video}
          onEnded={() => this.stop(this.video.current)}
          onLoadedMetadata={() => this.setVideoLength()}
          onTimeUpdate={() => this.updateProgress()}
          onClick={() => this.togglePlayAndPause()}
          loop={loop}
          preload="metadata"
          poster={poster && poster.link}
        >
          {/* This happens whenever a video ID of a different user was supplied */}
          {sources &&
            sources.map(({ link, type, width }) => (
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

          <div className="control-button-container">
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

            <p className="current-time">{currentTime}</p>
          </div>
        </footer>
      </figure>
    );
  }
}

export const fragment = graphql`
  fragment videoVimeo on WordPressAcf_vimeoVideo {
    wordpress_id
    caption
    fullsize
    loop
  }
`;
