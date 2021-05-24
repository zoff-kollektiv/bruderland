import Link from 'gatsby-link';
import React, { useRef } from 'react';

import ChevronDown from '../../../static/chevron-down.svg';
import HandshakeIcon from '../../../static/logo-handshake.svg';
import Richtext from '../richtext';
import styles, {
  nextLink,
  logoIcon,
  logoLabel,
  arrowIcon,
  logoLink,
} from './styles';

const skipIntro = (el) => {
  const { offsetHeight } = el;

  window.scrollBy({ top: offsetHeight, left: 0, behavior: 'smooth' });
};

const Logo = ({ number, language }) => {
  if (parseInt(number, 10) === 0) {
    return (
      <div className={logoIcon.className}>
        {logoIcon.styles}
        {logoLink.styles}
        {logoLabel.styles}

        {language === 'de' && (
          <>
            <span className={logoLabel.className}>Eigensinn im</span>
            <HandshakeIcon className={logoIcon.className} />
          </>
        )}
      </div>
    );
  }

  return (
    <Link to={language === 'de' ? '/' : '/en/'} className={logoLink.className}>
      {logoLink.styles}
      {logoIcon.styles}
      <HandshakeIcon className={logoIcon.className} />
    </Link>
  );
};

export default ({
  backgroundImage,
  quote,
  text,
  intro,
  renderQuote = true,
  linkTitle = false,
  linkTitleSlug = '',
  number,
  title,
  language,
}) => {
  const introRef = useRef(null);

  return (
    <header className="js-intro">
      <style jsx>{styles}</style>

      {nextLink.styles}

      {renderQuote && (
        <>
          <div className="quote-container" ref={introRef}>
            {backgroundImage.localFile && (
              <picture>
                <source
                  type="image/webp"
                  srcSet={
                    backgroundImage.localFile.childImageSharp.fluid.srcSetWebp
                  }
                />

                <source
                  type={backgroundImage.mimeType}
                  srcSet={
                    backgroundImage.localFile.childImageSharp.fluid.srcSet
                  }
                />

                <img
                  src={backgroundImage.localFile.childImageSharp.fluid.src}
                  alt={backgroundImage.alt_text}
                  className="image"
                />
              </picture>
            )}

            <div className="logo">
              <Logo number={number} language={language} />
            </div>

            <div className="quote">
              <blockquote>{quote}</blockquote>

              {arrowIcon.styles}

              <ChevronDown
                className={arrowIcon.className}
                onClick={() => skipIntro(introRef.current)}
              />
            </div>
          </div>

          {backgroundImage && backgroundImage.caption && (
            <div
              dangerouslySetInnerHTML={{ __html: backgroundImage.caption }}
              className="caption"
            />
          )}
        </>
      )}

      <div className="lower-intro">
        <h1 className="title">
          {linkTitle ? (
            <Link
              className={nextLink.className}
              to={`${
                language ? `/${language}` : ''
              }/episodes/${linkTitleSlug}/`}
              dangerouslySetInnerHTML={{ __html: title }}
            />
          ) : (
            <span dangerouslySetInnerHTML={{ __html: title }} />
          )}
        </h1>

        <Richtext text={intro || text} bold />
      </div>
    </header>
  );
};
