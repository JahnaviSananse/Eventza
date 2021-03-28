import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Settings from '../Settings';

const Stack = createStackNavigator();

export const SettingScreen = () => {
  return (
    <Stack.Navigator initialRouteName="Settings" headerMode={'none'}>
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};
