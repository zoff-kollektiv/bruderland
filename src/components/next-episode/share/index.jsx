import React from 'react';

import Constraint from '../../constraint';

import styles from './styles';

export default () => (
  <footer>
    <style jsx>{styles}</style>
    <Constraint>
      <h4 className="title">Episode teilen</h4>

      <ul>
        <li>facebook</li>
        <li>twitter</li>
        <li>email</li>
      </ul>
    </Constraint>
  </footer>
);
