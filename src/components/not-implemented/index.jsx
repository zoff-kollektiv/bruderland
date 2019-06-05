import React from 'react';

export default props => {
  const { layout } = props;

  return (
    <div>
      <strong>
        Block type &quot;
        {layout}
        &quot; not implemented
      </strong>
      {JSON.stringify(props)}
    </div>
  );
};
