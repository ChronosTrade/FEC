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
    console.log(currentProduct);
    // if (Object.keys(currentProduct) > 0) {
    if (currentProduct.category === 'Jackets') {
      setIcon(faShirt);
    } else {
      setIcon(faBox);
    }
    // }
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
    console.log(e.target);
    if (e.target.getAttribute('i')) {
      setIndex(Number(e.target.getAttribute('i')));
    }
    console.log(index);
  };
  return (
    <div>
      {(index === i)
        ? (
          <i className="selectedIcon"
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
            tabIndex="0"
            onClick={clickHandler}
            onKeyDown={clickHandler}
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
