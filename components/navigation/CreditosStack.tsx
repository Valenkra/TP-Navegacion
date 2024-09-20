// CreditosStackScreen.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreditoScreen from '@/app/(tabs)/creditos';

const CreditosStack = createStackNavigator();

const CreditosStackScreen = () => {
  return (
    <CreditosStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <CreditosStack.Screen 
        name="Creditos" 
        component={CreditoScreen} 
        options={{ headerTitle: 'Sobre nosotros' }} // Configura el título para la pantalla de inicio
      />
    </CreditosStack.Navigator>
  );
};

export default CreditosStackScreen;