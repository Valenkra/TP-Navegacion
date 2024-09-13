import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, TextInputProps, TextStyle } from "react-native";
import { Pressable } from "react-native";
import { ViewStyle } from "react-native-size-matters";
import { Colors } from "@/constants/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import { generateBoxShadowStyle } from "@/utilities/generateBoxShadow";
import { Appearance } from "react-native";
import { Dimensions } from "react-native";

interface ButtonProps {
  label: string;
  size: "small" | "regular" | "large" ;
  type: "primary" | "secondary";
  onPress?: () => true | Promise<void> | void;
  disabled?: boolean;
  style?: ViewStyle;
  labelStyle?: TextStyle;
}

export default function Button({ label, size, type, onPress, disabled = false, style, labelStyle}: ButtonProps) {

  return (
    <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
        <Pressable onPress={onPress} style={getButtonStyle(size, type)}>
            <Text style={getLabelStyle(type, size)}>{label}</Text>
        </Pressable>
    </View>
  );
}

function getButtonStyle( size: ButtonProps['size'], type: ButtonProps['type']) {
    return [
        (size === "small") ? styles.small : (size === "large") ? styles.large : styles.regular,
        (type === "primary") ? styles.primary : styles.secondary,
        styles.btn,

    ];
}

function getLabelStyle(type: ButtonProps['type'], size: ButtonProps['size']){
  return [
    (size === "regular") ? styles.labelRegularSize : styles.labelSmallerSize,
    (size === "large") ? styles.labelBold : styles.labelSemiBold,
    styles.label
  ]
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: scale(15),
    shadowOpacity: 0.3,
    elevation: 3,
    shadowRadius: 10 ,
    shadowOffset : { width: 1, height: 7},
  },
  small: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(10)
  },
  regular: {
    paddingHorizontal: scale(35),
    paddingVertical: scale(15)
  },
  large: {
    display: 'flex',
    alignItems: 'center',
    width: Dimensions.get('window').width - scale(65),
    paddingVertical: scale(15)
  },
  label: {
    color: (Appearance.getColorScheme() === "dark") ? Colors.dark.text : Colors.light.text,
  },
  labelSemiBold: {
    fontWeight: '600',
  },
  labelRegularSize: {
    fontSize: scale(14)
  },
  labelSmallerSize: {
    fontSize: scale(12)
  },
  labelBold: {
    fontWeight: 'bold',
    fontSize: scale(16),
  },
  primary: {
    backgroundColor:  (Appearance.getColorScheme() === "dark") ?  Colors.dark.primary : Colors.light.primary,
    shadowColor: Colors.dark.primaryAccent,
  },
  secondary: {
    backgroundColor:  (Appearance.getColorScheme() === "dark") ?  Colors.dark.secondary : Colors.light.secondary,
    shadowColor: Colors.dark.primaryAccent,
  }
});