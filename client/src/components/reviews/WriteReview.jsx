import React, { useState } from 'react';
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  SubmitButton,
} from './styles';

const WriteReview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    console.log('clicked!')
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <SubmitButton onClick={openModal}>Write a Review</SubmitButton>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <h3>Write Your Review</h3>

            <form>

              <SubmitButton type='submit'>Submit Review</SubmitButton>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
};

export default WriteReview;
