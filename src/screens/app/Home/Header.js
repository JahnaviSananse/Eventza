import React, {useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Image} from '../../../components';
import {theme} from '../../../constants/colors';
import * as IMAGE from './../../../assets/images';
import styles from './styles';

const Header = (props) => {
  const {onPressView, onPressSearch, isListView} = props;
  const [search, setSearch] = useState('');

  return (
    <View style={styles.headerContainer}>
      <View style={styles.userContainer}>
        <Image
          source={IMAGE.IC_MAP}
          style={styles.mapIcon}
          tintColor={theme.colors.offwhite}
        />
        <Text style={styles.locationText}>New York, USA</Text>
        <TouchableOpacity onPress={onPressSearch} style={styles.userIcon}>
          <Image
            source={IMAGE.IC_USER_CIRCLE}
            style={styles.headerIconMed}
            resizeMode={'contain'}
            tintColor={theme.colors.white}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.inputContainer}>
        <Image
          source={IMAGE.IC_SEARCH}
          style={styles.searchIcon}
          resizeMode={'contain'}
          tintColor={theme.colors.white}
        />
        <TextInput
          placeholder={'Search'}
          value={search}
          placeholderTextColor={theme.colors.white}
          onChangeText={(val) => setSearch(val)}
          style={styles.input}
        />
      </View>
      <View>
        <FlatList
          horizontal
          data={['Music', 'Sports', 'Food', 'Art']}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={[
                  styles.cItemContainer,
                  {
                    backgroundColor:
                      index === 0 ? theme.colors.red : theme.colors.blue,
                  },
                ]}>
                <Text style={{color: theme.colors.white}}>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Header;
