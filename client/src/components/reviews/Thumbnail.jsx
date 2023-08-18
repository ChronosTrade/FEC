import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ModalImage, ModalOverlay, ThumbnailImage } from './styles';

function Thumbnail({ imageUrl }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <ThumbnailImage
        src={imageUrl}
        alt="Review Thumbnail"
        onClick={() => setIsModalOpen(true)}
      />
      {isModalOpen && (
        <ModalOverlay onClick={() => setIsModalOpen(false)}>
          <ModalImage src={imageUrl} alt="Full Review" />
        </ModalOverlay>
      )}
    </div>
  );
}
Thumbnail.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
export default Thumbnail;
