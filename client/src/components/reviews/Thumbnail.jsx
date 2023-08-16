import React, { useState } from 'react';
import { ModalImage, ModalOverlay, ThumbnailImage } from './styles';

const Thumbnail = ({ imageUrl }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <ThumbnailImage
        src={imageUrl}
        alt='Review Thumbnail'
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <ModalImage src={imageUrl} alt='Full Review' />
        </ModalOverlay>
      )}
    </div>
  );
};

export default Thumbnail;
