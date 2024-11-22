import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';
import { Colors } from '@/constants/Colors';
import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Input from '@/components/Input';
import Back from '@/components/Back';
import { MyText } from '@/components/MyText';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { Dimensions } from 'react-native';
import { Appearance } from 'react-native';
import { scale } from 'react-native-size-matters';
import * as React from 'react';
import { Button } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { useNavigation } from '@react-navigation/native';

export default function MyProfileConfig() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: useThemeColor({light: '', dark: ''}, 'background') }]}>
      <Back navigation={navigation}/>
      <View style={styles.titleContainer}>
          <MyText type='title'style={[styles.contacto, { backgroundColor: useThemeColor({light: '', dark: ''}, 'background') }]}>Contacto de Emergencia</MyText>
      </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: scale(20),
    paddingTop: scale(20),
  },
  titleContainer: {
    display:'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: scale(20)
  },
  contacto:{
    fontSize: scale(40),
    lineHeight: scale(50),
    width: scale(310),
},
});
