import { StyleSheet, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { MyText } from '@/components/MyText';
import { ThemedView } from '@/components/ThemedView';

export default function Creditos() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <ThemedView style={styles.headerContainer}>
        <MyText type="title" style={styles.titleText}>Acerca de nosotros</MyText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.sectionContainer}>
        <MyText type="subtitle" style={styles.subtitleText}>Quiénes somos</MyText>
        <MyText style={styles.textContent}>
          Somos Franco y Valen, y creamos este proyecto con mucho entusiasmo :)
        </MyText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: 'linear-gradient(to right, #A1CEDC, #1D3D47)',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 32,
    backgroundColor: '#FFF',
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
    color: '#1D3D47',
  },
  sectionContainer: {
    backgroundColor: '#FFF',
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
    color: '#1D3D47',
    fontWeight: '600',
    marginBottom: 8,
  },
  textContent: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
  },
});
