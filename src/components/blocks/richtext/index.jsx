import { graphql } from 'gatsby';
import classnames from 'classnames';
import React from 'react';

import Constraint from '../../constraint';
import Footnotes from './footnotes';

import styles from './styles';

const replaceFootnotes = (id, text) => {
  let newText = text;
  const search = /#([0-9]+)/g;
  const matches = newText.match(search);

  if (matches) {
    matches.forEach((match) => {
      const number = match.split('#')[1];
      const link = `<a href="#footnote-${id}-${number}" class="footnote">(${number})</a>`;

      newText = newText.replace(match, link);
    });
  }

  return newText;
};

const replaceWpBaseUrl = (text) => {
  const WP_BASE = 'https://b2oulrk7.myraidbox.de';

  return text.replace(new RegExp(WP_BASE, 'g'), '');
};

export default ({ footnotesRepeat, id, text, bold = false }) => {
  const hasFootnotes = footnotesRepeat && footnotesRepeat.length > 0;
  let cleanText = replaceWpBaseUrl(text);

  if (hasFootnotes) {
    cleanText = replaceFootnotes(id, text);
  }

  return (
    <section>
      <style jsx>{styles}</style>

      <div className={classnames('richtext', { 'richtext--is-bold': bold })}>
        <Constraint>
          <div
            dangerouslySetInnerHTML={{
              __html: cleanText,
            }}
          />
        </Constraint>
      </div>

      <Constraint>
        {hasFootnotes && <Footnotes id={id} entries={footnotesRepeat} />}
      </Constraint>
    </section>
  );
};

export const fragment = graphql`
  fragment richtext on WordPressAcf_text {
    id
    text
    footnotesRepeat {
      number
      text
    }
  }
`;
