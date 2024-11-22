import { MyText } from "@/components/MyText";
import { View, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";
import { Colors } from "@/constants/Colors";
import { Dimensions } from "react-native";
import Back from "@/components/Back";
import DefineEmergencyContact from "@/components/DefineEmergencyContact";
import { useContext, useEffect, useState } from "react";
import { Keyboard } from "react-native";
import numFormatter from "@/helpers/numFormatter";
import { useContactContext } from "@/context/contactContext";
import Alerta from "@/components/Alerta";
import { useThemeColor } from "@/hooks/useThemeColor";
import TextAreaInput from "@/components/TextAreaInput";

const ContactInfo = ({ route, navigation }) => {
    const { contact } = route.params;
    const { EC_id, contacts, setContacts, EC_msg, setEC_msg, setEC_phone } = useContactContext();
    const [pressed, setPressed] = useState(false);
    const [isEmergency, setIsEmergency] = useState((contact.id == EC_id)? true : false);
    const [confirmarCambio, setConfirmarCambio] = useState(false);
    const [abriModal, setAbriModal] = useState(false);
    let temp = 0;

    useEffect(() => {
        if(isEmergency == true && abriModal == true){
            setPressed(false);
            setAbriModal(false);
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
            if(abriModal)setPressed(false);
            setEC_phone(contact.phoneNumbers[0].digits)
            setContacts(contacts.map(myContact =>
                myContact.id === contact.id
                    ? { ...myContact, emergencyContact: true }
                    : { ...myContact, emergencyContact: false }
                )
            )
            setEC_msg(null);
            setConfirmarCambio(false);
            setIsEmergency(!isEmergency);
        }
    }, [confirmarCambio])

    return(
        <SafeAreaView style={[styles.container, { backgroundColor: useThemeColor({light: '', dark: ''}, 'background') }]} onTouchStart={()=>Keyboard.dismiss()}>
            {
                (isEmergency == false && EC_id != undefined && EC_id != null) ? 
                    <Alerta
                    title="Actualizar contacto de emergencia"
                    description="Ya tienes un contacto de emergencia establecido. ¿Deseas cambiarlo?"
                    trueButton="Actualizar"
                    falseButton="Cancelar"
                    setModalVisible={setPressed}
                    modalVisible={pressed}
                    setBool={setConfirmarCambio}
                    setAbriModal={setAbriModal}
                /> : ""
            }

            {
                (pressed == true && EC_id == null) ? setConfirmarCambio(true) : ""
            }

            <Back navigation={navigation}/>
            <View style={styles.titleContainer}>
                <MyText type='title'style={[styles.contacto, { backgroundColor: useThemeColor({light: '', dark: ''}, 'background') }]}>{contact.name}</MyText>
            </View>
            <DefineEmergencyContact 
                isEmergency={isEmergency}
                setPressed={setPressed}
            />
            <View style={[styles.elementContainer,
            { backgroundColor: useThemeColor({light: '', dark: ''}, 'lightGray') } ]}>
                <MyText type="default" style={{fontSize: scale(14), color: useThemeColor({light: '', dark: ''}, 'text') }}>celular</MyText>
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
        paddingHorizontal: scale(20),
        paddingTop: scale(20),
      },
    contacto:{
        fontSize: scale(40),
        lineHeight: scale(50),
        width: scale(310),
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