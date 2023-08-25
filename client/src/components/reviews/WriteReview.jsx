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

function FormEntry({
  label, value, onChange, placeholder,
}) {
  return (
    <BlankEntry className="form-entry">
      <label>{label}</label>
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
  label: PropTypes.string.isRequired,
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
  const [error, setError] = useState('');
  const [photoNames, setPhotoNames] = useState([]);

  const validateForm = () => {
    const errors = [];

    if (!rating) {
      errors.push('Overall rating is mandatory');
    }
    if (!recommend) {
      errors.push('Recommendation is mandatory');
    }
    if (Object.keys(characteristics).length === 0) {
      errors.push('Characteristics are mandatory');
    }
    if (body.length < 50) {
      errors.push('Review body must be over 50 characters');
    }
    if (!name) {
      errors.push('Nickname is mandatory');
    }
    if (!email || !email.includes('@')) {
      errors.push('A valid email is mandatory');
    }

    setError(errors);
    return errors.length === 0;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

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

  const handleRemovePhoto = (index) => {
    const newPhotos = [...photos];
    const newPhotoNames = [...photoNames];
    newPhotos.splice(index, 1);
    newPhotoNames.splice(index, 1);
    setPhotos(newPhotos);
    setPhotoNames(newPhotoNames);
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
              <StarRatingInput onChange={(value) => setRating(value)} required />

              <div>
                <span>Do you recommend this product?</span>
                {' '}
                <input
                  type="radio"
                  value="yes"
                  name="recommend"
                  checked={recommend === 'yes'}
                  onChange={(e) => setRecommend(e.target.value)}
                />
                Yes
                {' '}
                <input
                  type="radio"
                  value="no"
                  name="recommend"
                  checked={recommend === 'no'}
                  onChange={(e) => setRecommend(e.target.value)}
                />
                No
              </div>
              <FormEntry
                label="Name"
                value={name}
                onChange={setName}
                placeholder="Example: jackson11!"
              />
              <p className="formNote">For privacy reasons, do not use your full name or email address</p>

              <FormEntry
                label="Email"
                value={email}
                onChange={setEmail}
                placeholder="Example: jackson11@email.com"
              />
              <p className="formNote">For authentication reasons, you will not be emailed</p>
              <FormEntry
                label="Summary"
                value={summary}
                onChange={setSummary}
                placeholder="Enter the review summary"
              />
              <ReviewBodyBox className="form-entry">
                <label>Write your review here...</label>
                <textarea
                  type="text"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  placeholder="Why did you like the product or not?"
                  required
                />
                {body.length < 50 ? (
                  <p className="formNote">
                    Minimum required characters left:
                    {' '}
                    {50 - body.length}
                  </p>
                ) : (
                  <p className="formNote">Minimum reached</p>
                )}
              </ReviewBodyBox>
              <div>
                <p>
                  Upload Photos:
                  <input
                    type="file"
                    multiple
                    onChange={(e) => {
                      const uploadedFiles = Array.from(e.target.files);
                      const newPhotosURLs = uploadedFiles.map((file) => URL.createObjectURL(file));
                      const newUploadedFileNames = uploadedFiles.map((file) => file.name);
                      setPhotos((prevPhotos) => [...prevPhotos, ...newPhotosURLs]);
                      setPhotoNames((prevNames) => [...prevNames, ...newUploadedFileNames]);
                    }}
                  />
                </p>
                {photoNames.map((photoname, index) => (
                  <div key={index} className="photoName">
                    {photoname}
                    {' '}
                    <button type="button" onClick={() => handleRemovePhoto(index)}>{' X '}</button>
                  </div>
                ))}
              </div>
              {reviewMeta
              && Object.entries(reviewMeta.characteristics).map(([charName, charData]) => (
                <CustomRadioButton
                  key={charName}
                  label={charName}
                  options={['1', '2', '3', '4', '5']}
                  value={characteristics[charData.id] || 0}
                  onChange={(value) => setCharacteristics((prev) => ({
                    ...prev,
                    [charData.id]: value,
                  }))}
                />
              ))}
              {error.length > 0 && (
              <div>
                <p>You must enter the following:</p>
                <ul>
                  {error.map((err, idx) => (
                    <li key={idx}>{err}</li>
                  ))}
                </ul>
              </div>
              )}
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
