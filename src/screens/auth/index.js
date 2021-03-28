import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {navigationRef} from 'src/routes/router';
import HomeEventPlanner from '../app/HomeEventPlanner';
// import {EventzaTabs} from '../app/Tabs/index';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Splash from './Splash';

// import { App } from '../app/tabs/index';

const Stack = createStackNavigator();

function StackScreen() {
  return (
    <Stack.Navigator initialRouteName="Splash" headerMode={'none'}>
      {/* <Stack.Screen name="EditMenuBO" component={EditMenuBO} /> */}
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      {/* <Stack.Screen name="EventzaTabs" component={EventzaTabs} /> */}
      <Stack.Screen name="HomeEventPlanner" component={HomeEventPlanner} />
      {/* <Stack.Screen name="WalkthroughBO" component={WalkthroughBO} />
      <Stack.Screen name="WalkthroughLO" component={WalkthroughLO} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="VerificationCode" component={VerificationCode} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="LoanTackTabsBO" component={BOTabs} />
      <Stack.Screen name="LoanTackTabs" component={App} /> */}
    </Stack.Navigator>
  );
}

export const Auth = () => (
  <NavigationContainer ref={navigationRef}>
    <Stack.Navigator
      initialRouteName="StackScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="StackScreen" component={StackScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
