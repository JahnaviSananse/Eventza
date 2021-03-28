import React from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import {Image} from '../../../components';
import styles from './styles';

const Search = (props) => {
  let imgUrl =
    'https://i.picsum.photos/id/520/200/300.jpg?hmac=wYOWhYQGp5efB1HNroao-yTysVtEt5osptkdHJIsc0g';

  return (
    <SafeAreaView style={styles.safearea}>
      {/* <Header /> */}
      <View style={styles.mainContainer}>
        <FlatList
          data={['1', '2', '1', '2', '1', '2']}
          showsVerticalScrollIndicator={false}
          // style={styles.flatlistContainer}
          renderItem={({item}) => {
            return (
              <View style={styles.itemContainer}>
                <View style={styles.itemDetail}>
                  <Text style={styles.itemTitle}>Dell XPS 15 9500 review</Text>
                  <View style={styles.itemDescriptionContainer}>
                    <Text style={styles.itemDescription}>BBC News</Text>
                    <Text style={styles.itemDescription}>56 Mins</Text>
                  </View>
                  <View style={styles.itemTagsContainer}>
                    <Text style={styles.itemTag}>#XPS</Text>
                    <Text style={styles.itemTag}>##review</Text>
                  </View>
                </View>
                <Image source={{uri: imgUrl}} style={styles.itemIcon} />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;
