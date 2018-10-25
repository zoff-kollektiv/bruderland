import React from 'react';

import Richtext from '../richtext';

export default ({ quote, text }) => <blockquote className="quote">
  <p>{quote}</p>

  {text && <Richtext text={text} />}
</blockquote>
