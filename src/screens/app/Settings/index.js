import React, {useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';
import * as IMAGE from '../../../assets/images';
import {Header, Image} from '../../../components';
import styles from './styles';

const Settings = (props) => {
  const [data, setData] = useState([
    {
      title: 'Profile',
      icon: IMAGE.IC_USER_CIRCLE,
      redirect: '',
    },
    {
      title: 'Rate US',
      icon: IMAGE.IC_RATE,
      redirect: '',
    },
    {
      title: 'Share',
      icon: IMAGE.IC_SHARE,
      redirect: '',
    },
    {
      title: 'Contact us',
      icon: IMAGE.IC_ENVELOP,
      redirect: '',
    },
    {
      title: 'Term of Use',
      icon: IMAGE.IC_ENVELOP,
      redirect: '',
    },
    {
      title: 'Privacy Policy',
      icon: IMAGE.IC_ENVELOP,
      redirect: '',
    },
    {
      title: 'Logout',
      icon: IMAGE.IC_LOG_OUT,
      redirect: '',
    },
  ]);

  let imgUrl =
    'https://i.picsum.photos/id/520/200/300.jpg?hmac=wYOWhYQGp5efB1HNroao-yTysVtEt5osptkdHJIsc0g';

  const ItemCell = ({item, index}) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.verticalDevider} />
        <Image source={item.icon} style={styles.itemLeftIcon} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Image source={IMAGE.IC_ARROW_RIGHT} style={styles.itemRightIcon} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <Header title={'Settings'} leftImg={IMAGE.IC_BACK} />
      <View style={styles.mainContainer}>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          // style={styles.flatlistContainer}
          renderItem={ItemCell}
        />
      </View>
    </SafeAreaView>
  );
};

export default Settings;
