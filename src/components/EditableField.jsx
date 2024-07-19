import React from 'react';

const EditableField = ({ label, name, value, handleChange, type, children }) => {
  return (
    <div className="mb-4 w-full max-w-md">
      <label className="block text-sm font-medium">{label}:</label>
     {type === "select" ? (
      <select
        name={name}
        value={value}
        onChange={handleChange}
        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
      >
        {children}
      </select>
     ): (
      <input
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      className="mt-1 p-2 border border-gray-300 rounded-md w-full"
      />
     ) }
    </div>
  );
};

export default EditableField;
