import React, {
  useState, useEffect, useContext, useRef,
} from 'react';
import {
  ListWrapper, ListCarousel, CardContainer, LeftButton, RightButton, ListTitle,
} from './styles';
import Card from '../ProductCard/Card';
import AddToOutfit from '../ProductCard/AddToOutfit';
import AppContext from '../../AppContext';

function Outfit() {
  const [outfit, setOutfit] = useState([]);
  const { currentProduct, setCurrentProduct } = useContext(AppContext);

  const cardWidth = 220;
  // const gap = 20;
  const divRef = useRef(null);
  const [scrollValue, setScrollValue] = useState(0);
  const handleArrowClick = (direction) => {
    if (direction === 'right') {
      setScrollValue(divRef.current.scrollLeft += (cardWidth));
    } else {
      setScrollValue(divRef.current.scrollLeft -= (cardWidth));
    }
  };

  const addProduct = () => {
    console.log(currentProduct);
    setOutfit([...outfit, currentProduct]);
  };

  const removeProduct = (id) => {
    setOutfit(
      outfit.filter((item) => item.id !== id),
    );
  };

  useEffect(() => {
    const result = JSON.parse(localStorage.getItem('outfit'));
    if (result) {
      setOutfit(result);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('outfit', JSON.stringify(outfit));
  }, [outfit]);

  return (
    <ListWrapper>
      {/* <ListTitle>Your Outfit</ListTitle> */}
      {scrollValue > 0 && <LeftButton onClick={() => { handleArrowClick('left'); }}>&#10094;</LeftButton>}
      <ListCarousel ref={divRef}>
        <CardContainer>
          <AddToOutfit add={addProduct} outfit={outfit} />
          {outfit.length > 0 && outfit.map((product) => <Card key={product.id} product={product} type="outfit" remove={removeProduct} />)}
        </CardContainer>
      </ListCarousel>
      {scrollValue < 1000 && <RightButton onClick={() => { handleArrowClick('right'); }}>&#10095;</RightButton>}
    </ListWrapper>
  );
}

export default Outfit;
