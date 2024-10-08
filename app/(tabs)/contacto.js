import { StyleSheet, Image, Platform } from 'react-native';
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
import { Text } from 'react-native';

const Contacto = ({ navigation }) => {
  const [contactos, setContactos] = useState();
  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.FirstName]
        });

        if (data.length > 0) {
          setContactos([...data]);
        }
      }
    })();
  }, []);

  const filtrarLista = () => {
    return contactos.filter(c => c["name"] !== "");
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
            renderItem={({item}) => <MiContacto name={item.name}/>}
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
    alignItems: 'flex-start'
  },
  container: {
    backgroundColor: Colors.dark.background,
    height: Dimensions.get('window').height,
    flex: 1,
    alignItems: 'flex-start',
    paddingHorizontal: scale(30),
    paddingTop: scale(20),
  },
  contacto: {
    fontSize: scale(40),
    lineHeight: scale(40)
  },
  item: {
  },
});

export default Contacto;
