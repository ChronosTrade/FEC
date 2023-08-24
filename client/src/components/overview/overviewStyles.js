import styled from 'styled-components';

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
width: ${(props) => ((props.scrollshow === 'true') ? '753px' : '741px')};
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

export const Container = styled.div`
  display: flex;
`;

export const ScrollContainer = styled.div`
height: 465px;
overflow-x: hidden;
overflow-y: auto;
`;
export const LeftColumn = styled.div`
 margin-right: 1.5em;
`;

export const PhotosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  .selected {
    width: 3rem;
    height: 3rem;
    padding: 0.2em;
    border: 0.2rem solid;
    border-color: #08a4a7;
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
background: #f6f6f6;
border: none;
transition:all 1s;
color: #08a4a7;
&:after,&:before{
  content:" ";
  width:10px;
  height:10px;
  position:absolute;
  border :0px solid #08a4a7;
  transition:all 1s;
  }
&:after{
  top:-1px;
  left:-1px;
  border-top:2px solid #08a4a7;
  border-left:2px solid #08a4a7;
}
&:before{
  bottom:-1px;
  right:-1px;
  border-bottom:2px solid #08a4a7;
  border-right:2px solid #08a4a7;
}
&:hover{
  border-top-right-radius:0px;
border-bottom-left-radius:0px;
  &:before,&:after{
    width:100%;
    height:100%;
}
`;

export const RightButton = styled.button`
position: absolute;
top: 50%;
left: 99%;
transform: translate(-100%, -50%);
cursor: pointer;
background: none;
border: none;
color: rgba(0, 0, 0, 0.5);
background: #f6f6f6;
transition:all 1s;
&:after,&:before{
  content:" ";
  width:10px;
  height:10px;
  position:absolute;
  border :0px solid rgba(0, 0, 0, 0.5);
  transition:all 0.6s;
  }
&:after{
  bottom:-1px;
  left:-1px;
  border-bottom:2px solid rgba(0, 0, 0, 0.5);
  border-left:2px solid rgba(0, 0, 0, 0.5);
}
&:before{
  top:-1px;
  right:-1px;
  border-top:2px solid rgba(0, 0, 0, 0.5);
  border-right:2px solid rgba(0, 0, 0, 0.5);
}
&:hover{
  border-top-right-radius:0px;
  border-bottom-right-radius:0px;
  border: none;
  color:#00FFFF;
  background: rgba(0, 0, 0, 0.5);
  &:before,&:after{
    width:95%;
    height:95%;
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

.pseudoSelect{
  width: 64px;
  height: 64px;
  border: 0.2rem solid;
  border-color: #08a4a7;
  cursor: pointer;
}

.pseudo{
  width: 64px;
  height: 64px;
  cursor: pointer;
  border: 0.2rem solid;
  border-color: #f6f6f6;
  &:hover{
    margin: 0.12rem;
    border: 0.1rem solid;
    border-color: black;
  }
}

.selectedStyle {
  margin-left: 3px;
  margin-right: 3px;
  margin-bottom: 3px;
  margin-top: 3px;
  border-color: grey;
  border: 0.01rem solid;
  object-fit: cover;
  overflow: hidden;
  width: 56px;
  height: 56px;
}
.unselectedStyle {
  margin-left: 3px;
  margin-right: 3px;
  margin-bottom: 3px;
  margin-top: 3px;
  width: 56px;
  height: 56px;
  object-fit: cover;
  overflow: hidden;
  cursor: pointer;
  border: 0.01rem solid grey;
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
  color: #08a4a7;
  &.full {
    color: #08a4a7;
  }
  &.partial::after {
    content: '★';
    position: absolute;
    color: #08a4a7;
    left: 0;
    top: 0;
    width: ${(props) => props.width || '0%'};
    overflow: hidden;
    color: #08a4a7;
    z-index: 0;
  }
`;

export const Modal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  font-family: 'Nunito', sans-serif;
  background: #f6f6f6;
  width: 35rem;
  height: 17rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 3;
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
    padding-left: 0.2rem;
    margin-block-start: 0em;
    margin-block-end: 0;
  }
  .close {
    background: none;
    border:none;
    cursor: pointer;
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

export const ModalCancel = styled.button`
  position: relative;
  top: 1.2rem;
  width: 250px;
  height: 50px;
  background-color: #f6f6f6;
  border-color: black;
  border-width: thin;
  cursor: pointer;
  font-size: 14px;
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
background: none;
border: none;
top: 50%;
left: -5%;
transform: translate(0%, -50%);
cursor: pointer;
color: #00FFFF;
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
color: #00FFFF;
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
  color: black;
  font-size: 16px;
  font-weight: 600;
  background-color: #00FFFF;
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
  color: #08a4a7;
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
}
`;