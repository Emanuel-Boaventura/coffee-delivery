import { createContext, ReactNode, useState } from 'react';

interface IAddressContext {
  adressInfo: IAddressInfo;
  saveAdressInfo: (adressInfo: IAddressInfo) => void;
}

interface IAdressProviderProps {
  children: ReactNode;
}

export const AddressContext = createContext<IAddressContext>(
  {} as IAddressContext
);

export interface IAddressInfo {
  localidade: string;
  uf: string;
  logradouro: string;
  bairro: string;
  numero: string;
  complemento?: string;
}

export const AdressProvider = ({ children }: IAdressProviderProps) => {
  const [adressInfo, setAdressInfo] = useState<IAddressInfo>(
    {} as IAddressInfo
  );

  function saveAdressInfo(newAdressInfo: IAddressInfo) {
    setAdressInfo(newAdressInfo);
  }

  return (
    <AddressContext.Provider value={{ adressInfo, saveAdressInfo }}>
      {children}
    </AddressContext.Provider>
  );
};
