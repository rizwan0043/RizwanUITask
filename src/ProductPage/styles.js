import {StyleSheet} from 'react-native';
import colors from '../Common/Colors';
import {getHeightPercentage, getWidthPercentage} from '../Common/helper/Helper';

 const ProductPageStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  optionTitle: {
    fontSize: 18,
    color: colors.black,
    marginLeft: 30,
    marginTop: 20,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingSection: {
    backgroundColor: colors.yellow,
    height: 30,
    width: 70,
    marginLeft: 30,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  optionDescription: {
    color: colors.white,
  },
  ratingDescription: {
    color: colors.black,
    marginLeft: 5,
    textAlign: 'center',
  },
  backImageStyles: {
    height: getHeightPercentage(30),
    width: getWidthPercentage(100),
    resizeMode: 'contain',
    zIndex: 0,
    borderColor: colors.white,
    borderWidth: 1,
  },
  headerTitle: {
    color: colors.white,
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 5,
    zIndex: 1,
  },
  headerSubtitle: {
    color: colors.white,
    fontSize: 16,
    zIndex: 1,
    marginLeft: 30,
  },
  rentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    color: colors.black,
    marginRight: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  titleLight: {
    fontSize: 14,
    color: 'grey',
    marginRight: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
  optionTitleLight: {
    fontSize: 14,
    color: 'grey',
    marginLeft: 30,
    marginTop: 20,
    fontWeight: 'bold',
  },
  discountContainer: {
    height: 130,
    width: '85%',
    marginLeft: 30,
    marginTop: 20,
    borderRadius: 3,
    backgroundColor: colors.primary,
  },
  giftImage: {
    resizeMode: 'contain',
    height: 120,
    width: 120,
  },
  descriptionText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  tenureContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    marginLeft: 30,
    marginBottom: 140,
  },
  inputStyles: {
    borderColor: colors.lightPurple,
    borderWidth: 1,
    width: 210,
    height: 50,
    marginLeft: 10,
  },
  fotterContainer: {
    width: '100%',
    backgroundColor: colors.primary,
    borderWidth: 0.5,
    borderColor: colors.white,
    position: 'absolute',
    height: 100,
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    flexDirection: 'row',
  },
  shoppingText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: 'bold',
    marginLeft: 40,
  },
  cartButton: {
    height: 40,
    width: 170,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    borderRadius: 3,
    marginLeft: 30,

  }
});
export default ProductPageStyle;