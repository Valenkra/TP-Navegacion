import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MyText } from '@/components/MyText';
import { Colors } from '@/constants/Colors';
import { Dimensions } from 'react-native';

export default function Contacto() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <MyText
          type='title'
          value='Nuevo aqui?'
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
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    backgroundColor: Colors.screen.contacto.dark,
    height: Dimensions.get('window').height,
    flex: 1,
    alignItems: 'center',
  }
});
