import { graphql } from 'gatsby';
import React, { Component } from 'react';

import PauseIcon from '../../../static/pause.svg';
import PlayIcon from '../../../static/play.svg';
import Progress from '../../progress';

import styles, { playPauseIconStyles } from './styles';

export default class Illustration extends Component {
  audio = React.createRef();

  state = {
    isPlaying: false
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

  updateProgress = () => {};

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
        url: {
          localFile: { relativePath: audioSrc }
        }
      },
      image: {
        alt_text: imageAlt,
        localFile: {
          childImageSharp: { fluid: image }
        }
      }
    } = this.props;

    const { isPlaying } = this.state;

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
              <Progress strokeWidth="7" percentage="10" sqSize="100" />

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
        localFile {
          relativePath
        }
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
