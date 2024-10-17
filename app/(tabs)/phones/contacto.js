import { StyleSheet, Image, Platform, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MyText } from '@/components/MyText';
import { Colors } from '@/constants/Colors';
import { Dimensions } from 'react-native';
import { PermissionsAndroid } from 'react-native';
import * as Contacts from 'expo-contacts';
import { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import MiContacto from '@/components/MiContacto';
import { FlatList } from 'react-native';
import { scale } from 'react-native-size-matters';
import NavigationContainer from '@react-navigation/native';
import { Text } from 'react-native';
export const MARGIN = 20;

const Contacto = ({ navigation }) => {
  const [contactos, setContactos] = useState();
  const [myContact, setMyContact] = useState();

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
          setContactos([...data]);
        }
      }
    })();
  }, []);

  const defineContact = async (item) => {
    return setMyContact(item);
  }

  const filtrarLista = () => {

    let contactsFiltered =  contactos.filter(c => c["name"] != undefined && c["phoneNumbers"] != undefined);
    for (let i = 0; i < contactsFiltered.length; i++) {
      contactsFiltered[i].emergencyContact = false;
      
    }
    contactsFiltered[3].emergencyContact = true;
    return contactsFiltered;
  }

  return (
      <SafeAreaView style={styles.container}>
        <View style={styles.titleContainer}>
          <MyText
            type='title'
            value='Contactos'
            style={styles.contacto}
          />
        </View>
        <FlatList
              directionalLockEnabled={true}
              horizontal={false}
              data={(contactos !== undefined) ? filtrarLista() : ""}
              renderItem={({item}) => (
                <Pressable onPress={()=>
                  { 
                    defineContact(item); 
                    console.log(myContact)
                    
                    navigation.navigate("ContactInfo", 
                    {
                      contact: myContact,
                      setMyContact: {setMyContact}
                    })}}>

                  <MiContacto 
                    name={item.name} 
                    myNum={ item.phoneNumbers[0].digits } 
                    isEmergency={item.emergencyContact}
                    lastName={ (item.lastName != undefined) ? item.lastName : "-1"}
                    firstName={ (item.firstName != undefined) ? item.firstName : "-1"}
                    ></MiContacto>
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
    backgroundColor: Colors.dark.background,
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
