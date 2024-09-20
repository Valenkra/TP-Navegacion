// PerfilStackScreen.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MyProfile from '@/app/(tabs)/profile/profile';
import MyProfileConfig from '@/app/(tabs)/profile/profileConfig';

const PerfilStack = createStackNavigator();

const PerfilStackScreen = () => {
  return (
    <PerfilStack.Navigator screenOptions={{
      headerShown: false
    }}>
      <PerfilStack.Screen 
        name="Mi Perfil" 
        component={MyProfile} 
        options={{ headerTitle: 'Mi Perfil' }} // Configura el título para la pantalla de inicio
      />
      <PerfilStack.Screen 
        name="Configuracion de Perfil" 
        component={MyProfileConfig} 
        options={{ headerTitle: 'Mi Perfil' }} // Configura el título para la pantalla de inicio
      />
    </PerfilStack.Navigator>
  );
};

export default PerfilStackScreen;