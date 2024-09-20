// HomeStackScreen.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '@/app/(tabs)';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={Home} 
        options={{ headerTitle: 'Home' }} // Configura el título para la pantalla de inicio
      />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;