import React, { useEffect, useState } from 'react';

import Constraint from '../../constraint';

import EnvelopeIcon from '../../../static/envelope.svg';
import FacebookIcon from '../../../static/facebook-f.svg';
import TwitterIcon from '../../../static/twitter.svg';

import styles, { shareIcon } from './styles';

export default ({ title, language }) => {
  const [url, setUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUrl(window.location.href);
    }
  }, [url]);

  const sharingText = `${title} | ${
    language && language === 'en'
      ? 'Minds of their own'
      : 'Eigensinn im Bruderland'
  }`;

  const sectionTitle =
    language && language === 'en'
      ? `Share the episode "${title}" on`
      : `Teile die Episode "${title}" auf`;

  return (
    <footer>
      <style jsx>{styles}</style>
      {shareIcon.styles}

      <Constraint>
        <h4 className="title">{sectionTitle}</h4>

        <ul>
          <li>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                url
              )}`}
              aria-label={
                language && language === 'en'
                  ? 'Share the episode on facebook'
                  : 'Episode auf Facebook teilen'
              }
            >
              <FacebookIcon className={shareIcon.className} />
            </a>
          </li>
          <li>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                sharingText
              )}&url=${encodeURIComponent(url)}`}
              aria-label={
                language && language === 'en'
                  ? 'Share the episode on twitter'
                  : 'Episode auf Twitter teilen'
              }
            >
              <TwitterIcon className={shareIcon.className} />
            </a>
          </li>
          <li>
            <a
              href={`mailto:?subject=${sharingText}&body=${url}`}
              aria-label={
                language && language === 'en'
                  ? 'Share the episode via email'
                  : 'Episode per Email teilen'
              }
            >
              <EnvelopeIcon className={shareIcon.className} />
            </a>
          </li>
        </ul>
      </Constraint>
    </footer>
  );
};
