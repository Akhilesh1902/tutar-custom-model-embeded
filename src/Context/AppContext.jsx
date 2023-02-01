import { useContext, createContext, useState } from 'react';

const Context = createContext();

export const AppContext = ({ children }) => {
  const [controls, setControls] = useState(true);

  return (
    <Context.Provider value={{ controls, setControls }}>
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
