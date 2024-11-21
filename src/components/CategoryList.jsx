import React, { useState } from 'react';
import AddCategoryModal from './AddCategory';
import { Link } from 'react-router-dom';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { data } from '../data'
import Sidebar from './Sidebar';

const CategoryList = () => {
  const [mainData, setMainData] = useState(data);
  const [filteredData, setFilteredData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPizza, setEditingPizza] = useState(null);
  console.log(filteredData)



  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onDelete = (index) => {
    const filtered = filteredData.filter((_, i) => i !== index);
    setFilteredData(filtered);
    setMainData(filtered);
  };

  const handleChange = (event) => {
    const searchText = event.target.value;
    const newData = mainData.filter(category =>
      category.categoryName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(newData);
  };


  const onEdit = (index) => {
    setEditingPizza(filteredData[index]);
    openModal();
  };;

  return (
    <>
      <div className='flex bg-gray-100 h-screen'>
        <Sidebar />
        <div className='flex flex-1 flex-col'>
          <div className="h-screen  bg-gray-100 flex flex-col items-center">
            <div className="bg-white p-5 px-8 w-full flex justify-between items-center">
              <div className="flex items-center">
                <input
                  className="px-6 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                  type="text"
                  placeholder="Search..."
                  onChange={handleChange}
                />
              </div>
              <div className="flex gap-5 place-content-end">


                <button
                  onClick={openModal}
                  className="bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                >
                  Add Category
                </button>
                <AddCategoryModal isOpen={isModalOpen} onClose={closeModal} data={filteredData} editingPizza={editingPizza} />
                <button className='bg-orange-400 text-white px-4 py-2 rounded-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500'>
                  <Link to="/products">Products</Link>
                </button >
                <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                  <Link to="/">Logout</Link>
                </button>
              </div>
            </div>

            {filteredData.length > 0 ? (
              <div className='h-[77vh] overflow-y-scroll'>
                <div className=" justify-center items-center mt-10 mb-10">
                  <div className="overflow-x-auto border border-gray-300 rounded-lg">
                    <table className="min-w-full bg-white">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Sl</th>
                          <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Category Name</th>
                          <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Status</th>
                          <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-600 tracking-wider">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData.map((category, index) => (
                          <tr key={index}>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{index + 1}</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{category.categoryName}</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">{category.status}</td>
                            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                              <button
                                onClick={() => onEdit(index)}
                                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 mx-1"
                              >
                                <MdEdit />
                              </button>
                              <button
                                onClick={() => onDelete(index)}
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                              >
                                <MdDelete />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className="flex justify-between items-center p-4 bg-orange-100">
                      <span>Showing {filteredData.length} of {filteredData.length} entries</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <h1 className="text-center mt-10 mb-10 text-black">No Data found...</h1>
            )}
          </div>
        </div>
      </div>

    </>
  );
}

export default CategoryList;
