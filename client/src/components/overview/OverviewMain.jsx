import React, {
  useState, useContext, useEffect, useRef,
} from 'react';
import AppContext from '../AppContext';
import {
  OverviewWrapper, Container, SelectionContainer, RightColumn, ModalBackground, Wrapper,
} from './overviewStyles';
import Add from './productInfoAddComps/Add';
import Description from './productInfoAddComps/Description';
import ImageGalleryMain from './imageGalleryComps/ImageGalleryMain';
import Price from './productInfoAddComps/Price';
import QuantityList from './selectionComps/QuantityList';
import SizeList from './selectionComps/SizeList';
import StylesList from './selectionComps/StylesList';
import Magnifier from './imageGalleryComps/Magnifier';

export default function OverviewMain({ styles }) {
  const [selStyle, setSelStyle] = useState({});
  const [selQuantity, setSelQuantity] = useState('-');
  const [selSku, setSelSku] = useState(null);
  const [render1, setRender1] = useState(false);
  const [sizeNotice, setSizeNotice] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [index, setIndex] = useState(0);
  const [mainImg, setMainImg] = useState('');
  const [maxIndex, setMaxIndex] = useState(0);
  const [showExp, setShowExp] = useState(false);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);
  const [modalOpen, setModalOpen] = useState(0);
  const { currentProduct, productID } = useContext(AppContext);
  const ref = useRef(null);

  useEffect(() => {
    if (styles) {
      setSelStyle(styles[0]);
      setRender1(true);
    }
  }, [styles]);

  useEffect(() => {
    if (showExp === false) {
      document.body.style.overflow = 'unset';
    }
  }, [showExp]);

  const closeModal = () => {
    setShowExp(false);
    setModalOpen('false');
    document.body.style.overflow = 'hidden';
  };

  return (
    <div>
      <OverviewWrapper modalopen={modalOpen}>
        {render1
          ? (
            <>
              <Description
                currentProduct={currentProduct}
                setModalOpen={setModalOpen}
              />
              <Container>
                <ImageGalleryMain
                  selStyle={selStyle}
                  productID={productID}
                  index={index}
                  mainImg={mainImg}
                  maxIndex={maxIndex}
                  showLeft={showLeft}
                  showRight={showRight}
                  showExp={showExp}
                  setMaxIndex={setMaxIndex}
                  setShowLeft={setShowLeft}
                  setShowRight={setShowRight}
                  setMainImg={setMainImg}
                  setIndex={setIndex}
                  setShowExp={setShowExp}
                  setModalOpen={setModalOpen}
                />
                <RightColumn>
                  <StylesList
                    selStyle={selStyle}
                    styles={styles}
                    setSizeNotice={setSizeNotice}
                    setSelStyle={setSelStyle}
                  />
                  <SelectionContainer>
                    <SizeList
                      selStyle={selStyle}
                      sizeNotice={sizeNotice}
                      setShowButton={setShowButton}
                      setSizeNotice={setSizeNotice}
                      setSelSku={setSelSku}
                      ref={ref}
                    />
                    <QuantityList
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
                  </SelectionContainer>
                </RightColumn>
              </Container>
            </>
          ) : null }
        {showExp ? (
          <>
            <Wrapper>
              <Magnifier
                index={index}
                mainImg={mainImg}
                maxIndex={maxIndex}
                showLeft={showLeft}
                showRight={showRight}
                setIndex={setIndex}
                setShowExp={setShowExp}
              />
            </Wrapper>
            <ModalBackground onClick={closeModal} />
          </>
        ) : null}
      </OverviewWrapper>
    </div>
  );
}
