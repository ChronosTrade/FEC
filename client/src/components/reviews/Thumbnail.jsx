import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ModalImage, ModalOverlay, ThumbnailImage } from './styles';
import imgError from '../../assets/imgError.jpeg';

function Thumbnail({ imageUrl }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <ThumbnailImage
        src={imageUrl}
        onError={(e) => {
          if (e.target.src !== imgError) {
            e.target.src = imgError;
          }
        }}
        alt="Thumbnail"
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
