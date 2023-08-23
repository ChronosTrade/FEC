import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { ModalBackground, DescWrapper, ShareWrap } from '../overviewStyles';
import AppContext from '../../AppContext';
import Stars from './Stars';
import ShareView from './ShareView';

export default function Description({ currentProduct }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [showShare, setShowShare] = useState(false);
  const [showStars, setShowStars] = useState(true);
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
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setShowShare(false);
  };

  return (
    <DescWrapper>
      <h2 className="title" data-testid="title">{title}</h2>
      {showStars ? <Stars averageRatings={averageRatings} totalRatings={totalRatings} /> : null}
      <p className="description" data-testid="description">{description}</p>
      <ShareWrap>
        <p className="category" data-testid="category">
          {category}
        </p>
        <button
          className="share"
          data-testid="share"
          type="button"
          onClick={clickHandler}
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
            <ShareView setShowShare={setShowShare} />
          </div>
        </>
      )}
    </DescWrapper>
  );
}
