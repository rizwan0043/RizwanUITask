import {StyleSheet, Dimensions, Platform} from 'react-native';

export const {width: fullWidth, height: fullHeight} = Dimensions.get('window');

export const behaviour = Platform.select({ios: 'padding', android: null});

export const commonStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flexOneContainer: {
    flex: 1,
  },
})