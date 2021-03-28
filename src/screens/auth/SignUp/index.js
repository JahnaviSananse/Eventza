// import {GoogleSignin} from '@react-native-community/google-signin';

import auth from '@react-native-firebase/auth';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {AccessToken, LoginManager} from 'react-native-fbsdk';
// import {AccessToken, LoginManager} from 'react-native-fbsdk';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as IMAGE from '../../../assets/images';
import {Image} from '../../../components';
import {theme} from '../../../constants/colors';
import * as VALIDATION from '../../../constants/validation';
import {showAlert} from '../../../utility/util';
import styles from './styles';

const SignUp = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const validate = () => {
    if (!VALIDATION.validate(name)) {
      showAlert('', 'Please enter name');
    } else if (!VALIDATION.validate(email)) {
      showAlert('', 'Please enter email');
    } else if (!VALIDATION.isValidEmail(email)) {
      showAlert('', 'Please enter valid email');
    } else if (!VALIDATION.validate(password)) {
      showAlert('', 'Please enter password');
    } else {
      props.navigation.navigate('SignIn');
    }
  };

  const onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {accessToken, idToken} = await GoogleSignin.signIn();
      setloggedIn(true);
      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      await auth().signInWithCredential(credential);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        alert('Cancel');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        alert('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        alert('PLAY_SERVICES_NOT_AVAILABLE');
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  // async function onGoogleButtonPress() {
  //   const {accessToken, idToken} = await GoogleSignin.signIn();
  //   const credential = firebase.auth.GoogleAuthProvider.credential(
  //     idToken,
  //     accessToken,
  //   );
  //   // login with credential
  //   await firebase.auth().signInWithCredential(credential);
  //   // Get the users ID token
  //   // const {idToken} = await GoogleSignin.signIn();
  //   // console.log('idToken', idToken);
  //   // Create a Google credential with the token
  //   // const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   // Sign-in the user with the credential
  //   // return auth().signInWithCredential(googleCredential);
  // }
  // useEffect(() => {
  //   GoogleSignin.configure({
  //     webClientId:
  //       '1047108288389-rplr0rsrmd3ggidc7pneahltrca6rkat.apps.googleusercontent.com',
  //   });
  // }, []);

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '1047108288389-rplr0rsrmd3ggidc7pneahltrca6rkat.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId:
        '1047108288389-9ulto6fagas9cai12gvcofrs0sfnptno.apps.googleusercontent.com',
    });
  }, []);

  async function onFacebookButtonPress() {
    // Attempt login with permissions
    console.log('LoginManager', LoginManager);
    const result = await LoginManager.logInWithPermissions([
      'public_profile',
      'email',
    ]);

    if (result.isCancelled) {
      throw 'User cancelled the login process';
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw 'Something went wrong obtaining access token';
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken,
    );

    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  }

  return (
    <SafeAreaView style={styles.safearea}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>
            Sign Up <Text style={styles.orText}>Or</Text>
          </Text>
          <View style={styles.socialContainer}>
            <TouchableOpacity
              style={styles.socialTouchable}
              onPress={() =>
                // alert('hi')
                onGoogleButtonPress().catch((error) =>
                  console.log('error', error),
                )
              }>
              <Image
                source={IMAGE.IC_GOOGLE}
                style={styles.socialIcons}
                tintColor={theme.colors.white}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.socialTouchable}
              onPress={() =>
                onFacebookButtonPress().catch((error) =>
                  console.log('error', error),
                )
              }>
              <Image
                source={IMAGE.IC_FACEBOOK}
                style={styles.socialIcons}
                tintColor={theme.colors.white}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.childContainer}>
          <Text style={styles.title}>Name</Text>
          <TextInput
            style={styles.inputField}
            value={name}
            onChangeText={(val) => setName(val)}
            placeholder={'Name'}
          />
          <Text style={styles.title}>Phone Number</Text>
          <TextInput
            style={styles.inputField}
            value={phoneNumber}
            onChangeText={(val) => setPhoneNumber(val)}
            placeholder={'Phone Number'}
            keyboardType={'decimal-pad'}
          />
          <Text style={styles.title}>Email</Text>
          <TextInput
            style={styles.inputField}
            value={email}
            onChangeText={(val) => setEmail(val)}
            placeholder={'Email'}
          />
          <Text style={styles.title}>Password</Text>
          <TextInput
            style={styles.inputField}
            value={password}
            onChangeText={(val) => setPassword(val)}
            secureTextEntry={true}
            placeholder={'Password'}
          />
          {/* <View style={styles.privacyCheckContainer}>
            <TouchableOpacity onPress={() => setIsChecked(!isChecked)}>
              <Image
                source={isChecked ? IMAGE.IC_CHECKED : IMAGE.IC_UNCHECKED}
                style={styles.checkIcon}
                tintColor={isChecked ? theme.colors.blue : theme.colors.accent}
              />
            </TouchableOpacity>
            <Text style={styles.privacyText}>I Agree to Privacy & Terms</Text>
          </View> */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => validate()}
              style={styles.loginButton}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('SignIn')}>
              <Text style={styles.buttonTextBold}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
