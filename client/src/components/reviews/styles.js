// styles.js
import styled from 'styled-components';
import { lightTheme } from '../globalStyling';

const transitionPreset1 = 'all 0.3s ease-in-out';
const veryLightGrey = '#ddd';

export const ReviewWrapper = styled.div`
  h4 {
    font-weight: 400;
  }
  max-width: 70rem;
  min-height: 70rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto 3rem;
  select {
    width:100px;
  }
  #review-header {
    width:100%;
    text-align: left;
    font-weight: 500;
    font-size: 30px;
    margin-bottom: 0.1rem;
    margin-top: 0.2rem;
  }
  input, textarea {
    outline: none;
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid #DDDDDD;
    &:focus {
      box-shadow: 0 0 5px ${(props) => props.theme.themeColor};
      border: 1px solid ${(props) => props.theme.themeColor};
      transition: ${transitionPreset1};
    }
`;

export const SummaryWrapper = styled.div`
  width: 100%;
  min-width:70rem;
  display: flex;
  text-align: left;
  justify-content: space-between;
  top:0;
  margin: 0 auto;

  .leftColumn {
    flex-basis: 40%;
    p {
      color: ${(props) => props.theme.secFontColor};
    }
  }
  .rightColumn {
    flex-basis: 60%; 
    p {
      margin: 0 1rem 0.5rem;
    }
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 0;
`;
export const SortReviews = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  border-top: 0.07rem solid #ccc;
`;

export const StyledReviewCard = styled.div`
  width: 100%;
  min-width:70rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  border-bottom: 0.07rem solid #ccc;
  padding-bottom: 2rem;

  .leftSection {
    display: flex;
    flex-basis: 20%;
    flex-direction: column;
    p {
      margin-bottom: 0;
    }
  }

  .rightSection {
    flex-basis: 78%; 
    display: flex;
    max-width: 78%;
    flex-direction: column;
    justify-content: center;
    p {
      word-wrap: break-word;
    }
  }
  
  .review-title {
    margin-bottom: 0;
    font-size: 1.2rem;
    font-weight: 600;
    p {
      margin-bottom: 1rem;
    }
  }
  .reviewer-id {
    font-size: 1.2rem;
  }
  .review-date {
    font-size: 0.8rem;
    color: ${(props) => props.theme.secFontColor};
   }
  .response {
    padding: 0.5rem;
    background: ${veryLightGrey};
    font-size: 0.8rem;
  }
  .recommendation {
    font-size: 0.8rem;  
  }
