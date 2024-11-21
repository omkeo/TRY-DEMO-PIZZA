import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { IoCashOutline } from "react-icons/io5";
import { IoBagHandleSharp } from "react-icons/io5";
import { TbMessageReport } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
import { MdLogout } from "react-icons/md";


const Sidebar = () => {
  return (
    <div className="bg-white  text-gray-500 w-32 p-4 h-[99vh]">
      <ul className='flex flex-col gap-1 '>
        <button className="flex flex-col mb-4 rounded border-2  border-white hover:border-orange-400 hover:text-orange-400 hover:bg-orange-50 justify-center items-center p-2 "><FaHome />Home</button>
        <button className="flex flex-col mb-4 border-2  border-white rounded hover:border-orange-400 hover:text-orange-400 hover:bg-orange-50 justify-center items-center p-2"><RiCustomerServiceFill />Customers</button>
        <button className="flex flex-col mb-4 border-2  border-white rounded hover:border-orange-400 hover:text-orange-400 hover:bg-orange-50 justify-center items-center p-2"><IoCashOutline />Cashier</button>
        <button className="flex flex-col mb-4 border-2  border-white rounded hover:border-orange-400 hover:text-orange-400 hover:bg-orange-50 justify-center items-center p-2"><IoBagHandleSharp />Orders</button>
        <button className="flex flex-col mb-4 border-2  border-white rounded hover:border-orange-400 hover:text-orange-400 hover:bg-orange-50 justify-center items-center p-2"><TbMessageReport />Reports</button>
        <button className="flex flex-col mt-32 mb-4 border-2  border-white  rounded hover:border-orange-400 hover:text-orange-400 hover:bg-orange-50 justify-center items-center p-2"><IoSettings />Settings</button>
        <button className="flex flex-col mb-4 border-2  border-white rounded hover:border-orange-400 hover:text-orange-400 hover:bg-orange-50 justify-center items-center p-2"><MdLogout />Logout</button>
      </ul>
    </div>
  );
};

export default Sidebar;
