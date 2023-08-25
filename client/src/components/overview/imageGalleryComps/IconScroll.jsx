import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShirt, faShoePrints, faBox } from '@fortawesome/free-solid-svg-icons';
import { IconsWrap } from '../overviewStyles';
import AppContext from '../../AppContext';

export default function IconScroll({
  index,
  maxIndex,
  setIndex,
}) {
  const { currentProduct } = useContext(AppContext);
  const [icon, setIcon] = useState(faBox);

  useEffect(() => {
    if (currentProduct.category === 'Jackets') {
      setIcon(faShirt);
    } else if (currentProduct.category === 'Dress Shoes' || currentProduct.category === 'Kicks') {
      setIcon(faShoePrints);
    } else {
      setIcon(faBox);
    }
  }, [currentProduct]);

  return (
    <IconsWrap>
      {Array.from({ length: maxIndex + 1 }).map(
        (_, i) => (
          <Icons
            icon={icon}
            i={i}
            key={i}
            index={index}
            setIndex={setIndex}
          />
        ),
      )}
    </IconsWrap>
  );
}

function Icons({
  index,
  i,
  setIndex,
  icon
}) {
  const clickHandler = (e) => {
    if (e.target.getAttribute('i')) {
      setIndex(Number(e.target.getAttribute('i')));
    }
  };

  const keyHandler = (event) => {
    if (event.charCode === 13 || event.charCode === 32) {
      if (event.target.getAttribute('i')) {
        setIndex(Number(event.target.getAttribute('i')));
      }
    }
  };

  return (
    <div>
      {(index === i)
        ? (
          <i
            className="selectedIcon"
            i={i}
          >
            <FontAwesomeIcon
              icon={icon}
              size="2x"
            />
          </i>
        ) : (
          <div
            className="unselectedIcon"
            i={i}
            role="button"
            tabIndex={0}
            onClick={clickHandler}
            onKeyPress={keyHandler}
          >
            <FontAwesomeIcon
              icon={icon}
              size="2x"
            />
          </div>
        )}
    </div>
  );
}
