import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { Accelerometer } from "expo-sensors";
import * as SMS from 'expo-sms';

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
  EC_phone: string | null;
  setEC_phone: React.Dispatch<React.SetStateAction<string | null>>; 
};

export const ContactContext = createContext<ContactContextType | undefined>(undefined);

type ContactContextProviderProps = {
  children: ReactNode;
};

const ContactContextProvider = ({ children }: ContactContextProviderProps) => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [EC_id, setEC_id] = useState<string | null>(null);
  const [EC_msg, setEC_msg] = useState<string | null>(null);
  const [EC_phone, setEC_phone] = useState<string | null>(null);

  useEffect(() => {
    const emergencyContact = contacts.find(contact => contact.emergencyContact === true);
    setEC_id(emergencyContact ? emergencyContact.id : null);
  }, [contacts]);

  const value = { contacts, setContacts, EC_id, setEC_id, EC_msg, setEC_msg, EC_phone, setEC_phone };

  useEffect(() => {
    const subscription = Accelerometer.addListener(async ({ x, y, z }) => {
      const shake = Math.sqrt(x * x + y * y + z * z);
      if (shake > 3.5 && EC_id != null) {
        await SMS.sendSMSAsync([EC_phone?EC_phone:""], (EC_msg) ? EC_msg : "Estoy en una emergencia! Necesito ayuda!!");
      }
    });
    return () => subscription && subscription.remove();
  });

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
