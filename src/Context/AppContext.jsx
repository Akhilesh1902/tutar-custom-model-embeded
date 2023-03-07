import { useContext, createContext, useState } from 'react';

const Context = createContext();

export const AppContext = ({ children }) => {
  const [controls, setControls] = useState(true);
  const [metadata, setMetadata] = useState([]);

  return (
    <Context.Provider value={{ controls, setControls, metadata, setMetadata }}>
      {children}
    </Context.Provider>
  );
};

export const useAppContext = () => useContext(Context);
