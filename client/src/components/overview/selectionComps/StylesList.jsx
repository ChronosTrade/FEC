import React, { useState, useEffect } from 'react';
import { StylesBlock } from '../overviewStyles';
import StylesListEntry from './StylesListEntry';

export default function StylesList({
  selStyle,
  styles,
  setSizeNotice,
  setSelStyle
}) {
  const [title, setTitle] = useState('');
  useEffect(() => {
    if (styles.length > 0) {
      setTitle(`Color: ${styles[0].name}`);
    }
  }, [styles]);
  return (
    <div>
      <h3 className="styleTitle">{title}</h3>
      <div className="styled" role="presentation" />
      <StylesBlock>
        {styles.map(
          (style) => (
            <StylesListEntry
              style={style}
              key={style.style_id}
              selStyle={selStyle}
              setSelStyle={setSelStyle}
              setSizeNotice={setSizeNotice}
              setTitle={setTitle}
            />
          ),
        )}
      </StylesBlock>
    </div>
  );
}
