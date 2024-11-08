import { createContext, useContext, useState, ReactNode } from "react";

type UserContextType = {
  name: string | null;
  setName: React.Dispatch<React.SetStateAction<string | null>>; 
  birthday: string | null;
  setBirthday: React.Dispatch<React.SetStateAction<string | null>>; 
  phNumber: string | null;
};

export const UserContext = createContext<UserContextType | undefined>(undefined);

type UserContextProviderProps = {
  children: ReactNode;
};

const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [name, setName] = useState<string | null>(null);
  const [birthday, setBirthday] = useState<string | null>(null);
  const phNumber = null;

  const value = { name, setName, birthday, setBirthday, phNumber };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook para usar el contexto de contactos
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext debe usarse dentro de UserContextProvider");
  }
  return context;
};

export default UserContextProvider;
