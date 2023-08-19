import React, {useState, useEffect, useContext} from 'react';
import { ListWrapper, ListCarousel, CardContainer, RightButton, ListTitle } from './styles';
import Card from '../ProductCard/Card';
import AddToOutfit from '../ProductCard/AddToOutfit';
import AppContext from '../../AppContext';

function Outfit() {
  const [outfit, setOutfit] = useState([]);
  const { currentProduct, setCurrentProduct } = useContext(AppContext);

  const addProduct = () => {
    setOutfit([...outfit, currentProduct]);
  };

  const removeProduct = () => {
    setOutfit(
      outfit.filter((item) => item.id !== currentProduct.id),
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
      <ListTitle>Your Outfit</ListTitle>
      <ListCarousel>
        <CardContainer>
          <AddToOutfit add={addProduct} outfit={outfit} />
          {outfit.length > 0 && outfit.map((product, i) => <Card key={i} product={product} type="outfit" remove={removeProduct} />)}
        </CardContainer>
      </ListCarousel>
    </ListWrapper>
  );
}

export default Outfit;
