import React, {useState} from 'react';
import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import * as IMAGE from '../../../assets/images';
import {Image, ListCell} from '../../../components';
import {theme} from '../../../constants/colors';
import Header from './Header';
import styles from './styles';

const Home = (props) => {
  const [isList, setIsList] = useState(true);

  const AddButton = () => {
    return (
      <TouchableOpacity style={styles.addContainer}>
        <Image
          source={IMAGE.IC_ADD}
          style={styles.addIcon}
          tintColor={theme.colors.blue}
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <Header onPressView={() => setIsList(!isList)} isListView={isList} />
      <View style={styles.mainContainer}>
        <Text style={styles.sectionHeader}>This Weekend</Text>
        <ListCell />
        <Text style={styles.sectionHeader}>Upcoming Events</Text>
        <ListCell reverse />
      </View>
      <AddButton />
    </SafeAreaView>
  );
};

export default Home;
