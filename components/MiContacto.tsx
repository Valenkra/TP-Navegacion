import React, { useState } from "react";
import { View, StyleSheet, Text, TextStyle, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import { generateBoxShadowStyle } from "@/utilities/generateBoxShadow";
import { MyText } from "./MyText";

interface ContactoProps {
  name: string;
  id: string;
  onPress?: (id: string) => void;
}

export default function MiContacto({ name, id, onPress }: ContactoProps) {
  return (
    <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
        <MyText
        type="default"
        value={name}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  Contacto: {
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
  ContactoContainer: {
    padding: 10,
    backgroundColor: 'white',
  },
});