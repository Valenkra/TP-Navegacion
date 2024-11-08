import React, { useEffect, useState } from 'react';
import { StyleSheet, Platform, Alert } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { Appearance } from 'react-native';
import { Colors } from '@/constants/Colors';
import Shake from 'react-native-shake';

export default function Home() {
  const [shakeDetected, setShakeDetected] = useState(false);

  useEffect(() => {
    const shakeSubscription = Shake.addListener(() => {
      setShakeDetected(true);
      console.log("aloha")
    });

    return () => {
      shakeSubscription.remove();
    };
  }, []);

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
        <ThemedText type="title">Novedades</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">How are you</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m' })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
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
