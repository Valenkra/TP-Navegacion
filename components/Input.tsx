import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, TextInputProps, TextStyle } from "react-native";
import { Colors } from "@/constants/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import { generateBoxShadowStyle } from "@/utilities/generateBoxShadow";

interface InputProps extends TextInputProps {
  label: string;
  size: "normal" | "large" ;
  placeholder: string;
  //onChangeText: (text: string) => void;
  type?: "password";
  value?: string;
  optionalStyle?: TextStyle;
}

export default function Input({ label, size, placeholder, onChangeText, type, value, optionalStyle, ...rest }: InputProps) {
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

  // Creo que cuando se escribe un valor en el input de tipo password, se escribe, pero cuando se alterna de estado a oculto, se reinicia el valor del input

  return (
    <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
        <Text style={styles.label}>{label}</Text>
        <View style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}, generateBoxShadowStyle(0, verticalScale(1.66), Colors.light.background, 0.52, 2, 5), optionalStyle]}>
          <TextInput
            cursorColor={Colors.light.background}
            secureTextEntry={!showPassword}
            style={getInputStyles(size, isActive)}
            placeholder={placeholder} 
            placeholderTextColor="grey"
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={onChangeText}
            value={value}
            {...rest}
          />
        </View>
    </View>
  );
}

function getInputStyles(size: InputProps['size'], isActive: boolean) {
  return [
    styles.input,
    isActive ? styles.active : null,
    size === "normal" ? styles.normal : styles.large
  ];
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    width: scale(263.85),
    backgroundColor: Colors.dark.background,
    color: Colors.light.background,
    paddingLeft: scale(14.36)
  },
  active: {
    borderWidth: 1,
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
    fontSize: scale(12.6),
    color: Colors.light.background,
    marginBottom: scale(3.6)
  },
  icon: { 
    marginLeft: scale(-28.75), 
  },
  inputContainer: {
    padding: 10,
    backgroundColor: 'white',
  },
});