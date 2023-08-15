import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../AppContext';
import Add from './overview_components/Add';
import Description from './overview_components/Description';
import Photos from './overview_components/Photos';
import Price from './overview_components/Price';
import QuantityList from './overview_components/QuantityList';
import SizeList from './overview_components/SizeList';
import StylesList from './overview_components/StylesList';

const OverviewMain = function () {
  // const { totalRatings, setTotalRatings } = useContext(AppContext);
  const [selStyle, setSelStyle] = useState({}); // Need data from API and set default style.
  const [selQuantity, setSelQuantity] = useState('-');
  const [selSize, setSelSize] = useState('Select Size');
  const [selSku, setSelSku] = useState(null);
  const [skusArray, setSkus] = useState([]);
  const [skusObject, setOptions] = useState({});
  const [styles, setSelStyles] = useState([]); // DELETE LATER
  const [totalStyleQuantity, setStyleQuantity] = useState(true);
  const { productID, setProductID } = useContext(AppContext);

  useEffect(() => {
    const config = {
      params: {
        ID: productID,
      },
    };
    axios.get('/styles', config)
      .then((response) => {
        setSelStyles(response.data.results);
        setSelStyle(response.data.results[0]);
        setSkus(Object.keys(response.data.results[0].skus));
        setOptions(response.data.results[0].skus);
        const arr = Object.keys(response.data.results[0].skus);
        for (let i = 0; i < arr.length; i += 1) {
          if (arr[i].quantity > 0) {
            setStyleQuantity(true);
          }
        }
      })
      .catch(() => {
        console.log('Server Error');
      });
  }, [productID]);

  // const quantityHandler = function() {
  //   setSelQuantity(quantity);
  // }

  return (
    <section>
      {/* <Description selStyle = {selStyle}/> */}
      {/* <Photos selStyle = {selStyle}/> */}
      <StylesList
        selStyle={selStyle}
        styles={styles}
        setSelStyle={setSelStyle}
        setSelQuantity={setSelQuantity}
        setSelSize={setSelSize}
      />
      <SizeList
        selStyle={selStyle}
        setSelSku={setSelSku}
        selSize={selSize}
        skusArray={skusArray}
        skusObject={skusObject}
        setSelQuantity={setSelQuantity}
        setSelSize={setSelSize}
        totalStyleQuantity={totalStyleQuantity}
      />
      <QuantityList
        skusArray={skusArray}
        skusObject={skusObject}
        selQuantity={selQuantity}
        selSize={selSize}
        selSku={selSku}
        setSelQuantity={setSelQuantity}
      />
      {/* <Price selStyle = {selStyle}/> */}
      <Add
        selSku={selSku}
        selQuantity={selQuantity}
        productID={productID}
        setProductID={setProductID}
      />
    </section>
  );
};
export default OverviewMain;
