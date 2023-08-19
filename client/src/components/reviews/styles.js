// styles.js
import styled, { keyframes } from 'styled-components';

const transitionPreset1 = 'all 0.15s ease-in-out';

export const ReviewWrapper = styled.div`
  h4 {
    font-weight: 400;
  }
  width: 80%;
  display: flex;
  flex-direction: column; // Stack children vertically
  justify-content: center; // Center children horizontally
  margin: 0 auto; // Center the component itself horizontally
  select {
    width:100px;
  }
`;

export const SummaryWrapper = styled.div`
  width: 90%;
  display: flex;
  text-align: center;
  justify-content: space-between;

  .leftColumn,
  .rightColumn {
    margin-left: 2rem;
    flex-basis: 48%; // a slight gap between the columns
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 5rem;
`;
export const SortReviews = styled.div`
  margin-left: 2.8rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  border-top: 0.07rem solid #ccc;
`;
export const StyledReviewCard = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  border-bottom: 0.07rem solid #ccc;
  padding-bottom: 1.5rem;
  margin-bottom: 1rem;
  .reviewer-details {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
  .response {
    padding: 0.5rem;
    background: #eee;
    font-size: 0.8rem;
  }
`;

export const ThumbnailImage = styled.img`
  border: 0.07rem solid;
  border-color: #ccc;
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  overflow: hidden;
  cursor: pointer;
`;

export const PhotosWrapper = styled.div`
  display: flex;
  gap: 1rem;
  img {
    object-fit: cover; // Ensure the image covers the dimensions without stretching
    overflow: hidden; // Clip any excess part of the image
  }
`;

// image zoom click
export const ModalImage = styled.img`
  max-width: 80vw; // Viewport width for responsiveness
  max-height: 80vh; // Viewport height for responsiveness
  display: block;
  max-width: 60%;
  margin: 0 auto; // Center the image horizontally
`;

const BaseButton = styled.button`
  display: block;
  position: relative;
  padding: 0.6rem 1.5rem;
  font-family: inherit;
  transition: ${transitionPreset1};
  font-size: 1.5rem;
  font-weight: 600;
  background: #fff;
  border: 0.07rem solid #333;
  outline: 0;
  cursor: pointer;
  &:hover {
    background: #333;
    color: #fff;
  }
  &:focus {
    background: #999;
    color: #fff;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem; // This creates a gap between the two buttons
`;


export const HelpfulButton = styled(BaseButton)`
  width: 6.5rem;
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  border-width: 0.06rem;
  &:disabled {
    background: #ddd; // You can choose a different color for the disabled state
    cursor: not-allowed;
  }
`;

export const SubmitButton = styled(BaseButton)`
  margin: 1rem auto 3rem;
`;

export const LoadMoreButton = styled.button`
  background: none;
  font-family: inherit;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  font-size: 0.8rem;
  border-width: 0.06rem;
  margin: 0 auto 0;
`;

export const ReportButton = styled(LoadMoreButton)`
  
  margin-left:1rem;
`;

export const FontWeightBold = styled.span`
  font-weight: 600;
`;

export const FontWeightLight = styled.span`
  font-weight: 200;
`;

// grey background
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

// review form
export const ModalContent = styled.div`
  width: 80%;
  max-width: 20rem;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  position: relative;
`;

// button for review form
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: none;
  background: transparent;
  cursor: pointer;
  font-size: 1.2em;
`;

export const BarWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const BarLabel = styled.span`
  width: 4rem;
  text-align: right;
  margin-right: 0.5rem;
`;

export const Bar = styled.div`
  flex-grow: 1;
  height: 0.8rem;
  background-color: #ccc;
  position: relative;
`;

export const FilledBar = styled.div`
  height: 100%;
  background-color: #666;
  width: ${(props) => props.$percentage}%;
`;

export const BarSpot = styled.div`
  height: 100%;
  background-color: #666;
  width: 0.5rem;
  margin-left: ${(props) => props.$percentage}%;
`;

export const StarWrapper = styled.span`
  display: inline-block;
  position: relative;
  font-size: ${(props) => props.size || '1rem'};
  color: #666;

  &.full {
    color: #f80;
  }

  &.partial::after {
    content: '★';
    position: absolute;
    left: 0;
    top: 0;
    width: ${(props) => props.width || '0%'};
    overflow: hidden;
    color: #f80;
    z-index: 0;
  }
`;