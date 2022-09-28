import React from "react";
import CardComponent from "../CardComponent"

export default function ProductCard({ image, title, price, onClick }) {
  return (
    <div className="bg-gray-100 w-full min-h-screen gap-4 flex-wrap flex justify-center items-center">
      <div className="w-60 px-6 bg-white rounded py-6 transform transition-all hover:translate-y-2">
        <img className="h-50 object-cover " src={image} alt="Product" />
        <div className="p-2"></div>
        <h2 className="font-bold text-lg ml-10"> {title} </h2>
        {/* <p className="text text-gray-600 text-center ">{text}</p> */}
        <div className="m-2"></div>
        {/* <span className="flex items-center ml-23  mt-4 ">
          <img src={image} className="h-3 px-1 "></img>
          <img src={image} className="h-3 px-1"></img>
          <img src={image} className="h-3 px-1"></img>
        </span> */}
        <div className="flex justify-between">
          <button
            onClick={onClick}
            className="bg-green-400 px-4 py-1 h-30 w-30 hover:bg-violet-600 text-white rounded mt-3 ml-1 "
          >
            Add to cart
          </button>
          <p className="px-4 py-2 text-black-300 rounded mt-3 ">$ {price}</p>
        </div>
      </div>
    </div>
  );
}