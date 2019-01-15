import { graphql } from 'gatsby';
import React, { Component } from 'react';

import PauseIcon from '../../../static/pause.svg';
import PlayIcon from '../../../static/play.svg';
import Progress from '../../progress';

import styles, { playPauseIconStyles } from './styles';

export default class Illustration extends Component {
  audio = React.createRef();

  state = {
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

    this.setState({
      progressPercentage: percentage
    });
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

    const { isPlaying, progressPercentage } = this.state;

    return (
      <section>
        <style jsx>{styles}</style>
        {playPauseIconStyles.styles}

        <img alt={imageAlt} {...image} />

        {audioSrc && (
          <div className="control-button-container">
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <audio ref={this.audio} onTimeUpdate={() => this.updateProgress()}>
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
                <PauseIcon className={playPauseIconStyles.className} />
              ) : (
                <PlayIcon className={playPauseIconStyles.className} />
              )}
            </button>
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
