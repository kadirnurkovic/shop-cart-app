import React, { useContext } from "react";
import ProductCard from "../Product/ProductCard";
import products from "../Items/Items.json";
import { ShopCartContext } from '../Context/ShopCartContext';
import image from '../../components/Product/imagee.jpg'

export default function HomePage() {
  const { addToCart, cartItems } = useContext(ShopCartContext);
  return (
    <>
      <div className="flex w-full justify-center mt-5 h-1/5 flex-row  ">
        <img
          className=" flex  w-7/12 h-1/5 "
          src="https://www.laptopplaza.rs/images/thumbnails/550/450/detailed/43/lenovo_thinkpad_intel_L15_f9u1-u7.jpg"
          alt="slika"
        />
      </div>

      <div className="flex items-center mt-10 justify-center border-4 w-1/6 h-12 border-sky-800 rounded-xl bg-sky-800  text-amber-50 ease-out duration-300 hover:bg-white hover:text-black">
      </div>
      <div className="flex justify-center items-center">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            price={product.price}
            image={product.imgUrl}
            title={product.name}
            onClick={() => addToCart(product)}
          />
        ))}
      </div>
    </>
  );
}