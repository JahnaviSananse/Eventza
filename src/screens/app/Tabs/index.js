import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import * as IMAGE from '../../../assets/images';
import {Image} from '../../../components';
import {theme} from '../../../constants/colors';
import {HomeScreen} from './HomeScreen';
import {SettingScreen} from './Settingscreen';
import styles from './styles';

const Tab = createBottomTabNavigator();

const Icon = (props) => {
  const {name, color, size} = props;
  return (
    <Image
      source={name}
      style={styles.tabIcon}
      tintColor={color}
      resizeMode={'contain'}
    />
  );
};

const EventzaTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.tabbar,
        activeTintColor: theme.colors.accent,
        inactiveTintColor: theme.colors.white,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name={IMAGE.IC_HOME} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name={IMAGE.IC_COMPASS} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon name={IMAGE.IC_SETTINGS} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default EventzaTabs;
