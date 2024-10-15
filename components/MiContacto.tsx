import React, { useState } from "react";
import { View, StyleSheet, Text, TextStyle, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import { generateBoxShadowStyle } from "@/utilities/generateBoxShadow";
import { MyText } from "./MyText";
import { Dimensions } from "react-native";
import { NavigationAction } from "@react-navigation/native";
import { useNavigation } from "expo-router";

interface ContactoProps {
  name: string;
  number: string;
  lastName?: string;
  id?: string;
  nav?: object;
  onPress?: (id: string) => void;
}

const MARGIN = 20;
export default function MiContacto({ name, number, id, lastName, onPress, nav }: ContactoProps) {

  return (
    <View style={[{flexDirection: 'column', alignItems: 'flex-start'}, styles.container]}>
        <View>
          <View>
            
          </View>
          <View>
            <MyText
            type="subtitle"
            value={name}
            numberOfLines={1}
            style={{width: Dimensions.get('window').width - scale(MARGIN)* 2 - scale(10),
                    fontSize: scale(20), marginBottom: 3}}
            />
            <MyText 
                type="default"
                value={number}
                style={styles.number}
            />
          </View>
        </View>

        <View style={styles.div}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width: Dimensions.get('screen').width - scale(MARGIN)* 2,
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    marginTop: scale(15),
  },
  div: {
    width: '100%',
    height: scale(1),
    backgroundColor: '#2b2b2b',
    marginTop: scale(15)
  },
  number: {
    fontSize: scale(15),
    lineHeight: scale(20)
  }
});