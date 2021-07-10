import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { commonStyle as cs } from '../CommonStyles';
import { headerBarWithBackComponentStyle as hbcs } from './styles';

export const HeaderBarWithBackComponent = props => {
  const {
    goBack,
    title,
    accessible,
    accessibilityLabel,
  } = props;
  return (
    <View style={hbcs.container}>
      <TouchableOpacity
        style={hbcs.innerContainer}
        onPress={goBack}
        accessible={accessible}
        accessibilityLabel={accessibilityLabel}>
        <Image source={require("../.././assets/images/backIcon.png")} style={hbcs.imageIcon}/>
      </TouchableOpacity>
      <View style={{width: "55%"}}>
        <Text numberOfLines={1} style={hbcs.titleText}>
          {title}
        </Text>
      </View>
    </View>
  );
};
