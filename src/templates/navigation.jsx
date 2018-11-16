import React from 'react';

import Navigation from '../components/navigation';
import withLayout from '../components/with-layout';

const Page = ({ pageContext: { episodes } }) => (
  <Navigation items={episodes} isOpen />
);

export default withLayout(Page);
