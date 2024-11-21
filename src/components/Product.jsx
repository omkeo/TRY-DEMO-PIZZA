import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logoo.jpg'
import Billing from './Billing';
import { data } from '../data'
import { useState } from 'react';
import PizzaBilling from './PizzaBilling';
import Sidebar from './Sidebar';
import Header from './Header';
import CartSummary from './CartSummary';


const Product = () => {
  // console.log(data);
  const [selectedPizzas, setSelectedPizzas] = useState([]);
  const [mainData, setMainData] = useState(data);
  const [filteredData, setFilteredData] = useState(data);
  const onDelete = () => {
    setSelectedPizzas([])
  }

  const handleCategoryClick = (categoryName) => {
    setSelectedPizzas((prevPizzas) => {
      const pizzaIndex = prevPizzas.findIndex((pizza) => pizza.categoryName === categoryName);
      // console.log(prevPizzas);
      // console.log(pizzaIndex)
      if (pizzaIndex !== -1) {
        const updatedPizzas = [...prevPizzas];
        updatedPizzas[pizzaIndex] = {
          ...updatedPizzas[pizzaIndex],
          quantity: updatedPizzas[pizzaIndex].quantity + 1,
        };
        return updatedPizzas;
      } else {
        const pizza = data.find((item) => item.categoryName === categoryName);
        const pizzaWithQuantity = { ...pizza, quantity: 1 };
        return [...prevPizzas, pizzaWithQuantity];
      }
    });

  };
  // const handleQuantityChange = (id, newQuantity) => {
  //   setSelectedPizzas((prevPizzas) =>
  //     prevPizzas.map((pizza) =>
  //       pizza.id === id ? { ...pizza, quantity: newQuantity } : pizza
  //     )
  //   );
  // };

  const removePizza = (id) => {
    const filtered = selectedPizzas.filter((item, i) => item.id !== id);
    setSelectedPizzas(filtered);
  }
  // console.log(selectedPizzas);
  const handleChange = (event) => {
    const searchText = event.target.value;
    const newData = mainData.filter(category =>
      category.categoryName.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(newData);
  };
  return (
    <>
      {/* <div className='bg-cover bg-no-repeat bg-main1-image min-h-screen  '>

        <div className="  flex flex-col items-center">

          <div className="bg-amber-100  p-5 px-8 w-full flex justify-between items-center  ">
            <div className="flex items-center">
              <input
                className=" hidden px-6 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                type="text"
                placeholder="Search..."
              />
            </div>
            <div className='flex place-content-center '>
              <h1 className='font-extrabold text-2xl ml-40'>PRODUCT LIST</h1>
            </div>
            <div className="flex gap-5 place-content-end">
              <button onClick={onDelete} className="font-bold bg-red-700 py-2 px-3 text-white rounded-md hover:bg-red-600 focus:outline-none">
                Delete All
              </button>
              <button className="font-bold bg-amber-900 py-2 px-3 text-white rounded-md hover:bg-yellow-600 focus:outline-none">
                <Link to="/">Home</Link>
              </button>
              <button className="font-bold bg-amber-900 py-2 px-3 text-white rounded-md hover:bg-yellow-600 focus:outline-none">
                <Link to="/categoryList">Category List</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex fixed  top-0 ">
          <motion.div
            className="absolute top-o left-4 p-5 mt-0"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "linear"
            }}
          >
            <img src={logo} alt="Logo" className="h-32 w-32 rounded-full " />
          </motion.div>
          <div className="w-52  bg-amber-900 border-solid border-1 border-black h-screen p-4 flex flex-col items-center py-36 gap-2">
            {data.map((item) => (
              <button
                key={item.id}
                onClick={() => handleCategoryClick(item.categoryName)}
                className="text-center w-3/4  py-2  mt-5 bg-amber-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none"
              >
                {item.categoryName}
              </button>
            ))}
          </div>

        </div>
        <div className="w-[800px]  flex ml-52  flex-wrap justify-start p-8 gap-4">
          {selectedPizzas.map((pizza, index) => (
            <PizzaCard key={index} pizza={pizza} removePizza={removePizza} onQuantityChange={handleQuantityChange} />
          ))}
        </div>
        <div className="fixed right-7 top-20 mt-3 mr-3">
          <PizzaBilling selectedPizzas={selectedPizzas} />
        </div>

      </div> */}
      <div className='flex bg-gray-100'>
        <Sidebar />
        <div className='flex flex-1 flex-col'>
          <div className="flex justify-between items-center bg-white p-4 shadow-md">
            <input
              type="text"
              placeholder="Search products..."
              className="border-2 focus:outline-none p-2 rounded w-1/2 focus:ring-2 focus:ring-orange-400"
              onChange={handleChange}
            />
            <div className='flex gap-5'>
              <button className='text-white bg-orange-400 hover:bg-orange-500  px-4 py-2 rounded'><Link to='/categoryList'>  Category List </Link></button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"><Link to='/'>Logout</Link></button>
            </div>
          </div>
          <div className='flex'>
            <div className="flex-1">
              <div className="flex m-auto bg-white mt-2 gap-5 items-center p-3 w-[900px]">
                <button className="  font-bold border-2 border-orange-400 text-orange-400 bg-orange-50 px-4 py-2 rounded">Pizza</button>
                <button className=" text-black font-bold px-4 py-2 rounded">Burger</button>
                <button className=" text-black font-bold px-4 py-2 rounded">Wrap</button>
                <button className=" text-black font-bold px-4 py-2 rounded">Sandwich</button>
                <button className=" text-black font-bold px-4 py-2 rounded">Desserts</button>
                <button className=" text-black font-bold px-4 py-2 rounded">Beverages</button>
              </div>
              {/* <ProductList /> */}
              <div className="grid grid-cols-4 gap-4 h-[78vh] p-4 overflow-y-scroll">
                {filteredData.length > 0 ? (
                  filteredData.map(product => (
                    <div key={product.id} className="border bg-white rounded-lg p-4 m-2 text-center shadow-md shadow-gray-00 h-60 "
                      onClick={() => handleCategoryClick(product.categoryName)}
                    >
                      <img src={product.img} alt={product.categoryName} className="h-32 w-full object-cover rounded-t-lg" />
                      <p className=" mt-2">{product.categoryName}</p>
                      <h3 className="text-black font-bold text-lg">Rs {product.price}</h3>
                    </div>
                  ))) : (
                  <h1 className="  text-black">Product Not Found...</h1>
                )}
              </div>
            </div>
            <div className="w-1/3 bg-white shadow-lg h-fit ">

              <CartSummary pizza={selectedPizzas} />

              {/* <CartSummary /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
