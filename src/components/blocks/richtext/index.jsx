import { graphql } from 'gatsby';
import React from 'react';

import Constraint from '../../constraint';
import Footnotes from './footnotes';

import styles from './styles';

const replaceFootnotes = (id, text) => {
  let newText = text;
  const search = /#([0-9]+)/g;
  const matches = newText.match(search);

  if (matches) {
    matches.forEach(match => {
      const number = match.split('#')[1];
      const link = `<a href="#footnote-${id}-${number}" class="footnote">(${number})</a>`;

      newText = newText.replace(match, link);
    });
  }

  return newText;
};

export default ({ footnotesRepeat, id, text }) => {
  const hasFootnotes = footnotesRepeat && footnotesRepeat.length > 0;

  return (
    <section>
      <style jsx>{styles}</style>

      <div className="richtext">
        <Constraint>
          <div
            dangerouslySetInnerHTML={{
              __html: hasFootnotes ? replaceFootnotes(id, text) : text
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
