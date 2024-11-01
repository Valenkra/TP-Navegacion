import React, { useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { scale } from "react-native-size-matters";
import { MyText } from "./MyText";
import { Modal } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";

interface AlertProps {
    title: string;
    description: string;
    trueButton: string;
    falseButton: string;
    setBool: React.Dispatch<React.SetStateAction<boolean | null>>;
    modalVisible: boolean;
    setModalVisible: React.Dispatch<React.SetStateAction<boolean | null>>;
}

export default function Alerta({ description, trueButton, falseButton, title, setBool, setModalVisible, modalVisible }: AlertProps) {

  return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(!modalVisible)}
            >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <MyText style={[styles.titleMyText,
                    { color: useThemeColor({light: '', dark: '#000000'}, 'text') }]}>{title}</MyText>
                    <MyText style={styles.descriptionMyText}>{description}</MyText>
                    <View style={styles.buttonContainer}>
                        <Pressable
                            style={styles.button}
                            onPress={() => {setBool(true); setModalVisible(!modalVisible)}}
                        >
                        <MyText style={styles.buttonCancel}>{trueButton}</MyText>
                        </Pressable>
                        <Pressable
                            style={styles.button}
                            onPress={() => {{ setBool(false); setModalVisible(!modalVisible)}}}
                        >
                        <MyText style={styles.buttonConfirm}>{falseButton}</MyText>
                        </Pressable>
                    </View>
                </View>
            </View>
            </Modal>
  );
}


const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Fondo oscuro para modal iOS
      },
      modalView: {
        width: scale(280), // Ajuste de ancho del modal
        backgroundColor: 'white',
        borderRadius: scale(10),
        padding: scale(20),
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
      titleMyText: {
        fontSize: scale(18),
        fontWeight: '600',
        marginBottom: scale(10),
        textAlign: 'center',
      },
      descriptionMyText: {
        fontSize: scale(14),
        color: '#555',
        marginBottom: scale(20),
        textAlign: 'center',
      },
      buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        borderTopWidth: 1,
        borderColor: '#ddd',
      },
      button: {
        flex: 1,
        alignItems: 'center',
        marginTop: scale(16),
      },
      buttonCancel: {
        color: '#007AFF', // Estilo azul de iOS
        fontWeight: '600',
      },
      buttonConfirm: {
        color: '#FF3B30', // Color rojo para confirmar
        fontWeight: '600',
      },
});
      