import { createContext, useState } from 'react';

export const CartContext = createContext({});

export const CartProvider = ({ children }: any) => {
  const [cartItens, setCartItens] = useState(0);

  function addItemCart() {
    const newCartItens = cartItens + 1;
    setCartItens(newCartItens);
    console.log('Item adicionado, quantidade atual: ', newCartItens);
  }

  return (
    <CartContext.Provider value={{ cartItens, addItemCart }}>
      {children}
    </CartContext.Provider>
  );
};
