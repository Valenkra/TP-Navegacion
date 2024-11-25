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
import { useCallback } from "react";
import numFormatter from "@/helpers/numFormatter";
import { useContactContext } from "@/context/contactContext";
import Alerta from "@/components/Alerta";
import { useThemeColor } from "@/hooks/useThemeColor";
import TextAreaInput from "@/components/TextAreaInput";
import CellInfoSlot from "@/components/CellInfoSlot";

const ContactInfo = ({ route, navigation }) => {
    const { contact } = route.params;
    const { EC_id, contacts, setContacts, EC_msg, setEC_msg, setEC_phone } = useContactContext();
    const [pressed, setPressed] = useState(false);
    const [isEmergency, setIsEmergency] = useState((contact.id == EC_id) ? true : false);
    const [confirmarCambio, setConfirmarCambio] = useState(false);

    const handleConfirmarCambio = useCallback(() => {
        setContacts(contacts.map(myContact =>
            myContact.id === contact.id
                ? { ...myContact, emergencyContact: !myContact.emergencyContact }
                : { ...myContact, emergencyContact: false }
        ));
        setIsEmergency(prevIsEmergency => !prevIsEmergency);
        setConfirmarCambio(false);
        setPressed(false);
    }, [contacts, contact.id, setContacts]);

    useEffect(() => {
        if (confirmarCambio) {
            handleConfirmarCambio();
        }
    }, [confirmarCambio, handleConfirmarCambio]);

    
    return(
        <SafeAreaView style={[styles.container, { backgroundColor: useThemeColor({light: '', dark: ''}, 'background') }]} onTouchStart={()=>Keyboard.dismiss()}>

            {
                (pressed == true) &&
                    <Alerta
                    title="Actualizar contacto de emergencia"
                    description={(EC_id != null && isEmergency == true) ? 
                                    "Estas por quitar a tu contacto de emergencia. Vas a perder el mensaje preestablecido."
                                : (EC_id != null && isEmergency == false) ? "Ya tienes un contacto de emergencia establecido. ¿Deseas cambiarlo?" :
                                    `Estas por definir a ${contact.name} como tu contacto de emergencia.`}
                    trueButton="Actualizar"
                    falseButton="Cancelar"
                    setModalVisible={setPressed}
                    modalVisible={pressed}
                    setBool={setConfirmarCambio}
                /> 
            }

            <Back navigation={navigation}/>
            <View style={styles.titleContainer}>
                <MyText type='title'style={[styles.contacto, { backgroundColor: useThemeColor({light: '', dark: ''}, 'background') }]}>{contact.name}</MyText>
            </View>
            <DefineEmergencyContact 
                isEmergency={isEmergency}
                setPressed={setPressed}
            />
            <CellInfoSlot
                label="celular"
                value={numFormatter.format(contact.phoneNumbers[0].digits)}
                valueStyle={{color: useThemeColor({light: '', dark: ''}, 'primary')}}
            />
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