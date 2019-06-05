import Helmet from 'react-helmet';
import React from 'react';

const BASE_URL = 'https://bruderland.de';

export default ({ title, ogImage, twitterImage, ogTitle, ogDescription }) => (
  <Helmet>
    {title && <title>{title}</title>}

    {ogDescription && <meta name="description" content={ogDescription} />}

    {/* disable phone number detection on iOS */}
    <meta name="format-detection" content="telephone=no" />

    {/* Facebook */}
    <meta property="og:url" content={BASE_URL} />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Bruderland" />

    <meta property="og:title" content={ogTitle || title} />
    {ogDescription && (
      <meta property="og:description" content={ogDescription} />
    )}

    {ogImage && ogImage.localFile && (
      <meta
        property="og:image"
        content={`${BASE_URL}${ogImage.localFile.childImageSharp.fixed.src}`}
      />
    )}

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content={ogTitle || title} />

    {ogDescription && (
      <meta property="twitter:description" content={ogDescription} />
    )}

    {twitterImage && twitterImage.localFile && (
      <meta
        property="twitter:image"
        content={`${BASE_URL}${
          twitterImage.localFile.childImageSharp.fixed.src
        }`}
      />
    )}
  </Helmet>
);
