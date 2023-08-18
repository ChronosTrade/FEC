import React, {
  useState, useContext, useEffect, useRef,
} from 'react';
import axios from 'axios';
import AppContext from '../AppContext';
// import UserContext from '../UserContext';
import Add from './overview_components/Add';
import Description from './overview_components/Description';
import ImageGalleryMain from './overview_components/ImageGalleryMain';
import Price from './overview_components/Price';
import QuantityList from './overview_components/QuantityList';
import SizeList from './overview_components/SizeList';
import StylesList from './overview_components/StylesList';

export default function OverviewMain() {
  const [selStyle, setSelStyle] = useState({});
  const [selQuantity, setSelQuantity] = useState('-');
  const [selSku, setSelSku] = useState(null);
  const [styles, setSelStyles] = useState([]);
  const [sizeNotice, setSizeNotice] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const {
    productID,
    totalRatings,
    currentProduct,
  } = useContext(AppContext);
  const ref = useRef(null);

  useEffect(() => {
    const config = {
      params: {
        ID: productID,
      },
    };
    axios.get('/styles', config)
      .then((response) => {
        if (response.data.results.length > 0) {
          setSelStyles(response.data.results);
          setSelStyle(response.data.results[0]);
          console.log(response.data.results[0]);
        }
      })
      .catch(() => {
      });
  }, [productID]);

  return (
    <section>
      <Description
        productID={productID}
        currentProduct={currentProduct}
        totalRatings={totalRatings}
      />
      <ImageGalleryMain
        selStyle={selStyle}
        productID={productID}
      />
      <StylesList
        selStyle={selStyle}
        styles={styles}
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
      <Price selStyle={selStyle} />
      <Add
        selSku={selSku}
        selQuantity={selQuantity}
        showButton={showButton}
        setSizeNotice={setSizeNotice}
        ref={ref}
      />
    </section>
  );
}
