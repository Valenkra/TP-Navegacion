import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { View } from 'react-native';
import { scale } from 'react-native-size-matters';
import { Children } from 'react';

interface MyTextProps extends TextProps {
  lightColor?: string;
  darkColor?: string;
  children: React.ReactNode;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function MyText({ style, lightColor, darkColor, type, children }: MyTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        style,
      ]}
    >{children}
    </Text>
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 20,
    lineHeight: 25,
    marginVertical: scale(1)
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    marginVertical: scale(1)
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
    marginVertical: scale(1.5)
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});