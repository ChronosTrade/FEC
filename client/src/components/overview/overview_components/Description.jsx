import React, { useState, useEffect } from 'react';
import { Modal, ModalBackground } from './ImageMainStyles';

export default function Description({ currentProduct, totalRatings }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    if (Object.keys(currentProduct).length) {
      setCategory(currentProduct.category);
      setDescription(currentProduct.description);
      setTitle(currentProduct.name);
      console.log(totalRatings);
    }
  }, [currentProduct]);

  useEffect(() => {
    if (showShare === false) {
      document.body.style.overflow = 'unset';
    }
  }, [showShare]);

  const clickHandler = () => {
    setShowShare(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowShare(false);
  };

  return (
    <div>
      {/* {product.reviews} */}
      {title}
      {category}
      {description}
      <button
        type="button"
        onClick={clickHandler}
      >
        Share
      </button>
      {showShare && (
        <>
          <ModalBackground onClick={closeModal} />
          <Modal onClick={(e) => e.stopPropogation()}>
            <ShareView setShowShare={setShowShare} />
          </Modal>
        </>
      )}
    </div>
  );
}

function ShareView({ setShowShare }) {
  const cancelHandler = () => {
    setShowShare(false);
  };
  return (
    <div>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
      <a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest</a>
      <button
        type="button"
        onClick={cancelHandler}
        label="cancel"
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={cancelHandler}
        placeholder="x"
        label="X"
      >
        X
      </button>
    </div>
  );
}
