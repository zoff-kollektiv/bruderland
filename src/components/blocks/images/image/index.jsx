import classnames from 'classnames';
import Modal from 'react-modal';
import React, { useState } from 'react';

import Caption from '../../../caption';
import ExpandIcon from '../../../../static/expand.svg';
import styles, { expandIcon } from './styles';

export default ({
  fullscreen = false,
  allow_expansion: allowExpansion = false,
  imagesImage
}) => {
  if (!imagesImage) {
    return null;
  }

  const { alt_text: alt, caption, localFile } = imagesImage;
  const [modalOpen, setModalState] = useState(false);

  return (
    imagesImage &&
    localFile && (
      <figure className={classnames({ 'is-fullscreen': fullscreen })}>
        <style jsx>{styles}</style>
        {expandIcon.styles}

        <img
          src={localFile.childImageSharp.fluid.src}
          srcSet={localFile.childImageSharp.fluid.srcSet}
          alt={alt}
          loading="lazy"
        />

        {caption && <Caption caption={caption} />}

        {allowExpansion && (
          <>
            <button
              className="fullscreen-toggle"
              type="button"
              onClick={event => {
                event.preventDefault();
                setModalState(!modalOpen);
              }}
              aria-label={`Bild ${modalOpen ? 'verkleinern' : 'vergrößern'}`}
            >
              <ExpandIcon className={expandIcon.className} />
            </button>

            {modalOpen && (
              <Modal isOpen className="modal" overlayClassName="modal-overlay">
                Fullscreen image
              </Modal>
            )}
          </>
        )}
      </figure>
    )
  );
};
