import { graphql } from 'gatsby';
import React, { Component } from 'react';

import { formatDuration, formatCurrentTime } from '../../../lib/time';
import PlayIcon from '../../../static/play.svg';
import Progress from '../../progress';
import VolumeDownIcon from '../../../static/volume-down.svg';

import styles, { playPauseIconStyles } from './styles';

export default class Illustration extends Component {
  audio = React.createRef();

  state = {
    currentTime: '',
    isPlaying: false,
    progressPercentage: 0
  };

  togglePlayAndPause = () => {
    const { current: audio } = this.audio;
    const { isPlaying } = this.state;

    if (isPlaying) {
      this.pause(audio);
    } else {
      this.play(audio);
    }
  };

  updateProgress = () => {
    const { current: audio } = this.audio;
    const { currentTime, duration } = audio;
    const percentage = Math.floor((100 / duration) * currentTime);
    const currentTimeFormatted = formatCurrentTime(currentTime);

    this.setState({
      progressPercentage: percentage,
      currentTime: currentTimeFormatted
    });
  };

  setAudioLength = () => {
    const { current: audio } = this.audio;
    const { duration } = audio;

    this.setState({ currentTime: formatDuration(duration) });
  };

  play = el => {
    el.play();

    this.setState({ isPlaying: true });
  };

  pause = el => {
    el.pause();

    this.setState({ isPlaying: false });
  };

  render() {
    const {
      audio: {
        url: { source_url: audioSrc }
      },
      image: {
        alt_text: imageAlt,
        localFile: {
          childImageSharp: { fluid: image }
        }
      }
    } = this.props;

    const { isPlaying, progressPercentage, currentTime } = this.state;

    return (
      <section>
        <style jsx>{styles}</style>
        {playPauseIconStyles.styles}

        <img alt={imageAlt} {...image} />

        {audioSrc && (
          <div className="control-button-container">
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <audio
              ref={this.audio}
              onTimeUpdate={() => this.updateProgress()}
              onLoadedMetadata={() => this.setAudioLength()}
            >
              <source src={audioSrc} type="audio/mp3" />
            </audio>

            <button
              type="button"
              className="control-button"
              onClick={event => {
                event.preventDefault();
                this.togglePlayAndPause();
              }}
            >
              <Progress
                strokeWidth="7"
                percentage={progressPercentage}
                sqSize="100"
              />

              {isPlaying ? (
                <VolumeDownIcon className={playPauseIconStyles.className} />
              ) : (
                <PlayIcon className={playPauseIconStyles.className} />
              )}
            </button>

            <p className="current-time">{currentTime}</p>
          </div>
        )}
      </section>
    );
  }
}

export const fragment = graphql`
  fragment illustration on WordPressAcf_illustration {
    audio {
      url {
        source_url
      }
    }
    image {
      alt_text
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
