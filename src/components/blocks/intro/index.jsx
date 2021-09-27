import cn from 'classnames';
import Link from 'gatsby-link';
import React, { useRef } from 'react';

import ChevronDown from '../../../static/chevron-down.svg';
import HandshakeIcon from '../../../static/logo-handshake.svg';
import Richtext from '../richtext';
import styles, {
  nextLink,
  logoIcon,
  logoLabel,
  logoTagline,
  arrowIcon,
  logoLink,
  logoLabelEn,
} from './styles';

const skipIntro = (el) => {
  const { offsetHeight } = el;

  window.scrollBy({ top: offsetHeight, left: 0, behavior: 'smooth' });
};

const Wrapper = ({ number, language, children }) => {
  if (parseInt(number, 10) === 0) {
    return <>{children}</>;
  }

  return (
    <>
      {logoLink.styles}
      <Link
        to={!language || language === 'de' ? '/' : '/en/'}
        className={logoLink.className}
      >
        {children}
      </Link>
    </>
  );
};

const Logo = ({ number, language }) => {
  return (
    <Wrapper number={number} language={language}>
      <div className={logoIcon.className}>
        {logoIcon.styles}
        {logoLink.styles}
        {logoTagline.styles}

        {(!language || language === 'de') && (
          <>
            {logoLabel.styles}
            <span className={logoLabel.className}>Eigensinn im</span>
          </>
        )}

        {language === 'en' && (
          <>
            {logoTagline.styles}
            {logoLabelEn.styles}
            <span className={cn(logoTagline.className, logoLabelEn.className)}>
              Minds of their own
            </span>
          </>
        )}

        <HandshakeIcon className={logoIcon.className} />

        {language === 'en' && (
          <span className={logoTagline.className}>Migrants in the GDR</span>
        )}
      </div>
    </Wrapper>
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
  const langPrefix = language === 'de' ? '' : `${language}/`;

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
              to={`/${langPrefix}episodes/${linkTitleSlug}/`}
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
