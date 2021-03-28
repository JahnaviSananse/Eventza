import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Detail from '../Detail';
import HomeEventPlanner from '../HomeEventPlanner';

const Stack = createStackNavigator();

export const HomeScreen = () => {
  return (
    <Stack.Navigator initialRouteName="HomeEventPlanner" headerMode={'none'}>
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name="HomeEventPlanner" component={HomeEventPlanner} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};
