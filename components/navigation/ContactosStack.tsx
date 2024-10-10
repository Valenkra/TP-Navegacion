// ContactosStackScreen.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ContactoScreen from '@/app/(tabs)/phones/contacto';
import ContactInfoScreen from '@/app/(tabs)/phones/contactInfo';
import { NavigationContainer } from '@react-navigation/native';

const ContactosStack = createStackNavigator();

const ContactosStackScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <ContactosStack.Navigator screenOptions={{
        headerShown: false
      }}>
        <ContactosStack.Screen 
          name="Contacto" 
          component={ContactoScreen} 
          options={{ headerTitle: 'Contacto' }} // Configura el título para la pantalla de inicio
        />
        <ContactosStack.Screen 
          name="ContactInfo" 
          component={ContactInfoScreen} 
          options={{ headerTitle: 'Información de Contacto' }} // Configura el título para la pantalla de inicio
        />
      </ContactosStack.Navigator>
    </NavigationContainer>
  );
};

export default ContactosStackScreen;