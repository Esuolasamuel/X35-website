"use client";

import { createContext, useContext, useState } from "react";

const HeaderStyleContext = createContext();

export function HeaderStyleProvider({ children }) {
  const [style, setStyle] = useState("transparent");

  return (
    <HeaderStyleContext.Provider value={{ style, setStyle }}>
      {children}
    </HeaderStyleContext.Provider>
  );
}

export function useHeaderStyle() {
  return useContext(HeaderStyleContext);
}