import React from 'react';

import Navigation from '../components/navigation';
import withLayout from '../components/with-layout';

const NavigationPage = ({ pageContext: { language, episodes } }) => (
  <Navigation items={episodes} isOpen language={language} />
);

export default withLayout(NavigationPage);
