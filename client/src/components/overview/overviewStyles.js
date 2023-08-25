import styled from 'styled-components';
import { lightTheme } from '../globalStyling';

// export const lightTheme = {
//   darkGrey: '#666',
//   background: '#f3f3f3',
//   themeColor: '#234E70',
//   secColor: '#FBF8BE',
//   basicFontColor: '#333',
//   secFontColor: '#666',
//   contrastFontColor: '#f3f3f3',
//   footer: '#eee',
// };${(props) => props.theme.themeColor};

export const OverviewWrapper = styled.section`
display: flex;
flex-direction: column;
width: 1100px;
padding-right: ${(props) => ((props.modalopen === 'true') ? '15px' : '0px')};
max-width: 80rem;
margin: 0 auto 3rem;
`;

export const DescWrapper = styled.div`
display: flex;
flex-direction:column;
justify-content: left;
margin-bottom: 0.5em;
width: 747px;
.info {
}
.title {
  font-weight: 500;
  font-size: 30px;
  margin-bottom: 0.1em;
  margin-top; 0.2em;
}
.description {
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
}
`;

export const ReviewsWrap = styled.div`
display: flex;
color: ${(props) => props.theme.basicFontColor};
  .starsRatings{
    font-weight: 600;
    margin-inline-start: 0.3em;
    margin-block-start: 0.12em;
    margin-block-end: 0;
  }
`;

export const SeeReviewsButton = styled.button`
  background: none;
  font-family: inherit;
  border: none;
  cursor: pointer;
  text-decoration: underline;
  font-size: 1rem;
  color: ${(props) => props.theme.basicFontColor};
  border-width: 0.06rem;
  &:hover {
    text-decoration: none;
  }
`;

export const ShareWrap = styled.div`
display: flex;
justify-content: space-between;

.share {
  justify-content: end;
  color: ${(props) => props.theme.basicFontColor};
  align-items: flex-end;
  cursor: pointer;
  background: none;
  border: none;
  opacity; 0.5;
}
.category {
  font-weight: lighter;
  font-size: 14px;
  margin-block-start: 0.5em;
  margin-block-end: 0.5em;
}
`;
export const SeeReviews = styled.div`
display: inherit;
margin-left: 1em;
font-weight: 400;
font-size: 0.8em;
`;

export const StarWrap = styled.span`
  display: inline-block;
  position: relative;
  font-size: 1rem;
  color: ${(props) => props.theme.themeColor};
  &.full {
    color: ${(props) => props.theme.themeColor};
  }
  &.partial::after {
    content: '★';
    position: absolute;
    color: ${(props) => props.theme.themeColor};
    left: 0;
    top: 0;
    width: ${(props) => props.width || '0%'};
    overflow: hidden;
    z-index: 0;
  }
`;

export const Modal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  font-family: 'Nunito', sans-serif;
  background: ${(props) => props.theme.background};
  width: 35rem;
  height: 17rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1005;
  transform: translate(-50%, -50%);
  .border {
    border-top: 0.07rem solid #ccc;
    width: 100%;
  }
  .innerText {
    top: 20px;
    margin-block-start: 1.5em;
    margin-block-end: 0.05em;
    margin-left: 1rem;
    width: 100%;
  }
`;

export const Close = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin-block-end: 0.8em;
  .headText {
    margin-block-start: 0.6em;
    margin-block-end: 0;
    font-weight: normal;
    font-size: 24px;
  }
  .closeCorner {
    display: flex;
    flex-direction: column;
    margin-block-start: 0.5rem;
  }
  .closeCornerText {
    font-size: 12px;
    font-weight: 400;
    padding-left: 0.25rem;
    margin-block-start: 0em;
    margin-block-end: 0;
  }
  .close {
    background: none;
    border:none;
    color: ${(props) => props.theme.basicFontColor};
    cursor: pointer;
  }
`;

export const ModalCancel = styled.button`
  position: relative;
  top: 1.2rem;
  width: 250px;
  height: 50px;
  color: ${(props) => props.theme.basicFontColor};
  background-color: ${(props) => props.theme.background};
  border-color: ${(props) => props.theme.basicFontColor};
  border-width: thin;
  cursor: pointer;
  font-size: 14px;
`;

export const Container = styled.div`
  display: flex;
`;

export const ScrollContainer = styled.div`
height: 468px;
overflow-x: hidden;
overflow-y: auto;
`;
export const LeftColumn = styled.div`
 width: 82px;
 margin-right: 0.5em;

`;

