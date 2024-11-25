import { StyleSheet, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { MyText } from '@/components/MyText';
import { ThemedView } from '@/components/ThemedView';
import { verticalScale } from 'react-native-size-matters';
import { useThemeColor } from '@/hooks/useThemeColor';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import { scale } from 'react-native-size-matters';

export default function Creditos() {
  return (
    <SafeAreaView style={[styles.fullContainer, { backgroundColor: useThemeColor({light: '', dark: ''}, 'background') }]}>
      <ScrollView contentContainerStyle={styles.container}>
        <ThemedView style={[styles.headerContainer, {backgroundColor: useThemeColor({light: '', dark: ''},'darkGray')}]}>
          <MyText type="title" style={styles.titleText}>Acerca de nosotros</MyText>
          <HelloWave />
        </ThemedView>

        <ThemedView style={[styles.sectionContainer, {backgroundColor: useThemeColor({light: '', dark: ''},'darkGray')}]}>
          <MyText type="subtitle" style={styles.subtitleText}>Quiénes somos</MyText>
          <MyText style={styles.textContent}>
            Somos Franco y Valen, y creamos este proyecto con mucho entusiasmo :)
          </MyText>
        </ThemedView>

        <ThemedView style={[styles.sectionContainer, {backgroundColor: useThemeColor({light: '', dark: ''},'darkGray')}]}>
          <MyText type="subtitle" style={styles.subtitleText}>Qué hacemos</MyText>
          <MyText style={styles.textContent}>
            Apps y otros proyectos tecnológicos.
          </MyText>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: 'linear-gradient(to right, #A1CEDC, #1D3D47)',
    marginTop: verticalScale(15)
  },  
  fullContainer: {
    display: 'flex',
    height: Dimensions.get('window').height,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 32,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  titleText: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  sectionContainer: {
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 5,
  },
  subtitleText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  textContent: {
    fontSize: 16,
    lineHeight: 24,
  },
});
