import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as IMAGE from '../../../assets/images';
import {Image} from '../../../components';
import {theme} from '../../../constants/colors';
import Header from './Header';
import styles from './styles';

const ButtonIcon = (props) => {
  const {onPress, icon} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={icon}
        style={styles.commonIcon}
        resizeMode={'contain'}
        tintColor={theme.colors.blue}
      />
    </TouchableOpacity>
  );
};

const Detail = (props) => {
  const [isList, setIsList] = useState(true);
  let imageUrl =
    'https://pbs.twimg.com/profile_images/779305023507271681/GJJhYpD2.jpg';
  let description =
    "For $1,749, you get a laptop that's got virtually no bezels, a powerful 10th Gen Intel Core i7 processor, a speedy SSD, a lovely display, over 12 hours of battery life, a comfy keyboard and surprisingly good audio, all in an elegant chassis that's 2% smaller than its predecessor.";
  let title = 'Dell XPS 15 9500 review';
  return (
    <SafeAreaView style={styles.safearea}>
      <Header onPressView={() => setIsList(!isList)} isListView={isList} />
      <ScrollView style={styles.mainContainer}>
        <View style={styles.detailImage}>
          <Image
            source={{uri: imageUrl}}
            style={{width: '100%', height: '100%'}}
            resizeMode={'stretch'}
          />
        </View>
        <View style={styles.tagContainer}>
          <TouchableOpacity style={styles.tagButton}>
            <Text>XPS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tagButton}>
            <Text>XPS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tagButton}>
            <Text>XPS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.detailTitle}>{title}</Text>
          <Text style={styles.detailDescription}>{description}</Text>
        </View>
      </ScrollView>
      <View style={styles.infoContainer}>
        <ButtonIcon onPress={() => {}} icon={IMAGE.IC_CALENDAR_BLANK} />
        <Text style={styles.timeText}>2days 1hrs</Text>
        <Text style={styles.infoText}>ThinkDigit</Text>
        <View style={styles.bottomShareContainer}>
          <ButtonIcon onPress={() => {}} icon={IMAGE.IC_ARROW_UP} />
          <ButtonIcon onPress={() => {}} icon={IMAGE.IC_SHARE} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Detail;
