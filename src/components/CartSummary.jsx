// src/CartSummary.js
import React, { useEffect, useState } from 'react';
import cart from '../assets/empty_cart.png'
import PizzaBilling from './PizzaBilling';
import { IoIosRemoveCircleOutline } from "react-icons/io";


const CartSummary = ({ pizza }) => {
  console.log(pizza)
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems)
  useEffect(() => {
    setCartItems(pizza)
  }, [pizza])

  // console.log(cartItems)

  const decrementQuantity = (id) => {
    setCartItems(cartItems?.filter(item => item.id !== id));
    // removePizza(id)
  };
  const toggleItem = (id) => {
    setCartItems(cartItems?.map(item => item.id === id ? { ...item, expanded: !item.expanded } : item));
  };

  const handleQuantityChange = (id, quantity) => {
    setCartItems(cartItems?.map(item => item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item));
  };

  const calculateSubtotal = () => {
    return cartItems?.reduce((sum, item) => sum + (item.price * item.quantity * (1 - item.discount / 100)), 0).toFixed(2);
  };

  const calculateTax = (subtotal) => {
    return (subtotal * 0.225).toFixed(2);
  };

  const subtotal = calculateSubtotal();
  const tax = calculateTax(subtotal);
  const total = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);

  return (
    <div className="p-4 max-w-md mx-auto h-[89vh]  ">
      <div className='h-[60vh] overflow-y-scroll  rounded-xl shadow-md space-y-4 p-4'>
        {cartItems.length > 0 ? (cartItems?.map((item, i) => (
          <div key={i} className="border-b py-2">
            <div className="flex items-center justify-between  ">
              <div className="flex items-center">
                <button
                  className={`transform transition-transform ${item.expanded ? 'rotate-90' : 'rotate-0'}`}
                  onClick={() => toggleItem(item.id)}
                >
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
                <p className="font-bold ml-2">{item.categoryName}</p>
              </div>
              <p className="font-bold ml-auto mr-4">Rs {(item.price * item.quantity * (1 - item.discount / 100)).toFixed(2)}</p>
              <button className='text-red-600' onClick={() => { decrementQuantity(item.id) }}><IoIosRemoveCircleOutline /></button>
            </div>
            {item.expanded && (
              <div className=" flex flex-row ml-6 mt-2 space-y-2">
                <div className="flex items-center space-x-2 gap-1">
                  <label htmlFor={`quantity-${item.id}`} className="text-sm text-gray-500">Quantity:</label>
                  <input
                    id={`quantity-${item.id}`}
                    type='number'
                    className="w-16 border rounded px-2 py-1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  />
                  <label className="text-sm text-gray-500">Discount:</label>
                  <input

                    type="text"
                    className="w-16 border rounded px-2 py-1"
                    value={`${item.discount}%`}
                  // onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                  />
                </div>
                {/* <p className="text-sm text-gray-500">Discount: {item.discount}%</p> */}

              </div>
            )}
          </div>
        ))) : (
          <img src={cart} alt="your cart is empty" />
          // <p>hii</p>
        )
        }
      </div>
      <div style={{ width: '-webkit-fill-available', bottom: '0', marginBottom: '10px', background: "white" }} >
        <div className="mb-0 p-3">
          <div className="flex justify-between">
            <p>Subtotal:</p>
            <p>Rs {subtotal}</p>
          </div>
          <div className="flex justify-between">
            <p>Tax:</p>
            <p>Rs {tax}</p>
          </div>
          <div className="flex justify-between font-bold">
            <p>Payable Amount:</p>
            <p>Rs {total}</p>
          </div>
        </div>
        <div className="flex justify-between gap-1 mt-4 p-3">
          <button className="bg-orange-500 text-white hover:bg-orange-600 w-full rounded">
            Hold Order
          </button>
          <button className="bg-green-500 text-white hover:bg-green-600 w-full rounded">
            <PizzaBilling selectedPizzas={cartItems} />
          </button>
        </div>
      </div>
    </div>

  );
};

export default CartSummary;
