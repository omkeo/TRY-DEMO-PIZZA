import React, { useState, useEffect } from 'react';
import { sampleData } from '../data';


const AddCategoryModal = ({ isOpen, onClose, data, editingPizza }) => {
  const [categoryName, setCategoryName] = useState('');
  const [status, setStatus] = useState('active');
  const [suggestions, setSuggestions] = useState(sampleData);
  const [error, setError] = useState('');

  useEffect(() => {
    if (editingPizza) {
      setCategoryName(editingPizza.categoryName);
      setStatus(editingPizza.status);
    }
  }, [editingPizza]);

  const handleCategoryNameChange = (e) => {
    const value = e.target.value;
    setCategoryName(value);

    const filteredSuggestions = sampleData.filter(category =>
      category.categoryName.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const existingCategory = sampleData.find(category => category.categoryName.toLowerCase() === categoryName.toLowerCase());

    if (!existingCategory) {
      setError('Category not found in available categories.');
      return;
    }
    const categoryInData = data.find(category => category.categoryName.toLowerCase() === categoryName.toLowerCase());

    if (categoryInData) {
      setError('Category already exists in the data.');
      return;
    }
    // Handle form submission
    // let id = data.length + 1;
    const newCategory = { ...existingCategory, status };
    data.push(newCategory);
    // console.log(data);
    setCategoryName('')
    setError('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Add Category</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
              Category Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="categoryName"
              name="categoryName"
              list="categorySuggestions"
              value={categoryName}
              onChange={handleCategoryNameChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Category Name"
              required
            />
            <datalist id="categorySuggestions">
              {suggestions.map((category, index) => (
                <option key={index} value={category.categoryName} />
              ))}
            </datalist>
          </div>
          {error && (
            <div className="mb-4 text-red-500 text-sm">
              {error}
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Status <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center mt-2">
              <input
                type="radio"
                id="active"
                name="status"
                value="active"
                checked={status === 'active'}
                onChange={handleStatusChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
              />
              <label htmlFor="active" className="ml-2 block text-sm text-gray-700">
                Active
              </label>
              <input
                type="radio"
                id="inactive"
                name="status"
                value="inactive"
                checked={status === 'inactive'}
                onChange={handleStatusChange}
                className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 ml-4"
              />
              <label htmlFor="inactive" className="ml-2 block text-sm text-gray-700">
                Inactive
              </label>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            >
              Save
            </button>
            <button
              type="button"
              className="mx-1 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryModal;
