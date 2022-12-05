import { createContext, ReactNode, useState } from 'react';

interface ICartContext {
  cartItens: IItem[];
  addItemCart: (item: IItem, quantity: number) => void;
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

export const CartProvider = ({ children }: ICartProviderProps) => {
  const [cartItens, setCartItens] = useState<IItem[]>([]);

  function addItemCart({ name, price, image, id }: IItem, quantity: number) {
    setCartItens([
      ...cartItens,
      {
        name,
        price,
        image,
        id,
      },
    ]);
    console.log(quantity);
  }

  return (
    <CartContext.Provider value={{ cartItens, addItemCart }}>
      {children}
    </CartContext.Provider>
  );
};
