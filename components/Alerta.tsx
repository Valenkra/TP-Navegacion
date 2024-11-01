import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, TextInputProps, TextStyle } from "react-native";
import { Pressable } from "react-native";
import { ViewStyle } from "react-native-size-matters";
import { Colors } from "@/constants/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import { generateBoxShadowStyle } from "@/utilities/generateBoxShadow";
import { Appearance } from "react-native";
import { Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MyText } from "./MyText";

interface AlertProps {
  description: string;
  trueButton: string;
  falseButton: string;
}

export default function Alerta({ description, trueButton, falseButton }: AlertProps) {


  return (
    <SafeAreaView style={styles.container}>
        <View style={{flexDirection: 'column', alignItems: 'flex-start'}}>
            <MyText 
                type="default"
            />
            <Pressable onPress={onPress}>
                <
            </Pressable>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("screen").height}
    }
});