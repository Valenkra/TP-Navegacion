// ContactosStackScreen.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ContactoScreen from '@/app/(tabs)/contacto';

const ContactosStack = createStackNavigator();

const ContactosStackScreen = () => {
  return (
    <ContactosStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <ContactosStack.Screen 
        name="Contacto" 
        component={ContactoScreen} 
        options={{ headerTitle: 'Contacto' }} // Configura el título para la pantalla de inicio
      />
    </ContactosStack.Navigator>
  );
};

export default ContactosStackScreen;