import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, TextInputProps, TextStyle } from "react-native";
import { Pressable } from "react-native";
import { ViewStyle } from "react-native-size-matters";
import { Colors } from "@/constants/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import { generateBoxShadowStyle } from "@/utilities/generateBoxShadow";

interface ButtonProps {
  label: string;
  size: "small" | "regular" | "large" ;
  type: "primary" | "secondary";
  onPress?: () => true | Promise<void> | void;
  disabled?: boolean;
  style?: ViewStyle;
  labelStyle?: TextStyle;
}

export default function Button({ label, size, type, onPress, disabled, style, labelStyle}: ButtonProps) {

  return (
    <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
        <Pressable style={getButtonStyle(size, type)}>
            <Text style={{color: Colors.dark.background}}>{label}</Text>
        </Pressable>
    </View>
  );
}

function getButtonStyle( size: ButtonProps['size'], type: ButtonProps['type']) {
    return [
        (size === "small") ? styles.small : (size === "large") ? styles.large : styles.regular,
        (type === "primary") ? styles.primary : styles.secondary,
        styles.btn
    ];
}

const styles = StyleSheet.create({
  btn: {
    borderRadius: scale(10),
  },
  small: {
    padding: scale(20)
  },
  regular: {
    padding: scale(25)
  },
  large: {
    padding: scale(30)
  },
  primary: {
    backgroundColor: Colors.dark.blue,
  },
  secondary: {

  }
});