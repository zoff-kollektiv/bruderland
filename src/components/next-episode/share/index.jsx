import React from 'react';

import Constraint from '../../constraint';

import EnvelopeIcon from '../../../static/envelope.svg';
import FacebookIcon from '../../../static/facebook-f.svg';
import TwitterIcon from '../../../static/twitter.svg';

import styles, { shareIcon } from './styles';

export default ({ title }) => {
  let currentUrl = '';
  const sharingText = `${title} | Eigensinn im Bruderland`;

  if (typeof window !== 'undefined') {
    currentUrl = window.location.href;
  }

  return (
    <footer>
      <style jsx>{styles}</style>
      {shareIcon.styles}

      <Constraint>
        <h4 className="title">Teile die Episode {title} auf</h4>

        <ul>
          <li>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                currentUrl
              )}`}
              aria-label="Episode auf Facebook teilen"
            >
              <FacebookIcon className={shareIcon.className} />
            </a>
          </li>
          <li>
            <a
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                sharingText
              )}&url=${encodeURIComponent(currentUrl)}`}
              aria-label="Episode auf Twitter teilen"
            >
              <TwitterIcon className={shareIcon.className} />
            </a>
          </li>
          <li>
            <a
              href={`mailto:?subject=${sharingText}&body=${currentUrl}`}
              aria-label="Episode per Email teilen"
            >
              <EnvelopeIcon className={shareIcon.className} />
            </a>
          </li>
        </ul>
      </Constraint>
    </footer>
  );
};
