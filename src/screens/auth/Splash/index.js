import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';
import * as IMAGE from '../../../assets/images';
import Image from '../../../components/Image';
import {theme} from '../../../constants/colors';
import styles from './styles';

const Splash = (props) => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignUp');
    }, 2000);
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.logoContainer}>
        <Image
          source={IMAGE.APP_LOGO}
          style={styles.logo}
          tintColor={theme.colors.white}
          resizeMode={'contain'}
        />
        <Text style={styles.appTitle}>Eventza</Text>
      </View>
    </SafeAreaView>
  );
};

export default Splash;
