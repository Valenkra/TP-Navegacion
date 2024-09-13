import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Input from '@/components/Input';
import { MyText } from '@/components/MyText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { Dimensions } from 'react-native';
import { Appearance } from 'react-native';
import { scale } from 'react-native-size-matters';
import * as React from 'react';
import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MyProfile() {
  const navigation = useNavigation();

  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: Colors.screen.profile.light, dark: Colors.screen.profile.dark }}
    headerImage={<Ionicons size={310} name="settings-outline" style={[styles.headerImage, {color: (Appearance.getColorScheme() === "dark") ? Colors.screen.profile.darkIcon : Colors.screen.profile.lightIcon}]} />}>
      <View style={styles.textContainer}>
      <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
        <MyText
          type='title'
          value='Buenos días!'
        />
        <MyText
          type='default'
          value='Este es tu panel de control. Aquí se encuentra toda la información de tu perfil.'
        />
        <MyText
          type='defaultSemiBold'
          value='Esta un poco vacio, no?'
        />
      </View>
        <Input
          label='Cual es tu nombre'
          size='normal'
          placeholder='aloha'
        />
  </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    gap: scale(5),
    marginBottom: scale(8)
  },
  headerImage: {
    bottom: -100,
    left: -90,
    position: 'absolute',
  },
});
