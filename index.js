// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

/**
 * @format
 */
import React from 'react';
import {AppRegistry, YellowBox} from 'react-native';
import {DarkTheme, Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {name as appName} from './app.json';
import {store} from './src/redux/index';
import Root from './src/screens/root/index';

let Eventza = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

let ThemeProvider = () => {
  return (
    <PaperProvider theme={DarkTheme}>
      <Eventza />
    </PaperProvider>
  );
};

AppRegistry.registerComponent(appName, () => ThemeProvider);
YellowBox.ignoreWarnings([
  'Warning: Async Storage has been extracted from react-native core',
]);
