import React from 'react';
import {  Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  setJSExceptionHandler,
} from 'react-native-exception-handler';

const reporter = (error) => {
  console.log(error); // sample
};
const errorHandler = (e, isFatal) => {
  if (isFatal) {
    reporter(e);
    Alert.alert(
      'Unexpected error occurred',
      `
          Error: ${isFatal ? 'Fatal:' : ''} ${e.name} ${e.message}
   
          We have reported this to our team ! Please close the app and start again!
          `,
      [
        {
          text: 'Close',
          onPress: () => { },
        },
      ],
    );
  } else {
    console.log(e); // So that we can see it in the ADB logs in case of Android if needed
  }
};

setJSExceptionHandler(errorHandler, true);


const ReduxNavigation = (props) => {
  console.disableYellowBox = true;
  const navigation = useNavigation();

};

export default ReduxNavigation;
