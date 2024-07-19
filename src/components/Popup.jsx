import React from 'react';

const Popup = ({ title, address, morning, evening, Phone, button, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md shadow-md">
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p>{address}</p>
          <p>{Phone}</p>
          <p>{morning}</p>
          <p>{evening}</p>
        </div> 
        <button onClick={onClose} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">{button}</button>
      </div>
    </div>
  );
};

export default Popup;