export const PhotosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  overflow-y: auto;
  scrollbar-color: red;

  .selected {
    width: 48px;
    height: 48px;
    padding: 3px;
    border: 2.5px solid ${(props) => props.theme.themeColor};
    object-fit: cover;
    overflow: hidden;
    cursor: pointer;
  }

  .unselected {
    padding: 3px;
    width: 48px;
    height: 48px;
    border: 2.5px solid ${(props) => props.theme.background};
    object-fit: cover;
    overflow: hidden;
    cursor: pointer;
    &:hover{
      padding: 3px;
      border: 2.5px solid;
      border-color: ${(props) => props.theme.FontColor};
    }
  }
`;

export const DefaultImageWrapper = styled.div`
position: relative;
object-fit: cover;
cursor: pointer;
width: '650px',
height: '770px',
`;

export const LeftButton = styled.button`
position: absolute;
top: 50%;
left: 1%;
transform: translate(0%, -50%);
cursor: pointer;
transition:all 1s;
font-size: 1em;
color: ${lightTheme.themeColor};
&:hover{
  color:${lightTheme.secColor};
  background: rgba(0, 0, 0, 0.5);
}
`;

export const RightButton = styled.button`
position: absolute;
top: 50%;
left: 99%;
font-size:1em;
transform: translate(-100%, -50%);
cursor: pointer;
color: ${lightTheme.themeColor};
transition:all 1s;
&:hover{
  color:${lightTheme.secColor};
  background: rgba(0, 0, 0, 0.5);
}
`;

export const RightColumn = styled.div`
display: flex;
flex-direction: column;
position: relative;
top: -55px;
left: 4%;
max-width: 21rem;
`;

export const StylesBlock = styled.div`
display: flex;
flex-wrap: wrap;
gap: 4px;

.selectedStyle {
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.themeColor};
  object-fit: cover;
  overflow: hidden;
  width: 56px;
  height: 56px;
  padding: 3px;
}

.unselectedStyle {
  border-radius: 50%;
  padding: 3px;
  border: 2px solid ${(props) => props.theme.background};
  width: 56px;
  height: 56px;
  object-fit: cover;
  overflow: hidden;
  cursor: pointer;
  &:hover{
    padding: 3px;
    border: 2px solid ${(props) => props.theme.FontColor};
  }
}
`;

export const Icons = styled.div`
  margin-top: 1em;
  margin-bottom: 0.5em;
  display: flex;
  gap: 1.6rem;
`;

export const IconsWrap = styled.span`
  position: absolute;
  justify-content: center;
  display: flex;
  width: 100%;
  gap: 1.6rem;
  top: 5px;
  z-index: 5;
  .selectedIcon{
    opacity: 0.7;
    color: black;
  }
  .unselectedIcon{
    opacity: 0.3;
  }
`;

export const Wrapper = styled.div`
position: absolute;
left: 50%;
top: 50%;
font-family: 'Nunito', sans-serif;
background: ${(props) => props.theme.background};
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
background: none;
border: none;
top: 50%;
left: -5%;
transform: translate(0%, -50%);
cursor: pointer;
color: ${lightTheme.secColor};
&:hover{
  color: #08a4a7;
  transition:all 0.7s;
}
z-index: 4;
`;

export const RightButtonExpand = styled.button`
position: absolute;
background: none;
border: none;
top: 50%;
left: 105%;
transform: translate(-100%, -50%);
cursor: pointer;
color: ${lightTheme.secColor};
z-index: 4;
&:hover{
  color: #08a4a7;
  transition:all 0.7s;
}
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
  top: 280px;
  width: 300px;
  height: 50px;
  border: none;
  color: ${(props) => props.theme.contrastFontColor};
  font-size: 16px;
  font-weight: 600;
  background-color: ${(props) => props.theme.themeColor};
  cursor: pointer;
`;

export const PriceWrapper = styled.div`
display: flex;
.price{
  position: absolute;
  top: 235px;
  font-size: 26px;
  font-weight: 600;
  margin-block-start: 0;
  margin-block-end: 0;
}
.priceSale{
  position: absolute;
  color: ${(props) => props.theme.themeColor};
  text-decoration: line-through;
  top: 235px;
  font-size: 26px;
  font-weight: 600;
  margin-block-start: 0;
  margin-block-end: 0;
}
.sale{
  position: absolute;
  top: 235px;
  left: 125px;
  font-size: 26px;
  font-weight: 600;
  margin-block-start: 0;
  margin-block-end: 0;
}`;
