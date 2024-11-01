import { createContext, useContext, useState, ReactNode } from "react";

type Contact = {
  id: string;
  name: string;
  phoneNumbers?: { digits: string }[];
  emergencyContact?: boolean;
  // Otros campos relevantes
};

type ContactContextType = {
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
};

export const ContactContext = createContext<ContactContextType | undefined>(undefined);

type ContactContextProviderProps = {
  children: ReactNode;
};

const ContactContextProvider = ({ children }: ContactContextProviderProps) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const value = { contacts, setContacts };

  return (
    <ContactContext.Provider value={value}>
      {children}
    </ContactContext.Provider>
  );
};

// Custom hook para usar el contexto de contactos
export const useContactContext = () => {
  const context = useContext(ContactContext);
  if (!context) {
    throw new Error("useContactContext debe usarse dentro de ContactContextProvider");
  }
  return context;
};

export default ContactContextProvider;
