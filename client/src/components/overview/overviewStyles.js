import styled from 'styled-components';

export const OverviewWrapper = styled.section`
display: flex;
flex-direction: column;
max-width: 80rem;
margin: 0 auto 3rem;
`;

export const DescWrapper = styled.div`
display: flex;
flex-direction: column;
max-width: 60rem;
justify-content: center;
margin-bottom: 1em;

.title {
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 0.1em;
  margin-top; 0.2em;
}
.description {
  max-width: 50em;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
}
`;

export const ReviewsWrap = styled.div`
display: flex;
`;

export const SeeReviewsButton = styled.button`
  background: none;
  font-family: inherit;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  font-size: 0.8rem;
  border-width: 0.06rem;
  &:hover {
    text-decoration: none;
  }
`;

export const ShareWrap = styled.div`
display: flex;
gap: 45.3rem;
.share {
  justify-content: end;
  align-items: flex-end;
  cursor: pointer;
}
.category {
  font-weight: lighter;
  font-size: 14px;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
}
`;

export const Container = styled.div`
  display: flex;
  height: 800px;
`;

export const LeftColumn = styled.div`
 display: flex;
 position: relative;
 flex-direction: column;
 width: 4rem;
 margin-right: 1.5em;
`;

export const PhotosWrapper = styled.div`
  display: flex;
  flex-direction: column;

  .selected {
    width: 3rem;
    height: 3rem;
    padding: 0.2em;
    border: 0.2rem solid;
    border-color: red;
    object-fit: cover;
    overflow: hidden;
    cursor: pointer;
  }
  .unselected {
    width: 3rem;
    height: 3em;
    padding: 0.2em;
    border: 0.2rem solid;
    border-color: #f6f6f6;
    object-fit: cover;
    overflow: hidden;
    cursor: pointer;
    &:hover {
      border-color: grey;
      padding: 0.32rem;
      border: 0.1rem solid;
    }
  }
`;

export const DefaultImageWrapper = styled.div`
position: relative;
width: 50rem;
height: 50rem;
object-fit: cover;
cursor: pointer;
`;

export const LeftButton = styled.button`
position: absolute;
top: 50%;
transform: translate(0%, -50%);
cursor: pointer;
`;

export const RightButton = styled.button`
position: absolute;
top: 50%;
left: 100%;
transform: translate(-100%, -50%);
cursor: pointer;
`;

export const RightColumn = styled.div`
display: flex;
flex-direction: column;
position: relative;
top: -7%;
left: 4%;
max-width: 25rem;
`;

export const StylesBlock = styled.div`
display: flex;
flex-wrap: wrap;
gap: 0.2em;

.selectedStyle {
  margin-right: 5px;
  margin-left: 5px;
  object-fit: cover;
  overflow: hidden;
  width: 3.5rem;
  height: 3.5rem;
  padding: 0.2em;
  border: 0.2rem solid;
  border-color: red;
  cursor: pointer;
}
.unselectedStyle {
  margin-right: 5px;
  margin-left: 5px;
  width: 3.5rem;
  height: 3.5rem;
  padding: 0.2em;
  border: 0.2rem solid;
  border-color: #f6f6f6;
  object-fit: cover;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    border-color: grey;
    padding: 0.32rem;
    border: 0.1rem solid;
  }
}
`;

export const SeeReviews = styled.div`
display: inherit;
margin-left: 1em;
font-weight: 400;
font-size: 0.8em;
`;

export const StarWrap = styled.span`
  position: relative;
  color: red;
  .full {
    color: #fff;
  }
  .partial::after {
    content: '★';
    position: absolute;
    left: 0;
    overflow: hidden;
    width: ${(props) => props.width};
    color: red;
    z-index: 2;
  }
`;

export const Modal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  font-family: 'Nunito', sans-serif;
  background: #f6f6f6;
  width: 50rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  transform: translate(-50%, -50%);
`;

export const Wrapper = styled.div`
position: absolute;
left: 50%;
top: 50%;
font-family: 'Nunito', sans-serif;
background: #f6f6f6;
width: 900px;
height: 1000px;
display: flex;
justify-content: center;
align-items: center;
z-index: 3;
transform: translate(-50%, -50%);
`;

export const ExpandedModalWrapper = styled.div`
position: absolute;
`;

export const ExpandedImage = styled.img`
height: 1010px;
width: 900px;
cursor: zoom-in;
`;

export const MagnifyingGlass = styled.div`
display: ${(props) => (props.showmag ? '' : 'none')};
position: absolute;
cursor: pointer;
pointer-events: none;
height: 200px;
width: 200px;
opacity: 1;
border: 1px solid;
top: ${(props) => (props.y - 200 / 2)}px;
left: ${(props) => (props.x - 200 / 2)}px;
background-position-x: ${(props) => (-props.x * 2.5 + 200 / 2)}px;
background-position-y: ${(props) => (-props.y * 2.5 + 200 / 2)}px;
background-size: ${(900 * 2.5)}px ${(1010 * 2.5)}px;
background-repeat: no-repeat;
background-image: url('${(props) => (props.mainimg)}');
`;

export const LeftButtonExpand = styled.button`
position: absolute;
top: 50%;
left: -10%;
transform: translate(0%, -50%);
cursor: pointer;
`;

export const RightButtonExpand = styled.button`
position: absolute;
top: 50%;
left: 110%;
transform: translate(-100%, -50%);
cursor: pointer;
`;

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const SelectionContainer = styled.div`
  position: relative;
`;

export const SelectSizeNote = styled.h4`
  position: absolute;
  top: 0;
  font-weight: normal;
  font-size: 20px;
`;

export const SizeLabel = styled.h4`
  position: absolute;
  top: 0;
  font-weight: normal;
  font-size: 20px;
`;

export const SelectDropDown = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  width: 200px;
`;

export const QuantityLabel = styled.h4`
  position: absolute;
  top: 100px;
  font-weight: normal;
  font-size: 20px;
`;

export const QuantityDropDown = styled.div`
  position: absolute;
  top: 160px;
  width: 200px;
`;

export const AddToCart = styled.button`
  position: absolute;
  top: 260px;
  width: 300px;
  cursor: pointer;
`;

export const PriceStyle = styled.div`
  position: absolute;
  top: 225px;
`;

export const SaleStyle = styled.div`
  position: absolute;
  top: 225px;
`;
