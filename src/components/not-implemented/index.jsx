import React from 'react';

export default props => <div>
  <strong>Block type "{props.layout}" not implemented</strong>
  {JSON.stringify(props)}
</div>
