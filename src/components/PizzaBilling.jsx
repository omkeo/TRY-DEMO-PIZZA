import React, { useState } from 'react';
import Billing from './Billing';
import { motion, AnimatePresence } from 'framer-motion';
import CustomerForm from './CustomerForm';
import PopUpBill from './PopUpBill';

const PizzaBilling = ({ selectedPizzas }) => {
  const [showForm, setShowForm] = useState(false);
  const [showBill, setShowBill] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({ name: '', number: '' });

  const handleShowForm = () => setShowForm(true);
  const handleFormSubmit = (details) => {
    setCustomerDetails(details);
    setShowForm(false);
    setShowBill(true);
  };

  return (
    <div className="">
      {/* <Billing selectedPizzas={selectedPizzas} /> */}
      <button
        onClick={handleShowForm}
        className=" bg-green-500 text-white rounded hover:bg-green-600 px-4 py-2"
      >
        Generate Bill
      </button>
      <AnimatePresence>
        {showForm && (
          <CustomerForm onSubmit={handleFormSubmit} onClose={() => setShowForm(false)} />
        )}
        {showBill && (
          <PopUpBill
            selectedPizzas={selectedPizzas}
            customerDetails={customerDetails}
            onClose={() => setShowBill(false)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default PizzaBilling;
