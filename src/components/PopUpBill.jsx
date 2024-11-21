import React from 'react';
import { motion } from 'framer-motion';

const PopUpBill = ({ selectedPizzas, customerDetails, onClose }) => {
  const totalQuantity = selectedPizzas?.reduce((acc, pizza) => acc + pizza.quantity, 0);
  const totalPrice = selectedPizzas?.reduce((sum, item) => sum + (item.price * item.quantity * (1 - item.discount / 100)), 0);
  const taxRate = 0.225;
  const taxAmount = totalPrice * taxRate;
  const totalAmount = totalPrice + taxAmount;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div className="bg-white p-6 rounded shadow-md w-80 text-black">
        <h2 className="text-lg font-bold mb-4">Billing Summary</h2>
        <div className="mb-2">
          <span className="font-semibold">Customer Name:</span> {customerDetails.name}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Contact Number:</span> {customerDetails.number}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Total Quantity:</span> {totalQuantity}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Total Price:</span> Rs {totalPrice.toFixed(2)}
        </div>
        <div className="mb-2">
          <span className="font-semibold">Tax:</span> Rs {taxAmount.toFixed(2)}
        </div>
        <div className="mt-4 font-bold">
          <span className="font-semibold">Total Amount:</span> Rs {totalAmount.toFixed(2)}
        </div>
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default PopUpBill;
