import { createContext, ReactNode, useState } from 'react';

interface ICartContext {
  cartItens: ICartItens[];
  addItemCart: (item: IItem, quantity: number) => void;
  changeQuantityCartItem: (itemId: number, newQuantity: number) => void;
  removeCartItem: (itemId: number) => void;
}

interface ICartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<ICartContext>({} as ICartContext);
export interface IItem {
  name: string;
  price: string;
  image: string;
  id: number;
}

export interface ICartItens extends IItem {
  quantity: number;
}

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [cartItens, setCartItens] = useState<ICartItens[]>([]);

  function addItemCart({ name, price, image, id }: IItem, quantity: number) {
    let edited = false;
    const newContext = cartItens.map((item) => {
      if (item.id === id) {
        edited = true;
        return { ...item, quantity: quantity };
      }
      return item;
    });

    if (edited) {
      setCartItens(newContext);
    } else {
      setCartItens([
        ...cartItens,
        {
          name,
          price,
          image,
          id,
          quantity,
        },
      ]);
    }
  }

  function changeQuantityCartItem(itemId: number, newQuantity: number) {
    const newContext = cartItens.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCartItens(newContext);
    // console.log('antigo: ', cartItens, 'novo: ', newContext);
  }
  function removeCartItem(itemId: number) {
    setCartItens(
      cartItens.filter(({ id }) => {
        return id !== itemId;
      })
    );
  }

  return (
    <CartContext.Provider
      value={{ cartItens, addItemCart, changeQuantityCartItem, removeCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};
