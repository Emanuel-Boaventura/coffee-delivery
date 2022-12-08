import { createContext, ReactNode, useState } from 'react';

interface IPaymentContext {
  paymentMethod: string;
  setPaymentMethod: React.Dispatch<React.SetStateAction<string>>;
}

interface IPaymentProviderProps {
  children: ReactNode;
}

export const PaymentContext = createContext<IPaymentContext>(
  {} as IPaymentContext
);
export const PaymentProvider = ({ children }: IPaymentProviderProps) => {
  const [paymentMethod, setPaymentMethod] = useState('');

  return (
    <PaymentContext.Provider value={{ paymentMethod, setPaymentMethod }}>
      {children}
    </PaymentContext.Provider>
  );
};
