import React, { useState, useEffect } from 'react';

export default function Description({ currentProduct, totalRatings }) {
  // const { totalRatings, setTotalRatings } = useContext(AppContext);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [showShare, setShowShare] = useState('false');

  useEffect(() => {
    if (Object.keys(currentProduct).length) {
      console.log('CurrentProdcut', currentProduct);
      setCategory(currentProduct.category);
      setDescription(currentProduct.description);
      setTitle(currentProduct.name);
    }
  }, [currentProduct]);

  const clickHandler = () => {
    setShowShare(true);
  };

  return (
    <div>
      {/* {product.reviews} */}
      {title}
      {category}
      {description}
      <button
        type="button"
        onClick={clickHandler}
      >
        Share
      </button>
      {showShare ? <ShareView /> : null}
    </div>
  );
}

export function ShareView({ currentProduct, setShowShare }) {
  return (
    <div>
      {/* {product.reviews} */}
      <button
        type="button"
        onClick={clickHandler}
      >
        Share
      </button>
      {showShare ? <ShareView /> : null}
    </div>
  );
}
