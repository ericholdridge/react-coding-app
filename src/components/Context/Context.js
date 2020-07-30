import React, { useState, createContext, useEffect } from "react";
import Data from "../StartCoding/Data";

export const CodeContext = createContext();

export const CodeState = ({ children }) => {
  const [data, setData] = useState(Data);
  const [currQuestion, setCurrQuestion] = useState(1);
  useEffect(() => {
  
  }, []);
  return (
    <CodeContext.Provider value={{ data, currQuestion, setCurrQuestion }}>
      {children}
    </CodeContext.Provider>
  );
};
