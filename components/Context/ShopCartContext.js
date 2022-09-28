import React, { createContext, useState } from "react";

// create context
const ShopCartContext = createContext();

const ShopCartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      if (!prevItems.find((el) => el.id === product.id)) {
        return [...prevItems, { ...product, quantity: 1 }];
      } else {
        return prevItems.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });

  };

  const removeFromCart = (id) => {
    setCartItems((prev) => {
      return prev.filter((el) => el.id !== id);
    });
  };

  const increaseQuantity = (id) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    });
  };

  const decreaseQuantity = (id) => {
    setCartItems((prevItems) => {
      if (prevItems.find((el) => el.quantity === 1)) {
        removeFromCart(id);
      }
      return prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    });
  };

  const values = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  };

  return (
    // the Provider gives access to the context to its children
    <ShopCartContext.Provider value={values}>
      {children}
    </ShopCartContext.Provider>
  );
};

export { ShopCartContext, ShopCartContextProvider };