import { Platform } from "react-native";

export const generateBoxShadowStyle = (
    xOffset : number,
    yOffset : number,
    shadowColor : string,
    shadowOpacity : number,
    shadowRadius : number,
    elevation : number,
  ) => {
  if (Platform.OS === 'android') {
    return {
      elevation,
      shadowColor: shadowColor,
    }
  } else {
    return {
      shadowColor: shadowColor,
      shadowOffset: {width: xOffset, height: yOffset},
      shadowOpacity,
      shadowRadius,
    }
  }
};