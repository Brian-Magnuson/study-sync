import React from 'react';

type PopupProps = {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
};

const Popup: React.FC<PopupProps> = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="popup">
      <div className="popup__content">
        <p>{message}</p>
        <div className="popup__buttons">
          <button onClick={onConfirm}>Confirm</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
