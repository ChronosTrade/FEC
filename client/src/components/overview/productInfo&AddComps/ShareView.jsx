import React from 'react';

export default function ShareView({ setShowShare }) {
  const cancelHandler = () => {
    setShowShare(false);
  };
  return (
    <div>
      <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
      <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
      <a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest</a>
      <button
        type="button"
        onClick={cancelHandler}
        label="cancel"
      >
        Cancel
      </button>
      <button
        type="button"
        onClick={cancelHandler}
        placeholder="x"
        label="X"
      >
        X
      </button>
    </div>
  );
}
