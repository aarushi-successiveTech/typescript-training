'use client';
import { createContext, useState, ReactNode } from 'react';
type Products = {
    id : number;
    name : string; 
    price : number; 
};

type cartItem = Products & {qty : number};

type CartContextType = {
    cart : cartItem[];
    addToCart : (product : Products) => void;
    removeFromCart : (id : number) => void ; 
    totalPrice : number; 
};
type CartProviderProps = {
  children: ReactNode;
};
export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children } : CartProviderProps) => {
  const [cart, setCart] = useState<cartItem[]>([]);

  const addToCart = (product : Products) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };

  const removeFromCart = (productId : number) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === productId);
      if (existing) {
        return prev.filter(item => item.id !== productId);
      } else {
        return prev.map(item =>
          item.id === productId ? { ...item, qty: item.qty - 1 } : item
        );
      }
    });
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};