/* eslint-disable comma-dangle */
import { createContext, useState, useMemo } from 'react';
import data from '../data/data.json';

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [dataObj, setDataObj] = useState(data);

  const contextValue = useMemo(
    () => ({
      dataObj,
      setDataObj,
    }),
    [dataObj, setDataObj]
  );

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
}
