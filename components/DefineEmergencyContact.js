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
import { useThemeColor } from "@/hooks/useThemeColor";
import { State } from "react-native-gesture-handler";
import { DeviceEventEmitter } from "react-native";
import { useContactContext } from "@/context/contactContext";

export default function DefineEmergencyContact({ isEmergency, setPressed }) {
    return (
            <Pressable onPress={() => setPressed(true)} style={[styles.container, 
                (isEmergency) ? { backgroundColor: useThemeColor({light: '', dark: ''}, 'red') } 
                : { backgroundColor: useThemeColor({light: '', dark: ''}, 'lightGray') }]} >
                <MyText
                    type="default"
                    value={(isEmergency) ? "Quitar como contacto de emergencia" : "Establecer contacto de emergencia" }
                    style={[styles.littleText, (isEmergency) ? 
                                    { color: useThemeColor({light: '', dark: ''}, 'text') } : 
                                    { color: useThemeColor({light: '', dark: ''}, 'text') }]}
                />
                {
                <Ionicons size={20} style={styles.icon} name={'shield'} color={(isEmergency === false) ? Colors.dark.red : Colors.dark.white}/>
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
        height: scale(50),
    },
    littleText: {
        fontSize: scale(14),
        lineHeight: scale(15)
    },
    icon: {
        position: 'absolute',
        left: Dimensions.get("screen").width - scale(80)
    }
});