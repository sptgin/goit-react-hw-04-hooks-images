import { useEffect } from 'react';
import { createPortal } from 'react-dom';
const modal = document.querySelector('#modal');

export default function Modal({ largeImageURL, onModalClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleEscKey);
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  });

  const handleOverlayclick = event => {
    if (event.target === event.currentTarget) {
      onModalClose();
    }
  };

  const handleEscKey = event => {
    if (event.code === 'Escape') {
      onModalClose();
    }
  };

  return createPortal(
    <div className="Overlay" onClick={handleOverlayclick}>
      <div className="Modal">
        <img src={largeImageURL} alt="" />
      </div>
    </div>,
    modal,
  );
}
