import Helmet from 'react-helmet';
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default ({ title, ogImage, twitterImage, ogTitle, ogDescription }) => {
  const {
    site: {
      siteMetadata: { siteUrl },
    },
  } = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          siteUrl
        }
      }
    }
  `);

  return (
    <Helmet>
      {title && <title>{title}</title>}

      {ogDescription && <meta name="description" content={ogDescription} />}

      {/* disable phone number detection on iOS */}
      <meta name="format-detection" content="telephone=no" />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Eigensinn im Bruderland" />

      <meta property="og:title" content={ogTitle || title} />
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}

      {ogImage && ogImage.localFile && (
        <meta
          property="og:image"
          content={`${siteUrl}${ogImage.localFile.childImageSharp.fixed.src}`}
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
          content={`${siteUrl}${twitterImage.localFile.childImageSharp.fixed.src}`}
        />
      )}
    </Helmet>
  );
};
