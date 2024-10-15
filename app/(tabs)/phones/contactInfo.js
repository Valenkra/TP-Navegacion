import { MyText } from "@/components/MyText";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { scale } from "react-native-size-matters";
import { Colors } from "@/constants/Colors";
import { Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Back from "@/components/Back";

const ContactInfo = ({ route, navigation }) => {
    const { contact } = route.params;
    
    return(
        <SafeAreaView style={styles.container}>
            <Back navigation={navigation}/>
            <View style={styles.titleContainer}>
                <MyText
                    type='title'
                    value={contact.name}
                    style={styles.contacto}
                />
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    headerImage: {
      color: '#808080',
      bottom: -90,
      left: -35,
      position: 'absolute',
    },
    titleContainer: {
      display:'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginBottom: scale(20)
    },
    container: {
        backgroundColor: Colors.dark.background,
        height: Dimensions.get('window').height,
        flex: 1,
        alignItems: 'flex-start',
        paddingHorizontal: scale(20),
        paddingTop: scale(20),
      },
    contacto:{
        fontSize: scale(40),
        lineHeight: scale(50),
        width: scale(310)
    }
});

export default ContactInfo;