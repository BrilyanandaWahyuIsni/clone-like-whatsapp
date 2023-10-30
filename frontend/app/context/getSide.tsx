"use client"
import React, { createContext, useState } from 'react';


interface ValueContex {
  nilaiSide: boolean;
  handleNilaiSide: (nilai: boolean) => void;
}

const ValueContext = createContext<ValueContex | undefined>(undefined);

const ValueProvider = ({ children }) => {
  const [nilaiSide, setNilaiSide] = useState<boolean>(false);

  const handleNilaiSide = (nilai) => {
    setNilaiSide(nilai);
  };

  return (
    <ValueContext.Provider value={{ nilaiSide, handleNilaiSide }}>
      {children}
    </ValueContext.Provider>
  );
};

export { ValueProvider, ValueContext };