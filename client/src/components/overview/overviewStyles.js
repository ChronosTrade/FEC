import styled from 'styled-components';

export const OverviewWrapper = styled.section`
h4 {
  font-weight: 400;
}
width: 1200px;
justify-content: center; // Center children horizontally
margin: 0 auto; // Center the component itself horizontally
select {
  width:100px;
}
`;

export const Container = styled.div`
  display: flex;
  .left {
    width: 800px;
    justify-content: left;
  }
  .left .mainImg{
    width: 45rem;
    height: 45rem;
    margin-left: 30px;
    object-fit: cover;
    overflow: hidden;
    cursor: pointer;
  }
  .left .photos {

  }
  .right {
    position: relative;
    top:-50px;
    flex-direction: column;
    width: 400px;
    margin-left:50px;
  }
  .right .styled {
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    gap: 0.3em;
  }

  .right .styleTitle {
    font-weight: normal;
    font-size: 20px;
  }

  .right .styled .img {
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

  .right .styled .imgSelect {
    object-fit: cover;
    overflow: hidden;
    width: 3.5rem;
    height: 3.5rem;
    padding: 0.2em;
    border: 0.2rem solid;
    border-color: red;
    cursor: pointer;
}

  .right .empty {
    &:before {
      background: aqua;
      color: black;
      height: 50px;
    }

    min-height: 50px;
    // float: left;
  }
`;

export const ThumbImage = styled.img`
  border: 0.07rem solid;
  border-color: #ccc;
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  overflow: hidden;
  flex: 1 0 20%;
  cursor: pointer;
`;
export const ThumbImageSelect = styled.img`

`;

// export const Left = styled.div`
// display: inherit;
// `;
// export const Right = styled.div`
// flex-direction: column !important;

// `;

export const DescWrapper = styled.div`
margin-top: 0.2em;
margin-bottom: 1em;
width: 800px;
`;
export const TitleStyle = styled.div`
font-weight: 500;
font-size: 30px;
margin-bottom: 0.2em;
margin-top; 0.2em;
`;

export const CategoryStyle = styled.div`
font-weight: lighter;
font-size: 14px;
margin-bottom: 0.2em;
margin-top; 0.2em;
`;

export const OverviewRatingsWrap = styled.div`
display: inline-block;
font-size: 1em;
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

export const DescriptionStyle = styled.div`
font-size: 1em;
margin-top" 0.2em
`;

export const Category = styled.div`

`;

export const ImageGalleryWrapper = styled.div`
display: flex;
`;

export const ExpandedImage = styled.img`
// width: 50rem;
// height: 50rem;
max-height: 90%;
object-fit: cover;
overflow: hidden;
cursor: zoom-in;
position: absolute;
`;

export const ExpandedModal = styled.div`
  // position: fixed;
  position: absolute;
  left: 50%;
  top: 50%;
  max-height: 90%;
  font-family: 'Nunito', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  transform: translate(-50%, -50%);
`;

export const DefaultImageWrapper = styled.div`
position: relative;

`;

export const MainImageArrow = styled.div`
width: 0;
height: 0;
border-style: solid;
border-width: 0 20px 20px 0;
border-color: transparent gold transparent transparent;
position: absolute; /* Remove the element from normal flow */
top: 0; right: 0;   /* Position the element at top-right corner of the wrapper */
`;

export const PhotosWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PhotoSelect = styled.img`
  width: 3rem;
  height: 3rem;
  padding: 0.2em;
  border: 0.2rem solid;
  border-color: red;
  object-fit: cover;
  overflow: hidden;
  cursor: pointer;
`;
export const Photo = styled.img`
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
`;

export const Modal = styled.div`
  // position: fixed;
  position: absolute;
  left: 50%;
  top: 50%;
  max-height: 90%;
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

export const ModalBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
`;

export const SelectSizeNote = styled.h4`
  position: absolute;
  top: 220px;
  font-weight: normal;
  font-size: 20px;
`;

export const SizeLabel = styled.h4`
  position: absolute;
  top: 220px;
  font-weight: normal;
  font-size: 20px;
`;

export const SelectDropDown = styled.div`
  position: absolute;
  top: 280px;
  left: 0;
  width: 200px;
`;

export const QuantityLabel = styled.h4`
  position: absolute;
  top: 320px;
  font-weight: normal;
  font-size: 20px;
`;

export const QuantityDropDown = styled.div`
  position: absolute;
  top: 380px;
  width: 200px;
`;

export const AddToCart = styled.button`
  position: absolute;
  top: 480px;
  width: 300px;
`;

export const PriceStyle = styled.div`
  position: absolute;
  top: 450px;
`;

export const SaleStyle = styled.div`
  position: absolute;
  top: 450px;
`;