`;

export const SearchBox = styled.div`
margin-top: -2.8rem;
display: flex;
justify-content: flex-end;
align-items: flex-end; 
width:100%;
input {
  width: 10rem;
  height: 1.5rem;
  margin-right: 0;
}
`;
export const ThumbnailImage = styled.img`
  border: 0.2rem solid;
  border-color: ${(props) => props.theme.themeColor};
  padding: 0.3rem;
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
  background: ${(props) => props.theme.themeColor};
  color: ${(props) => props.theme.contrastFontColor};
  border: 0.07rem solid #333;
  outline: 0;
  cursor: pointer;
  &:hover {
    background: #333;
    color: ${(props) => props.theme.background};
  }
  &:focus {
    background: #999;
    color: ${(props) => props.theme.background};
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 1rem;
  display: flex;
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
  margin: 1rem auto 1rem;
`;

const TextButton = styled.button`
  background: none;
  font-family: inherit;
  border: none;
  color: ${(props) => props.theme.basicFontColor};
  cursor: pointer;
  text-decoration: underline;
  font-size: 0.8rem;
  border-width: 0.06rem;
  transition: ${transitionPreset1};

  &:hover {
    text-decoration: none;
  }
`;

export const LoadMoreButton = styled(TextButton).attrs((props) => ({
  children: props.$isHidden ? '' : 'More Reviews',
}))`
  margin: 1rem auto 0;
  visibility: ${({ $isHidden }) => ($isHidden ? 'hidden' : 'visible')};
`;

export const ReportButton = styled(TextButton)`
  margin: 0 1rem;
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
  z-index: 1001;
`;

// review form
export const ModalContent = styled.div`
  width: 80%;
  max-width: 40rem;
  max-height:95%;
  background-color: ${(props) => props.theme.background};
  padding: 20px;
  border-radius: 5px;
  position: relative;
  overflow-y: auto;
  h3 {
    text-align: center;
  }
  .formNote {
    margin: -1rem 0 0;
    color: ${(props) => props.theme.secFontColor};
    font-size: 0.7rem;
  }
  ul {
    color: red;
    font-size: 0.7rem;  
  }
  input, textarea {
    outline: none;
    padding: 3px 0px 3px 3px;
    margin: 5px 1px 3px 0px;
    border: 1px solid #DDDDDD;
    &:focus {
      box-shadow: 0 0 5px ${(props) => props.theme.themeColor};
      border: 1px solid ${(props) => props.theme.themeColor};
      transition: ${transitionPreset1};
    }
  }
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
  .star-count {
    margin-left: 1rem;
  }
  button {
    border: 0;
    background: none;
    text-decoration: underline;
    cursor: pointer;
    color: ${(props) => props.theme.basicFontColor};
  }
`;

export const BarLabel = styled.span`
  width: 3rem;
  text-align: left;
  margin-right: 0.5rem;
`;

export const Bar = styled.div`
  flex-grow: 0.8;
  height: 0.6rem;
  background-color: ${veryLightGrey};
  position: relative;
`;

export const Slider = styled.div`
  flex-grow: 1;
  height: 0.3rem;
  background-color: ${(props) => props.theme.themeColor};
  color: ${(props) => props.theme.secColor};
  text-shadow: 0.1rem 0.1rem 0.2rem ${(props) => props.theme.themeColor};
  position: relative;
  margin-left: 1rem;

  &:before, &:after {
    content: ''; 
    display: block;
    position: absolute;
    height: 0.5rem;
    width: 0.2rem;
    background-color: ${(props) => props.theme.background};
    top: 50%;
    transform: translateY(-50%);
  }

  &:before {
    left: 25%; 
  }

  &:after {
    left: 75%; 
  }

`;

export const CharLabel = styled.div`
  width: 5rem;
  margin: 0 0.5rem 0 1rem;
  text-align:left;
  font-size: 0.8rem;
  color: ${(props) => props.theme.secFontColor};
`;
export const FilledBar = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.themeColor};
  width: ${(props) => props.$percentage}%;
`;

export const BarSpot = styled.div`
  width: 0.1rem;
  font-size: 0.8rem;
  background: transparent;
  margin-top: -0.3rem;
  margin-left: ${(props) => props.$percentage}%;
  position: relative;
  z-index: 2;
`;
export const StarWrapper = styled.span`
  display: inline-block;
  position: relative;
  font-size: ${(props) => props.size || '1rem'};
  color: ${(props) => props.theme.themeColor};

  &.partial::after {
    content: '★';
    position: absolute;
    left: 0;
    top: 0;
    width: ${(props) => props.width || '0%'};
    overflow: hidden;
    color: ${(props) => props.theme.themeColor};
    z-index: 0;
  }
`;

export const RadioButtonBox = styled.div`
  max-width: 60rem;
  margin: 0 auto 0.6rem;
  background: ${(props) => props.theme.background};
`;

export const RadioButton = styled.div`
  padding: 0.5rem;
  text-align: center;
  background: #f9f9f9;
  border-radius: 0.3em;
`;

export const RadioButtonSpot = styled.div`
  display: inline-block;
  position: relative;
  margin: 0 2.4rem 0 2.4rem;
  width: 1rem;
  height: 1rem;
  background-color: ${(props) => (props.active ? '#d3d3d3' : 'transparent')};

  border-radius: 100%;
  border: 0.1rem solid;
  border-color: ${(props) => (props.active ? lightTheme.themeColor : '#333')};
  cursor: pointer;
  transition: ${transitionPreset1};

  & span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.5em;
    color: ${(props) => props.theme.darkGrey};
  } 
`;

export const RadioButtonTxt = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 0.5em;
`;

export const RadioButtonLabel = styled.p`
  font-size: 0.9em;
  padding: 0.4rem;
  font-weight: 800;
  margin: -0.5rem 0 -0.5rem;
`;

export const FormLabelGroupWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 2.5rem 0 2.5rem;
  label {
    margin: -2rem;
    display: inline-block;
    position: relative;
    font-size: 0.8rem;
  }
`;

export const BlankEntry = styled.div`
  margin: 1.2rem auto;
  input {
    font-family: inherit;
    height: 1.6rem;
    width: 39rem;
    padding: 0 0.5rem 0 0.5rem;
  }
`;

export const ReviewBodyBox = styled(BlankEntry)`
  textarea {
    &::placeholder {
    }
    font-family: inherit;
    width: 39rem;
    padding: 0.4rem 0.5rem 4rem 0.5rem;
    margin-bottom: 1rem;
  }
`;

export const StyledDropdown = styled.div`
  padding: 0.3rem;
  margin-left: 0.5rem;
  font-size: 0.8rem;
  border-bottom: 0.07rem solid ${(props) => props.theme.themeColor};
  background-color: ${(props) => props.theme.background};
  appearance: none;
  color: ${(props) => props.theme.darkGrey};
  cursor: pointer;
  z-index: 10;

  select {
    width: 6rem;
    border: none;
    outline: none;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.darkGrey};
    cursor: pointer;

  }

  &:hover {
    border-color: ${(props) => props.theme.darkGrey};
    transition: ${transitionPreset1};
  }

 &:focus {
  border-color: ${(props) => props.theme.themeColor};
  box-shadow: 0 0 5px rgba(0,120,212,0.3);
 }
`;
