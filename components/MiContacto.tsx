import React, { useState } from "react";
import { View, StyleSheet, Text, TextStyle, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import { generateBoxShadowStyle } from "@/utilities/generateBoxShadow";
import { MyText } from "./MyText";
import { Dimensions } from "react-native";

interface ContactoProps {
  name: string;
  id?: string;
  onPress?: (id: string) => void;
}

export default function MiContacto({ name }: ContactoProps) {
  return (
    <View style={[{flexDirection: 'column', alignItems: 'flex-start'}, styles.container]}>
        <MyText
        type="default"
        value={name}
        />
        <View style={styles.div}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width: '100%',
    flexGrow: 1,
    paddingRight: scale(50),
    display: 'flex',
    justifyContent: 'center',
    marginTop: scale(10)
  },
  div: {
    width: '100%',
    height: scale(1),
    backgroundColor: '#919191',
    marginTop: scale(5)
  }
});