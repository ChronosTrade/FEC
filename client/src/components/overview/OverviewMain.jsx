import React, { useState, useContext, useEffect, useRef } from 'react';
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
import { GlobalStyles } from '../globalStyling';

const OverviewMain = function () {
  // const { totalRatings, setTotalRatings } = useContext(AppContext);'
  const [selStyle, setSelStyle] = useState({}); // Need data from API and set default style.
  const [selQuantity, setSelQuantity] = useState('-');
  const [selSku, setSelSku] = useState(null);
  const [styles, setSelStyles] = useState([]); // DELETE LATER
  const [sizeNotice, setSizeNotice] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const { productID } = useContext(AppContext);
  const ref = useRef(null);

  useEffect(() => {
    const config = {
      params: {
        ID: productID,
      },
    };
    axios.get('/styles', config)
      .then((response) => {
        if(response.data.results.length > 0) {
          setSelStyles(response.data.results);
          setSelStyle(response.data.results[0]);
          const arr = Object.keys(response.data.results[0].skus);
        }
        // console.log('This is the data from the API', response.data);
      })
      .catch(() => {
        console.log('Server Error');
      });
  }, [productID]);

  return (
    <section>
      {/* <Description selStyle = {selStyle}/> */}
      {/* <Photos selStyle = {selStyle}/> */}
      <StylesList
        selStyle={selStyle}
        styles={styles}
        productID={productID}
        setSizeNotice={setSizeNotice}
        setSelStyle={setSelStyle}
      />
      <SizeList
        selStyle={selStyle}
        sizeNotice={sizeNotice}
        setShowButton={setShowButton}
        setSizeNotice={setSizeNotice}
        setSelSku={setSelSku}
        ref={ref}
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
        showButton={showButton}
        setSizeNotice={setSizeNotice}
        ref={ref}
      />
    </section>
  );
};
export default OverviewMain;