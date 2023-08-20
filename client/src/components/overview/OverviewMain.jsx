import React, {
  useState, useContext, useEffect, useRef, forwardRef,
} from 'react';
import axios from 'axios';
import AppContext from '../AppContext';
import Add from './productInfo&AddComps/Add';
import Description from './productInfo&AddComps/Description';
import ImageGalleryMain from './imageGalleryComps/ImageGalleryMain';
import Price from './productInfo&AddComps/Price';
import QuantityList from './selectionComps/QuantityList';
import SizeList from './selectionComps/SizeList';
import StylesList from './selectionComps/StylesList';

const OverviewMain = forwardRef((_props, refRatings) => {
  const [selStyle, setSelStyle] = useState({});
  const [selQuantity, setSelQuantity] = useState('-');
  const [selSku, setSelSku] = useState(null);
  const [styles, setSelStyles] = useState([]);
  const [sizeNotice, setSizeNotice] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const { currentProduct, productID } = useContext(AppContext);
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
          // console.log(averageRatings);
          // console.log(totalRatings);
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
        refRatings={refRatings}
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
});

export default OverviewMain;
