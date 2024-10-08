import { Text, type TextProps, StyleSheet } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { View } from 'react-native';
import { scale } from 'react-native-size-matters';

interface MyTextProps extends TextProps {
  lightColor?: string;
  darkColor?: string;
  type: 'default' | 'title' | 'defaultSemiBold' | 'subtitle';
  value: string;
};

export function MyText({ style, lightColor, darkColor, type, value }: MyTextProps) {
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
    >{value}
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