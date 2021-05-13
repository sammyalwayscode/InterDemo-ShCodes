import React, { useState, useEffect, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value="hello ">{children}</GlobalContext.Provider>
  );
};
