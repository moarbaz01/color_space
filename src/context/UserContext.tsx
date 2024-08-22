"use client";
import { createContext, ReactNode, useState } from "react";

interface ShippingAddressDataType {
  name: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  zip: number;
  country: string;
  phone: number;
}

interface ContextType {
  shippingAddressData: ShippingAddressDataType;
  setShippingAddressData: (data: ShippingAddressDataType) => void;
}

export const UserContext = createContext<ContextType>({} as ContextType);
const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [shippingAddressData, setShippingAddressData] =
    useState<ShippingAddressDataType>({
      name: "",
      address1: "",
      address2: "",
      city: "",
      state: "",
      zip: parseInt(""),
      country: "",
      phone: parseInt(""),
    });
  const value = {
    shippingAddressData,
    setShippingAddressData,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
