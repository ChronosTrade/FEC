import React, {
  useState, useEffect, useContext, useRef,
} from 'react';
import {
  ListWrapper, ListCarousel, CardContainer, LeftButton, RightButton,
} from './styles';
import Card from '../ProductCard/Card';
import AddToOutfit from '../ProductCard/AddToOutfit';
import AppContext from '../../AppContext';

function Outfit() {
  const [outfit, setOutfit] = useState([]);
  const [scrollValue, setScrollValue] = useState(0);
  const { currentProduct, setCurrentProduct } = useContext(AppContext);
  const [maxWidth, setMaxWidth] = useState(0);
  const cardWidth = 220;
  const divRef = useRef(null);

  const handleArrowClick = (direction) => {
    if (direction === 'right') {
      setScrollValue(divRef.current.scrollLeft += (cardWidth));
    } else {
      setScrollValue(divRef.current.scrollLeft -= (cardWidth));
    }
  };

  const addProduct = () => {
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
    if (outfit.length > 3) {
      setMaxWidth((outfit.length - 3) * 220 + (220 - 2));
    } else {
      setMaxWidth((0));
    }
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
      {scrollValue < maxWidth && <RightButton onClick={() => { handleArrowClick('right'); }}>&#10095;</RightButton>}
    </ListWrapper>
  );
}

export default Outfit;
