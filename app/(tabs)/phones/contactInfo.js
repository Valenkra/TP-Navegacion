import { MyText } from "@/components/MyText";
import { View, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";
import { Colors } from "@/constants/Colors";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Back from "@/components/Back";
import DefineEmergencyContact from "@/components/DefineEmergencyContact";
import { useContext, useEffect, useState } from "react";
import { Keyboard } from "react-native";
import numFormatter from "@/helpers/numFormatter";
import contactContext from "@/context/contactContext";
import { useContactContext } from "@/context/contactContext";
import Alerta from "@/components/Alerta";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Modal } from "react-native";
import { Pressable, Text } from "react-native";
import Input from "@/components/Input";
import TextAreaInput from "@/components/TextAreaInput";

const ContactInfo = ({ route, navigation }) => {
    const { contact } = route.params;
    const { setEC_id, EC_id, contacts, setContacts, EC_msg, setEC_msg } = useContactContext();
    const [pressed, setPressed] = useState(false);
    const [isEmergency, setIsEmergency] = useState((contact.id == EC_id));
    const [confirmarCambio, setConfirmarCambio] = useState(false);

    useEffect(()=>{setIsEmergency(contact.emergencyContact)},[])

    useEffect(() => {
        if(isEmergency == true){
            setEC_id(contact.id);
            setPressed(false);
            setContacts(contacts.map(myContact =>
                myContact.id === contact.id
                    ? { ...myContact, emergencyContact: !myContact.emergencyContact }
                    : { ...myContact, emergencyContact: false }
                )
            )
            setIsEmergency(!isEmergency)
        }
    }, [pressed])

    useEffect(() => {
        if(confirmarCambio == true){
            setEC_id(contact.id);
            setPressed(false);
            setContacts(contacts.map(myContact =>
                myContact.id === contact.id
                    ? { ...myContact, emergencyContact: !myContact.emergencyContact }
                    : { ...myContact, emergencyContact: false }
                )
            )
            setEC_msg(null);
            setIsEmergency(!isEmergency);
        }
    }, [confirmarCambio])

    return(
        <SafeAreaView style={styles.container} onTouchStart={()=>Keyboard.dismiss()}>
            {
                (isEmergency == false && EC_id != undefined) ? 
                    <Alerta
                    title="Actualizar contacto de emergencia"
                    description="Ya tienes un contacto de emergencia establecido. ¿Deseas cambiarlo?"
                    trueButton="Actualizar"
                    falseButton="Cancelar"
                    setModalVisible={setPressed}
                    modalVisible={pressed}
                    setBool={setConfirmarCambio}
                /> : ""
            }

            <Back navigation={navigation}/>
            <View style={styles.titleContainer}>
                <MyText type='title'style={styles.contacto}>{contact.name}</MyText>
            </View>
            <DefineEmergencyContact 
                isEmergency={isEmergency}
                setPressed={setPressed}
            />
            <View style={[styles.elementContainer,
            { backgroundColor: useThemeColor({light: '', dark: ''}, 'lightGray') } ]}>
                <MyText type="default" style={{fontSize: scale(14)}}>celular</MyText>
                <MyText style={{ fontSize: scale(16), color: useThemeColor({light: '', dark: ''}, 'primary') }}>{numFormatter.format(contact.phoneNumbers[0].digits)}</MyText>
            </View>
            <TextAreaInput
                placeholder="Hola! Si te llegó este mensaje es porque estoy en una emergencia..."
                disabled={!isEmergency}
                value={(!isEmergency) ? "" : EC_msg}
                label="Mensaje de emergencia"
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
        paddingHorizontal: scale(20),
        paddingTop: scale(20),
      },
    contacto:{
        fontSize: scale(40),
        lineHeight: scale(50),
        width: scale(310),
        color: Colors.dark.white
    },
    elementContainer:{
        display: 'flex',
        borderRadius: scale(12),
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingHorizontal: scale(20),
        paddingVertical: scale(10),
        width: Dimensions.get("screen").width - scale(40),
        marginTop: scale(10),
    },
});
      

export default ContactInfo;