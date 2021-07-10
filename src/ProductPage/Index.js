/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import images from '../Common/Images';
import { HeaderBarWithBackComponent } from '../Common/HeaderWidgets';

const ProductPage = (props) => {

  const goBack = () => {
    props.navigation.navigate('HomePage');
   };

  const renderSofaImage = () => {
    return (
      <Image style={styles.backImageStyles} source={images.sofa} />
    );
  };

  const renderProductDetails = () => {
    return (
      <View>
        <Text style={styles.optionTitle}>
          Baljerio Sofa
        </Text>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingSection}>
          <Text style={styles.optionDescription}>4.5 ✮ </Text>
          </View>
          <Text style={styles.ratingDescription}> 100 Ratings</Text>
          <Text style={styles.ratingDescription}> 100 Reviews</Text>
        </View>
        <View style={styles.rentContainer}>
          <Text style={styles.optionTitle}> Rent</Text>
          <Text style={styles.title}> $799/Month</Text>
        </View>
        <View style={styles.rentContainer}>
          <Text style={styles.optionTitleLight}> Refundable Deposit</Text>
          <Text style={styles.titleLight}> $799/Month</Text>
        </View>
      </View>
    );
  };

  const renderDiscount = () => {
    return (
    <View style={styles.discountContainer}>
      <View style={{flexDirection: 'row', alignContent: 'center',justifyContent: 'space-around'}}>
        <View style={{alignContent: 'center', alignSelf: 'center'}}>
          <Text style={styles.descriptionText}>Get 10% off from
            OFF10.
          </Text>
          <Text style={styles.descriptionText}>Enjoy More Over Here</Text>
        </View>
        <Image source={images.gift} style={styles.giftImage}/>
      </View>
    </View>
    );
  };

  const renderTenure = () => {
    return (
    <View style={styles.tenureContainer}>
      <Text>Enter Your Tenure</Text>
      <TextInput
        placeholder="Enter Your Tenure ..."
        clearTextOnFocus={false}
        keyboardType="default"
        style={styles.inputStyles}
      />
    </View>
    );
  };

  const renderFotter = () => {
    return (
      <View style={styles.fotterContainer}>
        <View>
        <Text style={styles.shoppingText}>Rent</Text>
        <Text style={styles.shoppingText}>$9000 for 36 Month</Text>
        </View>
        <TouchableOpacity style={styles.cartButton} >
          <Text>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.mainContainer}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView>
      <HeaderBarWithBackComponent
          title="Products"
          goBack={goBack}
        />
        {renderSofaImage()}
        {renderProductDetails()}
        {renderDiscount()}
        {renderTenure()}
        {renderFotter()}
        </ScrollView>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default ProductPage;
