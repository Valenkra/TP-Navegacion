import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextStyle, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import { generateBoxShadowStyle } from "@/utilities/generateBoxShadow";
import { MyText } from "./MyText";
import { Dimensions } from "react-native";
import { NavigationAction } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import numFormatter from "@/helpers/numFormatter";

interface ContactoProps {
  name: string;
  myNum: string;
  lastName?: string;
  firstName?: string;
  id?: string;
  nav?: object;
  onPress?: (id: string) => void;
}

const MARGIN = 20;
export default function MiContacto({ name, myNum, id, lastName, firstName, onPress, nav }: ContactoProps) {
  return (
    <View style={[{flexDirection: 'column', alignItems: 'flex-start'}, styles.container]}>
        <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
          <View style={styles.profilePicture}>
            <MyText 
              type="default"
              value={(firstName != "-1" && lastName != "-1") ? (`${firstName[0]} ${lastName[0]}`) : name[0]}
            />
          </View>
          <View>
            <MyText
            type="subtitle"
            value={name}
            numberOfLines={1}
            style={{width: Dimensions.get('window').width - scale(MARGIN)* 2 - scale(80),
                    fontSize: scale(20), marginBottom: 3}}
            />
            <MyText 
                type="default"
                value={numFormatter.format(myNum)}
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
  },
  profilePicture: {
    width: 70,
    height: 70,
    backgroundColor: Colors.dark.primary,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scale(15)
  }
});