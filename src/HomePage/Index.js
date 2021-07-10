/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  ScrollView,
} from 'react-native';
import FindInput from '../../src/Common/FindInput/index';
import styles from './styles';
import images from '../Common/Images';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    price: '$900/month',
    title: 'Sofa Baljeru',
    // eslint-disable-next-line prettier/prettier
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUScuEXk9xsB10tUrIk2Z0K71lzon_9kJU5TYh0kWMcIOUYZ_Dvg5ZngC9pS-iXD5Ofw&usqp=CAU',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    price: '$999/month',
    title: 'Sofa Baljeru',
    // eslint-disable-next-line prettier/prettier
    imageUrl: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    price: '$700/month',
    title: 'Sofa and Table',
    // eslint-disable-next-line prettier/prettier
    imageUrl: 'https://image.freepik.com/free-photo/modern-minimalist-interior-with-armchair-empty-white-wall-background-3d-rendering_41470-3351.jpg',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bass',
    price: '$900/month',
    title: 'Sofa Baljeru',
    // eslint-disable-next-line prettier/prettier
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtUScuEXk9xsB10tUrIk2Z0K71lzon_9kJU5TYh0kWMcIOUYZ_Dvg5ZngC9pS-iXD5Ofw&usqp=CAU',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aasss97f63',
    price: '$999/month',
    title: 'Sofa and Table',
    // eslint-disable-next-line prettier/prettier
    imageUrl: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571sssse29d72',
    price: '$700/month',
    title: 'Sofa and Table',
    // eslint-disable-next-line prettier/prettier
    imageUrl: 'https://image.freepik.com/free-photo/modern-minimalist-interior-with-armchair-empty-white-wall-background-3d-rendering_41470-3351.jpg',
  },
];

// eslint-disable-next-line prettier/prettier
const HomePage = (props) => {

  const onPressItem = item => {
    props.navigation.navigate(item);
  };

  const renderTopBar = () => {
    return (
      <ImageBackground
        style={styles.backImageStyles}
        source={images.BackgroundImage}>
        <Text style={styles.headerTitle}>Renticle</Text>
        <Text style={styles.headerSubtitle}>Gurgaan</Text>
        <FindInput
          placeholder="Search ..."
          clearTextOnFocus={false}
          keyboardType="default"
        />
      </ImageBackground>
    );
  };

  const renderOtherCategories = () => {
    return (
      <View>
        <Text style={styles.otherCategoryText}>Other Categories</Text>
        <View style={styles.categoryMainView}>
          <View style={styles.categorySubView}>
            <View>
              <Image
                source={images.bedroom}
                style={styles.categoryImagesStyle}
              />
              <Text style={styles.categoryText}>Bedroom</Text>
            </View>
            <View>
              <Image
                source={images.livingroom}
                style={styles.categoryImagesStyle}
              />
              <Text style={styles.categoryText}>Livingroom</Text>
            </View>
            <View>
              <Image
                source={images.camera}
                style={styles.categoryImagesStyle}
              />
              <Text style={styles.categoryText}>DSLR Camera</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 0.5,
              margin: 20,
            }}
          />
          <View style={styles.categorySubView}>
            <View>
              <Image
                source={images.appliances}
                style={styles.categoryImagesStyle}
              />
              <Text style={styles.categoryText}>Appliances</Text>
            </View>
            <View>
              <Image
                source={images.storage}
                style={styles.categoryImagesStyle}
              />
              <Text style={styles.categoryText}>Storage</Text>
            </View>
            <View>
              <Image
                source={images.packages}
                style={styles.categoryImagesStyle}
              />
              <Text style={styles.categoryText}>Packages</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const renderTrendingProductsText = () => {
    return <Text style={styles.otherCategoryText}>Trending Products</Text>;
  };

  const renderRecentlyViewedText = () => {
    return (
      <Text style={styles.otherCategoryText}>Recently Viewed Products</Text>
    );
  };

  const renderItem = ({item}) => {
    return (
      <View>
        <Image style={styles.imageList} source={{uri: item.imageUrl}} />
        <Text style={styles.priceText}>{item.title}</Text>
        <Text style={styles.priceText}>{item.price}</Text>
      </View>
    );
  };

  const renderFotter = () => {
    return (
      <View style={styles.fotterContainer}>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => onPressItem('HomePage')}>
            <Image style={styles.footerIcon} source={images.home} />
            <Text>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => onPressItem('ProductPage')}>
            <Image style={styles.footerIcon} source={images.menu} />
            <Text>Products</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => onPressItem('ProductPage')}>
            <Image style={styles.footerIcon} source={images.cart} />
            <Text>Cart</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity onPress={() => onPressItem('ProductPage')}>
            <Image style={styles.footerIcon} source={images.people} />
            <Text>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      {renderTopBar()}
      <ScrollView>
        {renderOtherCategories()}
        {renderTrendingProductsText()}
        <FlatList
          data={DATA}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        {renderRecentlyViewedText()}
        <FlatList
          data={DATA}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={{paddingBottom: 120}}
        />
      </ScrollView>
      {renderFotter()}
    </View>
  );
};
export default HomePage;
