import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import {
  Close, Modal, Icons, ModalCancel,
} from '../overviewStyles';

export default function ShareView({ setShowShare, setModalOpen }) {
  const cancelHandler = () => {
    setModalOpen('false');
    setShowShare(false);
  };
  return (
    <Modal>
      <Close>
        <h2 className="headText">Share</h2>
        <div className="closeCorner">
          <button
            className="close"
            data-testid="cancelShare"
            type="button"
            onClick={cancelHandler}
          >
            <FontAwesomeIcon
              icon={faWindowClose}
              size="2x"
            />
          </button>
          <p className="closeCornerText">Close</p>
        </div>
      </Close>
      <div className="border">
        <p className="innerText">
          You can share the page by clicking the icon.
        </p>
      </div>
      <Icons>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faTwitter}
            size="3x"
            style={{ color: '00ACEE' }}
          />
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faPinterest}
            size="3x"
            style={{ color: 'E60023' }}
          />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faFacebook}
            size="3x"
            style={{ color: '3b5998' }}
          />
        </a>
      </Icons>
      <ModalCancel
        data-testid="closeShare"
        type="button"
        onClick={cancelHandler}
        label="cancel"
      >
        CANCEL
      </ModalCancel>
    </Modal>
  );
}
