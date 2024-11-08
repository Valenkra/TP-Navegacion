import { createContext, useContext, useState, ReactNode, useEffect } from "react";

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
  EC_id: string | null;
  setEC_id: React.Dispatch<React.SetStateAction<string | null>>; 
  EC_msg: string | null;
  setEC_msg: React.Dispatch<React.SetStateAction<string | null>>; 
};

export const ContactContext = createContext<ContactContextType | undefined>(undefined);

type ContactContextProviderProps = {
  children: ReactNode;
};

const ContactContextProvider = ({ children }: ContactContextProviderProps) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [EC_id, setEC_id] = useState<string | null>(null);
  const [EC_msg, setEC_msg] = useState<string | null>(null);

  useEffect(() => {
    // Actualiza EC_id basado en el contacto marcado como emergencia
    const emergencyContact = contacts.find(contact => contact.emergencyContact === true);
    setEC_id(emergencyContact ? emergencyContact.id : null);
  }, [contacts]);

  const value = { contacts, setContacts, EC_id, setEC_id, EC_msg, setEC_msg };

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
