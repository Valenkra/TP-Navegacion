// CreditosStackScreen.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CreditoScreen from '@/app/(tabs)/creditos';
import { NavigationContainer } from '@react-navigation/native';

const CreditosStack = createStackNavigator();

const CreditosStackScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <CreditosStack.Navigator screenOptions={{
        headerShown: false
      }}>
        <CreditosStack.Screen 
          name="Creditos" 
          component={CreditoScreen} 
          options={{ headerTitle: 'Sobre nosotros' }} // Configura el título para la pantalla de inicio
        />
      </CreditosStack.Navigator>
    </NavigationContainer>
  );
};

export default CreditosStackScreen;