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

  const mostrarContactos = () =>{ contactos.map(async (c) => {
    return (<MiContacto
      name={c.name}
      id={c.id}
      key={c.id}
    />
    )
  })}

/**
 * 
        {
          contactos.map(c => {
            <MiContacto
              name={c.name}
              id={c.id}
              key={c.id}
            />
          })
        }
 */
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.titleContainer}>
          <MyText
            type='title'
            value='Contactos'
          />
          {mostrarContactos()}
        </View>
      </ScrollView>
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
    alignItems: 'center',
  }
});

export default Contacto;
