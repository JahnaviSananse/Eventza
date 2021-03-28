import {AsyncStorage} from 'react-native';
import * as API from 'src/api/auth';
import * as CONSTANT from 'src/constants/constant';
import * as ROUTER from 'src/routes/router';
import * as TYPE from '../types/auth';

export const setDummyLogin = (login) => async (dispatch, store) => {
  dispatch({
    type: TYPE.SET_DUMMY_LOGIN,
    payload: login,
  });
};

export const doLogin = (email, password) => async (dispatch, store) => {
  try {
    dispatch({type: TYPE.LOGIN_REQUEST});
    const data = await API.login({email, password});
    data.email = email;
    if (data && data.data.email_verified) {
      AsyncStorage.setItem(CONSTANT.USER_DATA, JSON.stringify(data));
      AsyncStorage.setItem(CONSTANT.ACCESS_TOKEN, data.data.token.access_token);
      AsyncStorage.setItem(
        CONSTANT.REFRESH_TOKEN,
        data.data.token.refresh_token,
      );
    }
    dispatch({
      type: TYPE.LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TYPE.LOGIN_ERROR,
      payload: error,
    });
  }
};
export const doSignup = (request) => async (dispatch, store) => {
  try {
    dispatch({type: TYPE.SIGNUP_REQUEST});
    const data = await API.signup(request);
    dispatch({
      type: TYPE.SIGNUP_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TYPE.SIGNUP_ERROR,
      payload: error,
    });
  }
};
export const clearSignupData = () => async (dispatch, store) => {
  dispatch({
    type: TYPE.SIGNUP_DATA_CLEAR,
  });
};

export const clearForgotData = () => async (dispatch, store) => {
  dispatch({
    type: TYPE.FORGOT_PASSWORD_CLEAR,
  });
};

export const clearLoginData = () => async (dispatch, store) => {
  dispatch({
    type: TYPE.LOGIN_DATA_CLEAR,
  });
};
export const resendCode = (request) => async (dispatch, store) => {
  try {
    dispatch({type: TYPE.RESEND_REQUEST});
    const data = await API.resendCode(request);
    dispatch({
      type: TYPE.RESEND_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TYPE.RESEND_ERROR,
      payload: error,
    });
  }
};
export const verifyCode = (request, param) => async (dispatch, store) => {
  try {
    dispatch({type: TYPE.VERIFY_REQUEST});
    console.log('Request', request);
    const data = await API.verify(request);
    data.email = request.email;

    if (!param) {
      dispatch({
        type: TYPE.VERIFY_SUCCESS_SIGNUP,
        payload: data,
      });
      if (data && data.data.email_verified) {
        // console.log('Aayu');
        AsyncStorage.setItem(CONSTANT.USER_DATA, JSON.stringify(data));
        AsyncStorage.setItem(
          CONSTANT.ACCESS_TOKEN,
          data.data.token.access_token,
        );
        AsyncStorage.setItem(
          CONSTANT.REFRESH_TOKEN,
          data.data.token.refresh_token,
        );
      }
    } else {
      dispatch({
        type: TYPE.VERIFY_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    dispatch({
      type: TYPE.VERIFY_ERROR,
      payload: error,
    });
  }
};
export const logout_user = () => async (dispatch, store) => {
  try {
    dispatch({type: TYPE.LOGOUT_REQUEST});
    const data = await API.logout();
    if (data) {
      AsyncStorage.removeItem(CONSTANT.USER_DATA);
      AsyncStorage.removeItem(CONSTANT.ACCESS_TOKEN);
      AsyncStorage.removeItem(CONSTANT.REFRESH_TOKEN);
      ROUTER.replace('Login', {});
    }
    dispatch({
      type: TYPE.LOGOUT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    AsyncStorage.removeItem(CONSTANT.USER_DATA);
    AsyncStorage.removeItem(CONSTANT.ACCESS_TOKEN);
    AsyncStorage.removeItem(CONSTANT.REFRESH_TOKEN);
    ROUTER.replace('Login', {});
    dispatch({
      type: TYPE.LOGOUT_ERROR,
      payload: error,
    });
  }
};
export const forgotPassword_user = (request) => async (dispatch, store) => {
  try {
    dispatch({type: TYPE.FORGOT_PASSWORD_REQUEST});
    const data = await API.forgotPassword({email: request});
    dispatch({
      type: TYPE.FORGOT_PASSWORD_SUCCESS,
      payload: data,
    });
    if (data) {
      setTimeout(() => {
        ROUTER.navigate('VerificationCode', {email: request});
      }, 100);
    }
  } catch (error) {
    dispatch({
      type: TYPE.FORGOT_PASSWORD_ERROR,
      payload: error,
    });
  }
};
export const resetPassword_user = (request) => async (dispatch, store) => {
  try {
    dispatch({type: TYPE.RESET_PASSWORD_REQUEST});
    const data = await API.resetPassword(request);
    dispatch({
      type: TYPE.RESET_PASSWORD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TYPE.RESET_PASSWORD_ERROR,
      payload: error,
    });
  }
};
export const clearRedirect = () => async (dispatch, store) => {
  dispatch({
    type: TYPE.RESET_PASSWORD_SUCCESS,
  });
};
