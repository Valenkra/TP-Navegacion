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
import CellInfoSlot from '@/components/CellInfoSlot';
import { useContactContext } from '@/context/contactContext';
import TextAreaInput from '@/components/TextAreaInput';
import { useColorScheme } from 'react-native';

export default function MyProfileConfig() {
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const { EC_name, EC_id, EC_phone, EC_msg } = useContactContext();
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: useThemeColor({light: '', dark: ''}, 'background') }]}>
      <Back navigation={navigation}/>
      <View style={styles.titleContainer}>
          <MyText type='title'style={[styles.contacto, { backgroundColor: useThemeColor({light: '', dark: ''}, 'background') }]}>Contacto de Emergencia</MyText>
      </View>
      {
        (EC_id != null) ? 
        <View>
          <CellInfoSlot
            label="nombre"
            value={EC_name}
            />
          <CellInfoSlot
            label="celular"
            value={EC_phone}
            valueStyle={{color: useThemeColor({light: '', dark: ''}, 'primary')}}
            />
          <TextAreaInput
            placeholder="Hola! Si te llegó este mensaje es porque estoy en una emergencia..."
            disabled={false}
            value={EC_msg}
            label="Mensaje de emergencia"
            />
        </View> :
        <View style={styles.noHayContainer}>
          <MyText type="defaultSemiBold"
          style={{textAlign: 'center', color: useThemeColor({light: '', dark: ''}, (colorScheme === 'light') ? 'darkGray' : 'lightGray')}}>
            Vaya! Todavía no has definido ningun contacto de emergencia.
          </MyText>
        </View>
      }
      
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
  noHayContainer: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    paddingLeft: scale(20),
  }
});
