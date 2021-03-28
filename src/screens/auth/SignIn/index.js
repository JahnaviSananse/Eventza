// import {GoogleSignin} from '@react-native-community/google-signin';
import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import * as IMAGE from '../../../assets/images';
import {Image} from '../../../components';
import {theme} from '../../../constants/colors';
import * as VALIDATION from '../../../constants/validation';
import {showAlert} from '../../../utility/util';
import styles from './styles';

// GoogleSignin.configure({
//   webClientId:
//     '1047108288389-rplr0rsrmd3ggidc7pneahltrca6rkat.apps.googleusercontent.com',
// });
// async function onGoogleButtonPress() {
//   // Get the users ID token
//   const {idToken} = await GoogleSignin.signIn();

//   // Create a Google credential with the token
//   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

//   // Sign-in the user with the credential
//   return auth().signInWithCredential(googleCredential);
// }

// async function onFacebookButtonPress() {
//   // Attempt login with permissions
//   const result = await LoginManager.logInWithPermissions([
//     'public_profile',
//     'email',
//   ]);

//   if (result.isCancelled) {
//     throw 'User cancelled the login process';
//   }

//   // Once signed in, get the users AccesToken
//   const data = await AccessToken.getCurrentAccessToken();

//   if (!data) {
//     throw 'Something went wrong obtaining access token';
//   }

//   // Create a Firebase credential with the AccessToken
//   const facebookCredential = auth.FacebookAuthProvider.credential(
//     data.accessToken,
//   );

//   // Sign-in the user with the credential
//   return auth().signInWithCredential(facebookCredential);
// }

const SignIn = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validate = () => {
    if (!VALIDATION.validate(email)) {
      showAlert('', 'Please enter email');
    } else if (!VALIDATION.isValidEmail(email)) {
      showAlert('', 'Please enter valid email');
    } else if (!VALIDATION.validate(password)) {
      showAlert('', 'Please enter password');
    } else {
      props.navigation.navigate('HomeEventPlanner');
    }
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <KeyboardAwareScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Sign In</Text>
          <View style={styles.socialContainer}>
            <TouchableOpacity
              style={styles.socialTouchable}
              onPress={() => onGoogleButtonPress()}>
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
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => validate()}
              style={styles.loginButton}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('SignUp')}>
              <Text style={styles.buttonTextBold}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
