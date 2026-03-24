"use client";

import { createContext, useContext, useState, useEffect } from "react";

type CartContextType = {
  count: number;
  setCount: (count: number) => void;
  increment: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);


  useEffect(() => {
    const loadCart = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/cart", {
          credentials: "include",
        });
        const data = await res.json();
        setCount(data?.data?.items?.length || 0);
      } catch (err) {
        console.log("Cart load failed");
      }
    };

    loadCart();
  }, []);

  return (
    <CartContext.Provider value={{ count, setCount, increment }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};