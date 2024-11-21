import React, { useState } from 'react';
import logo from '../assets/logo.jpg'
import { motion } from 'framer-motion'


const PizzaCard = ({ pizza, onQuantityChange, removePizza }) => {
  // const [cartPizza, setCartPizza] = useState(pizza)
  // console.log(cartPizza)
  const { id, img, categoryName, price, quantity } = pizza;
  const incrementQuantity = () => {
    onQuantityChange(id, quantity + 1);
    console.log(quantity)
  };


  const decrementQuantity = () => {
    if (quantity > 1) {
      onQuantityChange(id, quantity - 1);
    } else {
      removePizza(id)
    }
  };
  // let newPrice = price * quantity;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="relative w-56 h-62 rounded overflow-hidden shadow-lg bg-white"
    >
      <img className="w-full h-44" src={img} alt='pizza' />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{categoryName}</div>
        <p className="text-gray-700 text-base">Price: Rs {price}</p>
        <div className="flex items-center mt-4">
          <button
            onClick={decrementQuantity}
            className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:outline-none"
          >
            -
          </button>
          <span className="mx-4">{quantity}</span>
          <button
            onClick={incrementQuantity}
            className="bg-green-500 text-white px-2 py-1 rounded-md hover:bg-green-600 focus:outline-none"
          >
            +
          </button>
        </div>
      </div>
    </motion.div >

  );
};

export default PizzaCard;
