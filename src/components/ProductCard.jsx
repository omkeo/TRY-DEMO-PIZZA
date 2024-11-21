import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border bg-white rounded-lg p-4 m-2 text-center"
      onClick={() => handleCategoryClick(product.categoryName)}
    >
      <img src={product.img} alt={product.categoryName} className="h-32 w-full object-cover rounded-t-lg" />
      <p className=" mt-2">{product.categoryName}</p>
      <h3 className="text-gray-600 font-bold text-lg">RS {product.price}</h3>
    </div>
  );
};

export default ProductCard;
