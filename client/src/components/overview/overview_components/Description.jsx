import React, { useState, useEffect } from 'react';

export default function Description({
  selStyle,
}) {
  useEffect(() => {
    console.log(selStyle);
  }, [selStyle])
}