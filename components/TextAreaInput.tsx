import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, TextInputProps, TextStyle } from "react-native";
import { Colors } from "@/constants/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import { Dimensions } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { generateBoxShadowStyle } from "@/utilities/generateBoxShadow";
import { MyText } from "./MyText";
import { Keyboard } from "react-native";

interface InputProps extends TextInputProps {
    label: string;
    placeholder: string;
    disabled?: boolean;
}

export default function TextAreaInput({ style, label, placeholder, disabled = false, ...rest }: InputProps) {
  return (
    <View style={styles.container} onTouchStart={()=>Keyboard.dismiss()}>
        <MyText type="default" style={{fontSize: scale(14)}}>{label}</MyText>
        <View style={[styles.elementContainer, styles.msgContainer, 
            { backgroundColor: useThemeColor({light: '', dark: ''}, ((disabled == true) ? 'darkGray' : 'lightGray')) } ]}>
                <TextInput onSubmitEditing={Keyboard.dismiss} blurOnSubmit={true} multiline={true} numberOfLines={10} style={[{fontSize: scale(14)},
                    { color: useThemeColor({light: '', dark: ''}, ((disabled == true) ? 'lightGray' : 'text')) } ]} 
                    editable={!disabled} placeholder={placeholder}>
                </TextInput>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        borderRadius: scale(12),
        justifyContent: 'flex-start',
        flexDirection: 'column',
        marginTop: scale(10),
    },
    elementContainer:{
        display: 'flex',
        borderRadius: scale(12),
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingHorizontal: scale(20),
        paddingVertical: scale(15),
        width: Dimensions.get("screen").width - scale(40),
    },
    msgContainer: {
        minHeight: scale(150)
    }
});