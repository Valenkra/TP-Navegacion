import React, { useEffect, useState } from 'react';
import { StyleSheet, Platform, Alert } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { BellWave } from '@/components/BellWave';
import { Appearance } from 'react-native';
import { Colors } from '@/constants/Colors';

export default function Home() {
  
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#0a4557' }}
      headerImage={
        <Ionicons
          size={310}
          name="newspaper"
          style={[
            styles.headerImage,
            {
              color:
                Appearance.getColorScheme() === 'dark'
                  ? Colors.dark.icon
                  : Colors.light.icon,
            },
          ]}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Funcionalidades</ThemedText>
        <BellWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Contactos</ThemedText>
        <ThemedText>
          Pantalla de visualización de todos los Contactos del Teléfono.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Llamado de emergencia</ThemedText>
        <ThemedText>
        Cuando en la pantalla principal se sacuda rápidamente se envía un SMS al número configurado para tal fin. 
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Configuración de Nro. de emergencia</ThemedText>
        <ThemedText>
          Pantalla de configuración de Número telefónico de emergencia/aviso.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Mensajes al usuario</ThemedText>
        <ThemedText>
          Cada vez que se muestra un error, se muestra con un Alert y al mismo tiempo el dispositivo Vibra. 
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  headerImage: {
    bottom: -100,
    left: -50,
    position: 'absolute',
  },
});
