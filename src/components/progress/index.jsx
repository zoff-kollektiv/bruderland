import React, { Component } from 'react';

import styles from './styles';

export default class Progress extends Component {
  state = {};

  render() {
    const { sqSize, strokeWidth, percentage, ...rest } = this.props;
    const radius = (sqSize - strokeWidth) / 2;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * percentage) / 100;

    return (
      <svg viewBox={`0 0 ${sqSize} ${sqSize}`} {...rest}>
        <style jsx>{styles}</style>

        <circle
          className="background"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius - 2}
          strokeWidth="1"
        />

        <circle
          className="progress"
          cx={sqSize / 2}
          cy={sqSize / 2}
          r={radius}
          strokeWidth={`${strokeWidth}px`}
          transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
          style={{
            strokeDasharray: dashArray,
            strokeDashoffset: dashOffset
          }}
        />
      </svg>
    );
  }
}
