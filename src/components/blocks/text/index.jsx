import React from 'react';

export default ({ text }) => <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
