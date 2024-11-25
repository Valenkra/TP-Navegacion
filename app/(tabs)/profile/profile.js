import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, View, SafeAreaView, Image, TouchableOpacity, Keyboard, Pressable } from 'react-native';
import { Colors } from '@/constants/Colors';
import { MyText } from '@/components/MyText';
import { Text } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { NativeViewGestureHandler, ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Back from '@/components/Back';
import * as React from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, useTheme } from '@react-navigation/native';
import { scale, verticalScale } from 'react-native-size-matters';
import numFormatter from '@/helpers/numFormatter';

const MyProfile = () => {
  const navigation = useNavigation()
  const [isEditing, setIsEditing] = React.useState(true);
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
    <SafeAreaView style={[styles.container, { backgroundColor: useThemeColor({light: '', dark: ''}, 'background') }]}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.titleContainer}>
          <MyText
            type='title'
            style={[styles.perfil, {color: useThemeColor({light: '', dark: ''}, 'text')}]}
          >Mi Perfil</MyText>
        </View>
        <NativeViewGestureHandler onPress={Keyboard.dismiss}>
        <View style={[styles.topContainer, styles.div]}>
          <View style={styles.profileContainer}>
            <TouchableOpacity onPress={pickImage}>
              <Image
                source={{
                  uri: profileImage
                    ? profileImage
                    : 'https://i.imgur.com/BBcoGRe.png',
                }}
                resizeMode='cover'
                style={styles.profileImage}
              />
            </TouchableOpacity>
          </View>
          <Text onPress={pickImage} style={[styles.editar, {color: useThemeColor({light: '', dark: ''}, 'secondary')}]}>Editar foto</Text>
        </View>
        </NativeViewGestureHandler>
        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={[styles.infoContainer, styles.div]}>
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
            type='phone-pad'
            onChangeText={(e) => setPhone(numFormatter.realTimeFormatter(e))}
            editable={isEditing}
            optionalStyle={styles.input}
          />
        </ScrollView>
        <NativeViewGestureHandler>
          <View style={styles.btnContainer}>
            <Button
              label="Ver contacto de emergencia"
              size="medium"
              type="secondary"
              onPress={() => navigation.navigate("ProfileConfig")}

            />
          </View>
        </NativeViewGestureHandler>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    justifyContent: 'flex-start',
  },
  div: {
    borderBottomWidth: scale(1),
    borderBottomColor: '#3d3d3d'
  },
  topContainer:{
    display: 'flex',
    flexDirection:'column',
    alignContent: 'center',
    justifyContent: 'center',
    marginVertical: verticalScale(20),
  },
  profileImage: {
    width:'100%',
    height: '100%',
    borderWidth: 3,
    borderColor: '#A1A1A1',
    borderRadius: scale(60),
    marginBottom: scale(20),
  },
  profileContainer:{
    alignSelf: 'center',
    width: scale(120),
    height: scale(100),
  },
  editar: {
    color: '#ffffff',
    textAlign: 'center',
    marginTop: verticalScale(35),
    paddingBottom: verticalScale(20)
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingBottom: scale(25)
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: verticalScale(20)
  },
  perfil: {
    fontSize: scale(35),
    lineHeight: scale(40),
    paddingHorizontal: scale(20),
    paddingTop: scale(20),
  }
});


export default MyProfile;