// PerfilStackScreen.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyProfile from '@/app/(tabs)/profile/profile';

const PerfilStack = createStackNavigator();

const PerfilStackScreen = () => {
  return (
    <PerfilStack.Navigator>
      <PerfilStack.Screen 
        name="Perfil" 
        component={MyProfile} 
        options={{ headerTitle: 'Mi Perfil' }} // Configura el título para la pantalla de inicio
      />
    </PerfilStack.Navigator>
  );
};

export default PerfilStackScreen;