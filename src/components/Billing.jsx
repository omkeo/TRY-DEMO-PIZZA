import React from 'react';
// { totalQuantity, totalPrice, taxRate }
const Billing = ({ selectedPizzas }) => {
  // const tax = (totalPrice * taxRate).toFixed(2);
  // const totalAmount = (totalPrice + parseFloat(tax)).toFixed(2);
  const totalQuantity = selectedPizzas.reduce((acc, pizza) => acc + pizza.quantity, 0);
  const totalPrice = selectedPizzas.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);
  const taxRate = 0.05;
  const taxAmount = totalPrice * taxRate;
  const totalAmount = totalPrice + taxAmount;
  return (
    <div className="w-56 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-2">Billing Summary</h2>
      <div className="mb-2">
        <span className="font-semibold">Total Quantity:</span> {totalQuantity}
      </div>
      <div className="mb-2">
        <span className="font-semibold">Total Price:</span> Rs  {totalPrice.toFixed(2)}

      </div>
      <div className="mb-2">
        <span className="font-semibold">Tax (5%):</span> Rs {taxAmount}

      </div>
      <div className="mt-4 font-bold">
        <span className="font-semibold">Total Amount:</span> Rs {totalAmount}

      </div>
    </div>
  );
};

export default Billing;
