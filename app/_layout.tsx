import 'react-native-gesture-handler';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import NavigationContainer from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from '@/components/navigation/HomeStack';
import PerfilStackScreen from '@/components/navigation/PerfilStack';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import ContactosStackScreen from '@/components/navigation/ContactosStack';
import CreditosStackScreen from '@/components/navigation/CreditosStack';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarLabel: () => null, // Oculta el texto de la pestaña
            headerShown: false, // Asegúrate de que no se muestre el encabezado en el TabNavigator
          })}
        >
          <Tab.Screen 
            name="(tabs)/index" 
            component={HomeStackScreen}
            options={{
              title: 'Home',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
              ),
            }} 
            />
          <Tab.Screen 
            name="(tabs)/profile/profile"  
            component={PerfilStackScreen} 
            options={{
              title: 'Mi perfil',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'person-circle' : 'person-circle-outline'} color={color} />
              ),
            }}
            />
          <Tab.Screen 
            name="(tabs)/phones/contacto"  
            component={ContactosStackScreen} 
            options={{
              title: 'Contactos',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'call' : 'call-outline'} color={color} />
              ),
            }}
            />
          <Tab.Screen 
            name="(tabs)/creditos"  
            component={CreditosStackScreen} 
            options={{
              title: 'Sobre Nosotros',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'book' : 'book-outline'} color={color} />
              ),
            }}
            />
        </Tab.Navigator>
    </ThemeProvider>
  );
}
