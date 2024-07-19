import React from 'react';

const Header = ({ firstName, handleLogout }) => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md w-full max-w-2xl">
      <h1 className="text-xl font-bold">Welcome, {firstName}</h1>
      <button onClick={handleLogout} className="px-4 py-2 bg-red-500 text-white rounded-md">Logout</button>
    </header>
  );
};

export default Header;
