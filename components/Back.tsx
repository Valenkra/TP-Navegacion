import { View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MyText } from "./MyText";
import { Colors } from "@/constants/Colors";
import { scale } from "react-native-size-matters";  
import { NavigationProp, ParamListBase } from "@react-navigation/native";  

interface NavProps {
    navigation: NavigationProp<ParamListBase>
  }

export default function Back({ navigation }: NavProps){
    return(
        <Pressable onPress={() => {navigation.goBack()}} style={styles.container}>
            <Ionicons size={28} style={[{ marginBottom: -3 }]} name={'arrow-back-outline'} color={Colors.dark.secondary}/>
            <MyText type="default" style={styles.arrowBack}>Volver</MyText>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: scale(5)
    },
    arrowBack:{
        color: Colors.dark.secondary
    }
});