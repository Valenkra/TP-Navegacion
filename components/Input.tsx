import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, TextInputProps, TextStyle } from "react-native";
import { Colors } from "@/constants/Colors";
import { scale } from "react-native-size-matters";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { Keyboard } from "react-native";
import { useThemeColor } from "@/hooks/useThemeColor";
import { verticalScale } from "react-native-size-matters";
import { Dimensions } from "react-native";

interface InputProps extends TextInputProps {
  label: string;
  size: "normal" | "large";
  placeholder: string;
  type?: "default";
  value?: string;
  optionalStyle?: TextStyle;
  disabled?: boolean;
}

export default function Input({ style, label, size, placeholder, onChangeText, type, value, optionalStyle, disabled = false, ...rest }: InputProps) {
  const [isActive, setIsActive] = useState(false);
  const [showPassword, setShowPassword] = useState(type ? false : true);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleFocus = () => {
    setIsActive(true);
  };

  const handleBlur = () => {
    setIsActive(false);
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.label, {color: useThemeColor({light: '', dark: ''}, 'text')}]}>{label}</Text>
      <TouchableWithoutFeedback style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }, optionalStyle]}>
        <TextInput
          secureTextEntry={!showPassword}
          style={[getInputStyles(size, isActive), style]}
          placeholder={placeholder}
          placeholderTextColor="grey"
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={onChangeText}
          value={value}
          keyboardType={type}
          {...rest}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

function getInputStyles(size: InputProps['size'], isActive: boolean) {
  return [
    styles.input,
    size === "normal" ? styles.normal : styles.large,
    { color: useThemeColor({light: '', dark: ''}, 'text'),
      borderTopColor: useThemeColor({light: '', dark: ''}, (!isActive) ? 'background' : 'background'),
      borderLeftColor: useThemeColor({light: '', dark: ''}, (!isActive) ? 'background' : 'lightGray'),
      borderRightColor: useThemeColor({light: '', dark: ''}, (!isActive) ? 'background' : 'lightGray'),
      borderBottomColor: useThemeColor({light: '', dark: ''}, (!isActive) ? 'darkGray' : 'lightGray')  }
  ];
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: scale(20),
    marginVertical: verticalScale(5),
  },
  input: {
    borderRadius: 12,
    paddingLeft: scale(14.36),
    borderWidth: scale(1),
    marginLeft: scale(6),
    width: Dimensions.get("screen").width - scale(110)
  },
  active: {
    borderColor: Colors.dark.background,
  },
  normal: {
    height: scale(37.7)
  },
  large: {
    height: scale(74.49)
  },
  label: {
    fontFamily: 'Regular',
    color: Colors.light.background,
    width: scale(70),
    textAlign: 'center',
    fontWeight: '600'
  },
});
