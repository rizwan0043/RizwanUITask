import {StyleSheet} from 'react-native';
import colors from '../Common/Colors';
import {getHeightPercentage, getWidthPercentage} from '../Common/helper/Helper';

 const HomePageStyle = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  backImageStyles: {
    height: getHeightPercentage(30),
    width: getWidthPercentage(100),
    resizeMode: 'contain',
    zIndex: 0,
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
  otherCategoryText: {
    margin: 20,
    color: colors.black,
    fontWeight: 'bold',
  },
  categoryMainView: {
    height: getHeightPercentage(30),
    width: getWidthPercentage(90),
    borderWidth: 0.5,
    borderColor: colors.grey,
    backgroundColor: colors.lightWhite,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    alignSelf: 'center',
  },
  categoryImagesStyle: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
  },
  categoryText: {
    color: colors.primary,
    fontSize: 15,
    marginTop: 10,
  },
  categorySubView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  containerList: {
    margin: 20,
  },
  imageList: {
    height: 120,
    width: 150,
    resizeMode: 'contain',
    marginLeft: 20,
  },
  priceText: {
    color: colors.black,
    fontSize: 15,
    marginTop: 5,
    marginLeft: 30,
  },
  fotterContainer: {
    height: 100,
    width: '100%',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.white,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerIcon: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
});
export default HomePageStyle;