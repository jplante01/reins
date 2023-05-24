import React, { createContext, useState } from 'react';
import storedData from '../data/data.json'

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [data, setData] = useState(storedData);

  const updateData = (newData) => {
    setData(newData);
  } 

  return (
    <MyContext.Provider value={{ data, updateData }}>
      { children }
    </MyContext.Provider>
  )
};

export { MyContext, MyContextProvider }