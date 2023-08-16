// styles.js
import styled, { keyframes } from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const transitionPreset1 = 'all 0.15s ease-in-out';
export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;800&display=swap');
  body {
    font-family: 'Nunito', sans-serif;
    background: #f6f6f6;
  }
  h1,
  h2,
  h3,
  h4 {
    justify-content: center;
    text-aligh: center;
  }
`;

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
    flex-basis: 48%; // a slight gap between the columns
  }
`;

export const StyledReviewCard = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  border-bottom: 0.07rem solid #ccc;
  padding-bottom: 2rem;
  margin-bottom: 1.5rem;
  .reviewer-details {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
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
  margin-top: 1rem;
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

export const SubmitButton = styled.button`
  display: block;
  position: relative;
  margin: 3rem auto 0;
  padding: 0.6rem 1.5rem;
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

export const HelpfulButton = styled.button`
  display: block;
  position: relative;
  width: 6rem;
  padding: 0.5rem 1rem;
  transition: ${transitionPreset1};
  font-size: 0.8rem;
  font-weight: 600;
  background: #fff;
  border: 1px solid #333;
  outline: 0;
  &:hover {
    background: #333;
    color: #fff;
  }
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
  height: 1rem;
  background-color: #ccc;
  position: relative;
`;

export const FilledBar = styled.div`
  height: 100%;
  background-color: #333;
  width: ${(props) => props.percentage}%;
`;

export const BarSpot = styled.div`
  height: 100%;
  background-color: #333;
  width: 0.5rem;
  margin-left: ${(props) => props.percentage}%;
`;
