import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md">
      <input
        type="text"
        placeholder="Search products..."
        className="border p-2 rounded w-1/2"
      />
      <button>hii</button>
      <button className="bg-red-600 text-white px-4 py-2 rounded">Logout</button>
    </div>
  );
};

export default Header;
