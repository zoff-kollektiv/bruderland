import React, { Component } from 'react';

import styles from './styles';

export default class BlockError extends Component {
  state = {
    error: null,
    info: null,
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({ hasError: true, error, info });
  }

  render() {
    const { children } = this.props;
    const { error, info, hasError } = this.state;

    if (hasError) {
      return (
        <div className="error">
          <style jsx>{styles}</style>
          <h1 className="title">{error.toString()}</h1>
          <pre className="stack">{info.componentStack}</pre>

          {error.stack && <pre className="stack">{error.stack}</pre>}
        </div>
      );
    }

    return children;
  }
}
