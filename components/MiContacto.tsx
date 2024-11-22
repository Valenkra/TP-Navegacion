import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TextStyle, Pressable } from "react-native";
import { Colors } from "@/constants/Colors";
import { scale, verticalScale } from "react-native-size-matters";
import { MyText } from "./MyText";
import { Dimensions } from "react-native";
import numFormatter from "@/helpers/numFormatter";
import { Ionicons } from "@expo/vector-icons";
import { useThemeColor } from "@/hooks/useThemeColor";

interface ContactoProps {
  name: string;
  myNum: string;
  isEmergency: boolean;
  lastName?: string;
  firstName?: string;
  id?: string;
  nav?: object;
  onPress?: (id: string) => void;
}

const MARGIN = 20;
export default function MiContacto({ name, myNum, id, isEmergency, lastName, firstName, onPress, nav }: ContactoProps) {
  return (
    <View style={[{flexDirection: 'column', alignItems: 'flex-start'}, styles.container]}>
      <View style={[{width: '100%', display:'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}]}>
        <View style={[{flexDirection: 'row', alignItems: 'center'}]}>
          <View style={styles.profilePicture}>
            <MyText type="default" style={{ color: useThemeColor({light: '', dark: ''}, 'background') }}>{(firstName != "-1" && lastName != "-1") ? (`${firstName[0]} ${lastName[0]}`) : name[0]}</MyText>
          </View>
          <View>
            <MyText
            type="subtitle"
            numberOfLines={1}
            style={{width: Dimensions.get('window').width - scale(MARGIN)* 2 - scale(150),
                    fontSize: scale(20), marginBottom: 3}}
            >{name}</MyText>
            <MyText 
                type="default"
                style={styles.number}
            >{numFormatter.format(myNum)}</MyText>
          </View>
        </View>
        {
          (isEmergency == true) ? <Ionicons size={25} style={[{paddingRight: 5}]} name={'shield'} color={Colors.dark.red}/> : ""
        }
        
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