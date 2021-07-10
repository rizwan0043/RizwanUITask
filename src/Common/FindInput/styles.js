import {StyleSheet} from 'react-native';
import colors from '../../Common/Colors';
import {getHeightPercentage, getWidthPercentage} from '../../Common/helper/Helper';

const findInputStyles = StyleSheet.create({
  mainContainer: {
    paddingLeft: 23,
  },
  subContainer: {
    marginTop: 50,
    flexDirection: 'row',
    width: getWidthPercentage(90),
    alignItems: 'center',
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 10,
    borderRadius: 3,
},
inputFieldsContainer: {
    fontSize: 14,
    fontWeight: '400',
    borderRadius: 4,
    paddingLeft: 10,
    width: getWidthPercentage(75),
    height: getHeightPercentage(6),
    backgroundColor: colors.white,
},
  errorTextStyle: {
    fontSize: 14,
    lineHeight: getHeightPercentage(3.26),
    color: 'red',
  },
  userImageIcon: {
    width: 15,
    height: 15,
    marginRight: 2.5,
  },
  iconStyles: {
    height: 30,
    width: 30,
    alignSelf: 'flex-start',
    resizeMode: 'contain'
  }
});

export default findInputStyles;
