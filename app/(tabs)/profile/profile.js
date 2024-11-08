import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import { MyText } from '@/components/MyText';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import * as ImagePicker from 'expo-image-picker';
import { scale } from 'react-native-size-matters';

export default function MyProfile() {
  const navigation = useNavigation();
  const [isEditing, setIsEditing] = React.useState(false);
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [birthdate, setBirthdate] = React.useState("");
  const [profileImage, setProfileImage] = React.useState(null);

  const toggleEdit = () => setIsEditing(!isEditing);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={24}
          color="#A1A1A1"
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        />
        <MyText type="title" style={styles.title}>Perfil</MyText>
      </View>

      <View style={styles.profileContainer}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            source={{
              uri: profileImage
                ? profileImage
                : 'https://media.istockphoto.com/id/1495088043/es/vector/icono-de-perfil-de-usuario-avatar-o-icono-de-persona-foto-de-perfil-s%C3%ADmbolo-de-retrato.jpg?s=612x612&w=0&k=20&c=mY3gnj2lU7khgLhV6dQBNqomEGj3ayWH-xtpYuCXrzk=',
            }}
            style={styles.profileImage}
          />
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <Input
            label="Nombre"
            size="normal"
            placeholder="Nombre"
            value={name}
            onChangeText={setName}
            editable={isEditing}
            optionalStyle={styles.input}
          />
          <Input
            label="Teléfono"
            size="normal"
            placeholder="Teléfono"
            value={phone}
            onChangeText={setPhone}
            editable={isEditing}
            optionalStyle={styles.input}
          />
          <Input
            label="Fecha de nacimiento"
            size="normal"
            placeholder="Fecha de nacimiento"
            value={birthdate}
            onChangeText={setBirthdate}
            editable={isEditing}
            optionalStyle={styles.input}
          />
        </View>

        <Button
          label={isEditing ? "Guardar" : "Editar"}
          size="medium"
          type="primary"
          style={styles.editButton}
          onPress={toggleEdit}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    paddingHorizontal: scale(16),
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: scale(40),
    left: scale(16),
  },
  backButton: {
    marginRight: scale(8),
  },
  title: {
    fontSize: scale(18),
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  profileContainer: {
    width: '90%',
    backgroundColor: '#2C2C2E',
    borderRadius: scale(20),
    paddingVertical: scale(20),
    paddingHorizontal: scale(20),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  profileImage: {
    width: scale(120),
    height: scale(120),
    borderRadius: scale(60),
    marginBottom: scale(20),
    borderWidth: 3,
    borderColor: '#A1A1A1',
  },
  infoContainer: {
    width: '100%',
    marginTop: scale(10),
    marginBottom: scale(20),
  },
  input: {
    width: '100%',
    marginVertical: scale(8),
    borderRadius: scale(10),
    padding: scale(10),
  },
  editButton: {
    backgroundColor: '#A10000',
    marginTop: scale(10),
    width: '60%',
    height: scale(45),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
});
