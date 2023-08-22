import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import AppContext from '../AppContext';
import StarRatingInput from './StarRatingInput';
import CustomRadioButton from './RadioButton';
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  SubmitButton,
  BlankEntry,
  ReviewBodyBox,
} from './styles';

function FormEntry({ value, onChange, placeholder }) {
  return (
    <BlankEntry className="form-entry">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || ''}
      />
    </BlankEntry>
  );
}

FormEntry.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

FormEntry.defaultProps = {
  placeholder: '',
};

function WriteReview({ reviewMeta }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { productID } = useContext(AppContext);
  const [rating, setRating] = useState(null);
  const [recommend, setRecommend] = useState(null);
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photos, setPhotos] = useState([]);
  const [characteristics, setCharacteristics] = useState({});

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      product_id: productID,
      rating,
      summary,
      body,
      recommend: recommend === 'yes',
      name,
      email,
      photos,
      characteristics,
    };
    axios
      .post('/reviews', data)
      .then(() => {
        closeModal();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <SubmitButton onClick={openModal}>Write a Review</SubmitButton>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <CloseButton onClick={closeModal}>&times;</CloseButton>
            <h3>TELL US WHAT YOU THINK</h3>

            <form onSubmit={handleSubmit}>
              <StarRatingInput onChange={(value) => setRating(value)} />

              <div>
                <span>Do you recommend this product?</span>
                <label>
                  <input
                    type="radio"
                    value="yes"
                    name="recommend"
                    checked={recommend === 'yes'}
                    onChange={(e) => setRecommend(e.target.value)}
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    value="no"
                    name="recommend"
                    checked={recommend === 'no'}
                    onChange={(e) => setRecommend(e.target.value)}
                  />
                  No
                </label>
              </div>
              <FormEntry
                value={name}
                onChange={setName}
                placeholder="Name"
              />
              <FormEntry
                value={email}
                onChange={setEmail}
                placeholder="Email"
              />
              <FormEntry
                value={summary}
                onChange={setSummary}
                placeholder="Enter the review summary"
              />
              <ReviewBodyBox className="form-entry">
                <textarea
                  type="text"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Write your review here"
                />
              </ReviewBodyBox>
              <div>
                <span>Upload Photos:</span>
                <input
                  type="file"
                  multiple
                  onChange={(e) => {
                    const uploadedFiles = Array.from(e.target.files);
                    const photosURLs = uploadedFiles.map((file) => URL.createObjectURL(file));
                    setPhotos(photosURLs);
                  }}
                />
              </div>
              {reviewMeta && Object.entries(reviewMeta.characteristics).map(([characteristicName, charData]) => (
                <CustomRadioButton
                  key={characteristicName}
                  label={characteristicName}
                  options={['1', '2', '3', '4', '5']}
                  value={characteristics[charData.id] || 0}
                  onChange={(value) =>
                    setCharacteristics((prev) => ({
                      ...prev,
                      [charData.id]: value,
                    }))}
                />
              ))}
              <SubmitButton type="submit">Submit Review</SubmitButton>
            </form>
          </ModalContent>
        </ModalOverlay>
      )}
    </div>
  );
}

WriteReview.propTypes = {
  reviewMeta: PropTypes.shape({
    characteristics: PropTypes.objectOf(
      PropTypes.shape({
        id: PropTypes.number,
      }),
    ).isRequired,
  }).isRequired,
};

export default WriteReview;
