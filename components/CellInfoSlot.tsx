import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextStyle, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import { MyText } from "./MyText";
import { useColorScheme } from "react-native";
import { Dimensions } from "react-native";
import { StyleProp } from "react-native";
import numFormatter from "@/helpers/numFormatter";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor";

interface CellInfoProps {
    label: string;
    value: string;
    valueStyle?: StyleProp<TextStyle> | undefined;
}

export default function CellInfoSlot({ label, value, valueStyle }: CellInfoProps) {
    const colorScheme = useColorScheme();
    
    return (
    <View style={[styles.elementContainer,
        { backgroundColor: useThemeColor({light: '', dark: ''}, 'lightGray') } ]}>
            <MyText type="default" style={{fontSize: scale(14), color: useThemeColor({light: '', dark: ''}, (colorScheme === 'light') ? 'darkGray' : 'text') }}>{label}</MyText>
            <MyText style={[{ fontSize: scale(16), color: useThemeColor({light: '', dark: ''}, 'text') }, valueStyle]}>{value}</MyText>
        </View>
    );
}

const styles = StyleSheet.create({
    elementContainer:{
        display: 'flex',
        borderRadius: scale(12),
        justifyContent: 'flex-start',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingHorizontal: scale(20),
        paddingVertical: scale(10),
        width: Dimensions.get("screen").width - scale(40),
        marginTop: scale(10),
    }
});