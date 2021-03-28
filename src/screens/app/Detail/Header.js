import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Image} from '../../../components';
import {theme} from '../../../constants/colors';
import * as IMAGE from './../../../assets/images';
import styles from './styles';

const Header = (props) => {
  const {onPressView, onPressSearch, isListView} = props;
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity>
        <Image
          source={IMAGE.IC_MENU}
          style={styles.headerIcon}
          resizeMode={'contain'}
          tintColor={theme.colors.white}
        />
      </TouchableOpacity>
      <Text style={styles.headerTitleText}>CoinTube</Text>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={onPressSearch}>
          <Image
            source={IMAGE.IC_SEARCH}
            style={styles.headerIconMed}
            resizeMode={'contain'}
            tintColor={theme.colors.white}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onPressView}>
          <Image
            source={isListView ? IMAGE.IC_ROW : IMAGE.IC_ROW}
            style={isListView ? styles.headerIconMed : styles.headerIconLarge}
            resizeMode={'contain'}
            tintColor={theme.colors.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
