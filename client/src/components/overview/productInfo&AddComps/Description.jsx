import React, { useState, useEffect, forwardRef } from 'react';
import { Modal, ModalBackground } from '../overviewStyles';
import Stars from './Stars';
import ShareView from './ShareView';

const Description = forwardRef(({ currentProduct }, refRatings) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [showShare, setShowShare] = useState(false);
  const [showStars, setShowStars] = useState(true);
  // const { averageRatings, totalRatings } = useContext(AppContext);
  const [averageRatings, setAverageRatings] = useState(2.5);
  const [totalRatings, setB] = useState(4);

  useEffect(() => {
    if (Object.keys(currentProduct).length) {
      setCategory(currentProduct.category);
      setDescription(currentProduct.description);
      setTitle(currentProduct.name);
    }
  }, [currentProduct]);

  useEffect(() => {
    if (showShare === false) {
      document.body.style.overflow = 'unset';
    }
  }, [showShare]);

  useEffect(() => {
    if (totalRatings) {
      setShowStars(true);
    } else {
      setShowStars(false);
    }
  }, [totalRatings]);

  const clickHandler = () => {
    setShowShare(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowShare(false);
  };

  return (
    <div>
      {showStars ? <Stars ref={refRatings} /> : null}
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
          <Modal>
            <ShareView setShowShare={setShowShare} />
          </Modal>
        </>
      )}
    </div>
  );
});

export default Description;