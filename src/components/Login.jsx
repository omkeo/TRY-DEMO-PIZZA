import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion'
import logo from '../assets/logoo.jpg'


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handlePass = (event) => {
    const { value } = event.target;
    setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = { email, password };
    axios
      .post('https://reqres.in/api/login', payload)
      .then((res) => {
        console.log(res, 'login successfully');
        setError('');
        navigate('/categoryList'); // Redirect to AddCategory page
      })
      .catch((err) => {
        setError('Invalid Credentials');
      });
  };

  return (
    <>
      <div className="min-h-screen bg-cover bg-no-repeat flex flex-col lg:flex-row items-center justify-between py-12 px-4 sm:px-6 lg:px-8 bg-main-image">
        <motion.div
          className="absolute top-0 left-0 p-9"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "linear"
          }}
        >
          <img src={logo} alt="Logo" className="h-32 w-32 rounded-full" />
        </motion.div>
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="max-w-md w-full space-y-8 bg-white shadow px-4 py-8 rounded-2xl sm:py-7 mt-40">
          <div className="text-center text-3xl font-bold mb-8">Sign in</div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                autoComplete="email"
                onChange={handleLogin}
                value={email}
                required
                className={`w-full px-3 py-2 rounded-md border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-indigo-500`}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                autoComplete="current-password"
                onChange={handlePass}
                value={password}
                required
                className={`w-full px-3 py-2 rounded-md border ${error ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-1 focus:ring-indigo-500`}
              />
            </div>
            {error && (
              <div className="text-red-500 text-sm">{error}</div>
            )}
            <div className="flex items-center justify-between">
              <a href="#" className="text-sm text-gray-600 hover:text-gray-700">
                Forgot password?
              </a>
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 rounded-md bg-yellow-500 text-white font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Sign in
              </button>
            </div>
          </form>
        </motion.div>
        <div>
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="text-3xl lg:text-7xl font-black text-right mt-8 lg:mt-0 text-white mb-60">
            BEST
            <span className="text-amber-200"> CRUST PIZZA</span><br />
            IN THE TOWN
          </motion.h1>
          {/* <motion.p
            initial={{ y: +100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-xl lg:text-4xl font-extrabold mt-4  text-center text-white p-2 drop-shadow-lg decoration-transparent"
          >
            I'm on a pizza diet.Every time I see pizza, I eat it!🍕😋
          </motion.p> */}
        </div>
      </div>
    </>
  );
};


export default Login;
