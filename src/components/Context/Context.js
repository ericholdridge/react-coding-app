import React, { useState, createContext } from "react";
import Data from "../StartCoding/Data";

export const CodeContext = createContext();

export const CodeState = ({ children }) => {
  const [data, setData] = useState(Data);
  const [currQuestion, setCurrQuestion] = useState(1);
  const [inputValue, setInputValue] = useState();

  return (
    <CodeContext.Provider value={{ data, currQuestion, setCurrQuestion, inputValue, setInputValue }}>
      {children}
    </CodeContext.Provider>
  );
};
