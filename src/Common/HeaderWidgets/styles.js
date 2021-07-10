import {StyleSheet} from 'react-native';
import {fullWidth} from '../CommonStyles';
import {getHeightPercentage} from '../helper/Helper';
import colors from '../Colors';

export const headerBarWithBackComponentStyle = StyleSheet.create({
  // 
  container: {
    height:
      getHeightPercentage(100) > 736
        ? getHeightPercentage(8)
        : getHeightPercentage(8),
    flexDirection: 'row',
    width: fullWidth,
    backgroundColor: colors.white,
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderBottomColor: colors.lightPurple,
    borderBottomWidth: 0.4,
  },
  innerContainer: {
    position: 'absolute',
    left: 2,
    padding: 10,
  },
  imageIcon: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
  },
  imageBackIcon: {
    resizeMode: 'contain',
    height: 30,
    width: 30,
  },
  titleText: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.black,
    textTransform: 'capitalize',
    paddingBottom: getHeightPercentage(1),
    letterSpacing: 1,
  },
  searchContainer: {
    position: 'absolute',
    right: 2,
    padding: 10,
  },
  rightButtonText: {
    position: 'absolute',
    right: 2,
    padding: 10,
    color: colors.primary,
  },
  searchBtnTitle: {
    // ...font(17, 'Light'),
    // color: colors.white,
    // lineHeight: getHeightPercentage(2.98)
  }
});
