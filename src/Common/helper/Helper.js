import {Dimensions} from 'react-native';

export const {width: fullWidth, height: fullHeight} = Dimensions.get('window');

export const getWidthPercentage = percentage => (fullWidth * percentage) / 100;

export const getHeightPercentage = percentage =>
  (fullHeight * percentage) / 100;
