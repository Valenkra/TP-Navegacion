import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, TextInputProps, TextStyle } from "react-native";
import { Pressable } from "react-native";
import { ViewStyle } from "react-native-size-matters";
import { Colors } from "@/constants/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import { generateBoxShadowStyle } from "@/utilities/generateBoxShadow";
import { Appearance } from "react-native";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MyText } from "./MyText";
import { State } from "react-native-gesture-handler";

export default function DefineEmergencyContact({ contact, setContact }) {
    const changeState = () => {
        let updateC = contact;
        updateC.emergencyContact = (contact.emergencyContact == true) ? false : true;
        setContact(updateC);
    }
  return (
        <Pressable onPress={() => changeState()} style={[styles.container, (contact.emergencyContact) ? styles.onContainer : styles.offContainer]}>
            <MyText
                type="default"
                value={(contact.emergencyContact) ? "Quitar como contacto de emergencia" : "Establecer contacto de emergencia" }
                style={[styles.littleText, (contact.emergencyContact) ? styles.onContainer : styles.offContainer]}
            />
            {
          <Ionicons size={20} style={[{marginLeft: 5}]} name={'shield'} color={(contact.emergencyContact) ? Colors.dark.red : Colors.dark.white}/>
        }
        </Pressable>
  );
}

const styles = StyleSheet.create({
    offContainer: {
        backgroundColor: Colors.dark.lightGray
    },
    container: {
        display: 'flex',
        borderRadius: scale(12),
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: scale(20),
        width: Dimensions.get("screen").width - scale(40),
        height: scale(50)
    },
    onContainer: {
        backgroundColor: Colors.dark.whiteLess,
        color: Colors.dark.background
    },
    littleText: {
        fontSize: scale(15),
        lineHeight: scale(20)
    }
});