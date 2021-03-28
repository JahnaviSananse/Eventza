import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Image from '../Image';
import styles from './styles';

const NewsGridCell = ({data}) => {
  const navigation = useNavigation();
  let imgUrl =
    'https://i.picsum.photos/id/520/200/300.jpg?hmac=wYOWhYQGp5efB1HNroao-yTysVtEt5osptkdHJIsc0g';

  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Detail')}
        style={styles.itemContainer}>
        <Image source={{uri: imgUrl}} style={styles.itemIcon} />
        <View style={styles.itemDetail}>
          <Text
            numberOfLines={3}
            ellipsizeMode={'tail'}
            style={styles.itemTitle}>
            Hedge fund manager Scaramucci launches cryptocurrency fund
          </Text>
          <View style={styles.itemDescriptionContainer}>
            <Text style={styles.itemDescription}>BBC News</Text>
            <Text style={styles.itemDescription}>56 Mins</Text>
          </View>
          {/* <View style={styles.itemTagsContainer}>
            <Text style={styles.itemTag}>#XPS</Text>
            <Text style={styles.itemTag}>##review</Text>
          </View> */}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={['1', '2', '1', '2', '1', '2']}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      // style={styles.flatlistContainer}
      renderItem={renderItem}
    />
  );
};

export default NewsGridCell;
