"use client";
import React from 'react';
import Input from "./component/Input"

const Home = () => {
  return (
    <div className="bg-cover bg-gradient-to-r from-blue-500 to to-blue-300 h-screen">
      <div className="bg-white/25 w-full flex flex-col h-full">
        {/* INPUT AND LOGO */}
        <div className="flex flex-col md:flex-row justify-between items-center p-12">
          <Input />
          <h1 className='mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl font-bold'>Weather App</h1>
        </div>
      </div>
    </div>
  )
}

export default Home;
