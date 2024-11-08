import { StyleSheet, Image, Platform, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import { MyText } from '@/components/MyText';
import { Colors } from '@/constants/Colors';
import { Dimensions } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import * as Contacts from 'expo-contacts';
import { useContext, useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import MiContacto from '@/components/MiContacto';
import { FlatList } from 'react-native';
import { scale } from 'react-native-size-matters';
import NavigationContainer from '@react-navigation/native';
import { Text } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { updateContact } from 'react-native-contacts';
import { DeviceEventEmitter } from 'react-native';
import ContactContextProvider, { ContactContext } from '@/context/contactContext';
import { useContactContext } from '@/context/contactContext';
import { DeviceMotion } from 'expo-sensors';

export const MARGIN = 20;

const Contacto = ({ navigation }) => {
  const { colors } = useTheme();
  const { contacts, setContacts } = useContactContext();


  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.FirstName,
            Contacts.Fields.PhoneNumbers,
            Contacts.Fields.Image]
        });
        if (data.length > 0) {
          setContacts(() => [...data]);
        }
      }
    })();
  }, []);

  const filtrarLista = () => {
    let contactsFiltered =  contacts.filter(c => c["name"] != undefined && c["phoneNumbers"] != undefined);
    for (let i = 0; i < contactsFiltered.length; i++) {
      if(contactsFiltered[i].emergencyContact == undefined){
          contactsFiltered[i].emergencyContact = false;
      }
      
    }
    contactsFiltered[3].emergencyContact = true;
    return contactsFiltered.sort(function(a, b){
      let n1 = new String(a["name"]);
      let n2 = new String(b["name"]);
      return n1.localeCompare(n2);
    });
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: useThemeColor({light: '', dark: ''}, 'background') }]}>   
        <View style={styles.titleContainer}>
          <MyText
            type='title'
            style={[styles.contacto, {color: useThemeColor({light: '', dark: ''}, 'text')}]}
          >Contactos</MyText>
        </View>
        <FlatList
              directionalLockEnabled={true}
              horizontal={false}
              data={(contacts[0] !== undefined) ? filtrarLista() : ""}
              renderItem={({item}) => (
                <Pressable onPress={()=>
                  { 
                    navigation.navigate("ContactInfo", 
                    {
                      contact: item
                    })}}>

                  <MiContacto 
                    name={item.name} 
                    myNum={ item.phoneNumbers[0].digits } 
                    isEmergency={ item.emergencyContact }
                    lastName={ (item.lastName != undefined) ? item.lastName : "-1" }
                    firstName={ (item.firstName != undefined) ? item.firstName : "-1" }
                  />
                </Pressable>)}
              keyExtractor={item => item.id}
            />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    display:'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: scale(20)
  },
  container: {
    height: Dimensions.get('window').height,
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: scale(MARGIN),
    paddingTop: scale(20),
  },
  contacto:{
    fontSize: scale(35),
    lineHeight: scale(40)
  }
});

export default Contacto;
