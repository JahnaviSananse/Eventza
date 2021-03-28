import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import * as IMAGE from '../../assets/images';
import Image from '../Image';
import styles from './styles';

const ListCell = ({item, index, reverse}) => {
  const navigation = useNavigation();
  let imgUrl =
    'https://i.picsum.photos/id/520/200/300.jpg?hmac=wYOWhYQGp5efB1HNroao-yTysVtEt5osptkdHJIsc0g';

  const renderItem = ({item, index}) => {
    if (reverse) {
      return (
        <TouchableOpacity
          // onPress={() => navigation.navigate('Detail')}
          style={styles.itemContainer}>
          <Image
            source={{uri: imgUrl}}
            style={styles.itemIcon}
            resizeMode={'stretch'}
          />
          <View style={styles.itemDetail}>
            <Text numberOfLines={1} style={styles.itemTitle}>
              Moon Crush Festival
            </Text>
            <View style={styles.locationContainer}>
              <Image
                source={IMAGE.IC_MAP}
                style={styles.mapIcon}
                resizeMode={'stretch'}
              />
              <Text style={styles.locationText}>Barclays Center</Text>
            </View>
            <Text style={styles.timeText}>Today, 10 P.M.</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        // onPress={() => navigation.navigate('Detail')}
        style={styles.itemContainer}>
        <Image
          source={{uri: imgUrl}}
          style={styles.itemIcon}
          resizeMode={'stretch'}
        />
        <View style={styles.itemDetail}>
          <Text numberOfLines={1} style={styles.itemTitle}>
            Chelsea Music Festival
          </Text>
          <View style={styles.locationContainer}>
            <Image
              source={IMAGE.IC_MAP}
              style={styles.mapIcon}
              resizeMode={'stretch'}
            />
            <Text style={styles.locationText}>Chelsea Music Hall</Text>
          </View>
          <Text style={styles.timeText}>Today, 9 P.M.</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      horizontal
      data={['1', '2', '1', '2', '1', '2']}
      showsVerticalScrollIndicator={false}
      // style={styles.flatlistContainer}
      renderItem={renderItem}
    />
  );
};

export default ListCell;
