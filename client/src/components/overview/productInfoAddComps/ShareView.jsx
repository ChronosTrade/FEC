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
        data-testid="closeShare"
        type="button"
        onClick={cancelHandler}
        label="cancel"
      >
        Cancel
      </button>
      <button
        data-testid="cancelShare"
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
