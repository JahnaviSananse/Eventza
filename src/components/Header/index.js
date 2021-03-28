import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Image from 'src/components/Image';
import {theme} from '../../constants/colors';
import styles from './style';

// This will help you to render custom navigation bar.
// Its defualt component for my structure. We can modify as per requirement
const Header = (props) => {
  const {leftImg, rightImg, leftClick, rightClick, title} = props;
  let headerTitle = title ? title : '';
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftImgContainer} onPress={leftClick}>
        <Image
          source={leftImg}
          style={styles.img}
          tintColor={theme.colors.white}
          resizeMode={'contain'}></Image>
      </TouchableOpacity>
      <Text style={styles.headerText}>{headerTitle}</Text>
      <TouchableOpacity style={styles.leftImgContainer} onPress={rightClick}>
        <Image
          source={rightImg}
          style={styles.rightImage}
          resizeMode={'contain'}></Image>
      </TouchableOpacity>
    </View>
  );
};
export default Header;
