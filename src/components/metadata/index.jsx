import Helmet from 'react-helmet';
import React from 'react';

export default ({ title, ogImage, twitterImage, ogTitle, ogDescription }) => (
  <Helmet>
    {title && <title>{title}</title>}

    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Bruderland" />

    <meta property="og:title" content={ogTitle || title} />
    {ogDescription && <meta property="og:title" content={ogDescription} />}
    {ogImage && ogImage.localFile && (
      <meta
        property="og:image"
        content={ogImage.localFile.childImageSharp.fixed.src}
      />
    )}

    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content={ogTitle || title} />
    {ogDescription && (
      <meta property="twitter:description" content={ogDescription} />
    )}

    {twitterImage && twitterImage.localFile && (
      <meta
        property="twitter:image"
        content={twitterImage.localFile.childImageSharp.fixed.src}
      />
    )}
  </Helmet>
);
