import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../AppContext';
import Add from './overview_components/Add';
import Description from './overview_components/Description';
import MainImage from './overview_components/MainImage';
import PhotoList from './overview_components/PhotoList';
import Price from './overview_components/Price';
import QuantityList from './overview_components/QuantityList';
import SizeList from './overview_components/SizeList';
import StylesList from './overview_components/StylesList';

const OverviewMain = function () {
  // const { totalRatings, setTotalRatings } = useContext(AppContext);
  const [selStyle, setSelStyle] = useState({}); // Need data from API and set default style.
  const [selQuantity, setSelQuantity] = useState('-');
  const [selSku, setSelSku] = useState({});
  const [styles, setSelStyles] = useState([]); // DELETE LATER
  const [totalStyleQuantity, setStyleQuantity] = useState(true);
  const { productID } = useContext(AppContext);

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
      />
      <SizeList
        selStyle={selStyle}
        totalStyleQuantity={totalStyleQuantity}
        setSelSku={setSelSku}
      />
      <QuantityList
        selQuantity={selQuantity}
        selSku={selSku}
        setSelQuantity={setSelQuantity}
      />
      <Price selStyle = {selStyle}/>
      <Add
        selSku={selSku}
        selQuantity={selQuantity}
      />
    </section>
  );
};
export default OverviewMain;