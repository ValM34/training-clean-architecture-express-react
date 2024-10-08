import { createContext, useState } from 'react';

// Définition du context
const AppContext = createContext({});

// Définition du context provider
const AppContextProvider = ({ children }) => {
  const [data, setData] = useState({});

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };