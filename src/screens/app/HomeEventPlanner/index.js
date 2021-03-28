import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as IMAGE from '../../../assets/images';
import {Image} from '../../../components';
import {theme} from '../../../constants/colors';
// import Header from './Header';
import styles from './styles';

const HomeEventPlanner = (props) => {
  const [isList, setIsList] = useState(true);

  const AddButton = () => {
    return (
      <TouchableOpacity style={styles.addContainer}>
        <Image
          source={IMAGE.IC_ADD}
          style={styles.addIcon}
          tintColor={theme.colors.red}
        />
      </TouchableOpacity>
    );
  };

  const Header = () => {
    return (
      <View style={styles.userContainer}>
        <Image
          source={IMAGE.IC_MAP}
          style={styles.mapIcon}
          tintColor={theme.colors.offwhite}
        />
        <Text style={styles.locationText}>New York, USA</Text>
        <TouchableOpacity style={styles.userIcon}>
          <Image
            source={IMAGE.IC_USER_CIRCLE}
            style={styles.headerIconMed}
            resizeMode={'contain'}
            tintColor={theme.colors.white}
          />
        </TouchableOpacity>
      </View>
    );
  };
  let imgUrl =
    'https://i.picsum.photos/id/520/200/300.jpg?hmac=wYOWhYQGp5efB1HNroao-yTysVtEt5osptkdHJIsc0g';

  const renderItem = () => {
    return (
      <View style={styles.itemContainer}>
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
            <Text style={styles.itemlocationText}>Barclays Center</Text>
          </View>
          <Text style={styles.timeText}>Today, 10 P.M.</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <Header />
      <View style={styles.mainContainer}>
        <FlatList
          data={[1, 3, 3, 4, 56, 3]}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
        />
        {/* <Text style={styles.sectionHeader}>This Weekend</Text>
        <ListCell />
        <Text style={styles.sectionHeader}>Upcoming Events</Text>
        <ListCell reverse /> */}
      </View>
      <AddButton />
    </SafeAreaView>
  );
};

export default HomeEventPlanner;
