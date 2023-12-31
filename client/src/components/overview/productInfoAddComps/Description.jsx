import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { ModalBackground, DescWrapper, ShareWrap } from '../overviewStyles';
import AppContext from '../../AppContext';
import Stars from './Stars';
import ShareView from './ShareView';

export default function Description({ currentProduct, setModalOpen }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [showStars, setShowStars] = useState(true);
  const [showShare, setShowShare] = useState(false);
  const { averageRatings, totalRatings } = useContext(AppContext);

  useEffect(() => {
    if (Object.keys(currentProduct).length) {
      setCategory(`Category: ${currentProduct.category}`);
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
    if (totalRatings > 0) {
      setShowStars(true);
    } else {
      setShowStars(false);
    }
  }, [totalRatings]);

  const clickHandler = () => {
    setShowShare(true);
    setModalOpen('true');
    document.body.style.overflow = 'hidden';
  };

  const keyHandler = (event) => {
    if (event.charCode === 13 || event.charCode === 32) {
      setShowShare(true);
      setModalOpen('true');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    setShowShare(false);
    setModalOpen('false');
  };

  return (
    <DescWrapper>
      <div className="info">
        <h2 className="title" data-testid="title">{title}</h2>
        {showStars ? <Stars averageRatings={averageRatings} totalRatings={totalRatings} /> : null}
        <p className="description" data-testid="description">{description}</p>
      </div>
      <ShareWrap>
        <p className="category" data-testid="category">
          {category}
        </p>
        <button
          className="share"
          data-testid="share"
          type="button"
          tabIndex={0}
          onClick={clickHandler}
          onKeyDown={keyHandler}
        >
          <FontAwesomeIcon
            icon={faArrowUpFromBracket}
            size="lg"
          />
        </button>
      </ShareWrap>
      {showShare && (
        <>
          <ModalBackground onClick={closeModal} />
          <div>
            <ShareView setShowShare={setShowShare} setModalOpen={setModalOpen} />
          </div>
        </>
      )}
    </DescWrapper>

  );
}
