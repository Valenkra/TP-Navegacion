// HomeStackScreen.js
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '@/app/(tabs)/index';
import { NavigationContainer } from '@react-navigation/native';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <HomeStack.Navigator screenOptions={{
        headerShown: false
      }}>
        <HomeStack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ headerTitle: 'Home' }} // Configura el título para la pantalla de inicio
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStackScreen;