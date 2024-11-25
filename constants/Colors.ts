/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
    secondary: '#76a7f5',
    primary: '#ed822f',
    lightGray: '#d4d4d4',
    darkGray: '#807f7e',
    red: '#e81700',
  },
  dark: {
    text: '#ECEDEE',
    background: '#0e0f0f', //#353636
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    secondary: '#73b0ff',
    secondaryAccent: '#7a9fe6',
    primary: '#eb8436',
    primaryAccent: '#ba7832',
    red: '#e81700',
    white: '#ffffff',
    whiteLess: '#e0dfdc',
    lightGray: '#464646',
    darkGray: '#262626'
  },
  screen: {
    contacto: {
      dark: '#1b1740'
    },
    profile: {
      dark: '#172f40',
      light: '#50a8e6',
      lightIcon: '#0c4b78',
      darkIcon: '#1e679c'
    }
  }
};
