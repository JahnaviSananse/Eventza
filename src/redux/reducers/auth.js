import * as TYPE from '../types/auth';
const initialState = {
  loading: false,
  signupData: null,
  email: null,
  signupError: null,
  resendError: null,
  loginError: null,
  verifyError: null,
  resetPassError: null,
  forgotPassError: null,
  signupSuccess: '',
  verifySuccess: '',
  resendMessage: null,
  access_token: '',
  refresh_token: '',
  userData: null,
  email_verified: null,
  verifyType: '',
  resetPasswordSuccess: '',
  isLoggedIn: false,
};
export default (state = initialState, action) => {
  switch (action.type) {
    case TYPE.SET_DUMMY_LOGIN: {
      return {
        ...state,
        isLoggedIn: action.payload,
      };
    }
    //signup
    case TYPE.USER_EMAIL: {
      return {
        ...state,
        email: action.payload,
      };
    }
    case TYPE.SIGNUP_REQUEST: {
      return {
        ...state,
        loading: true,
        verifyType: '',
        signupError: null,
        resendError: null,
        loginError: null,
        verifyError: null,
        resetPassError: null,
        forgotPassError: null,
      };
    }
    case TYPE.SIGNUP_ERROR: {
      return {
        ...state,
        loading: false,
        signupError: action.payload,
        verifyType: '',
        resendError: null,
        loginError: null,
        verifyError: null,
        resetPassError: null,
        forgotPassError: null,
      };
    }
    case TYPE.SIGNUP_SUCCESS: {
      return {
        ...state,
        loading: false,
        email: action.payload.data.email,
        signupData: action.payload,
        email_verified: null,
        signupSuccess: action.payload.message,
        verifyType: '',
        verifySuccess: '',
      };
    }
    case TYPE.SIGNUP_DATA_CLEAR: {
      return {
        ...state,
        loading: false,
        signupData: null,
        signupError: null,
        verifySuccess: '',
        verifyType: '',
        resendError: null,
        loginError: null,
        verifyError: null,
        resetPassError: null,
        forgotPassError: null,
      };
    }
    //login
    case TYPE.LOGIN_REQUEST: {
      return {
        ...state,
        loading: true,
        loginError: null,
        email: null,
        email_verified: null,
        resendMessage: null,
        resetPassError: null,
        signupError: null,
        resendError: null,
        verifyError: null,
        forgotPassError: null,
      };
    }
    case TYPE.LOGIN_ERROR: {
      return {
        ...state,
        loading: false,
        loginError: action.payload,
        signupError: null,
        resendError: null,
        verifyError: null,
        resetPassError: null,
        forgotPassError: null,
      };
    }
    case TYPE.LOGIN_SUCCESS: {
      let accesstoken = '';
      let refreshtoken = '';
      if (action.payload.data.token) {
        accesstoken = action.payload.data.token.access_token;
        refreshtoken = action.payload.data.token.refresh_token;
      }
      //console.log('RED', action.payload.data.email_verified);
      return {
        ...state,
        loading: false,
        email: action.payload.email,
        email_verified: action.payload.data.email_verified,
        access_token: accesstoken,
        refresh_token: refreshtoken,
        userData: action.payload.data.user,
      };
    }
    case TYPE.LOGIN_DATA_CLEAR: {
      return {
        ...state,
        loading: false,
        loginError: null,
        email_verified: null,
        signupError: null,
        resendError: null,
        verifyError: null,
        resetPassError: null,
        forgotPassError: null,
        verifySuccess: '',
      };
    }
    //resend verification code signup
    case TYPE.RESEND_REQUEST: {
      return {
        ...state,
        loading: true,
        resendMessage: null,
        signupError: null,
        resendError: null,
        loginError: null,
        verifyError: null,
        resetPassError: null,
        forgotPassError: null,
        verifySuccess: '',
      };
    }
    case TYPE.RESEND_ERROR: {
      return {
        ...state,
        loading: false,
        resendMessage: action.payload,
        signupError: null,
        resendError: null,
        loginError: null,
        verifyError: null,
        resetPassError: null,
        forgotPassError: null,
        verifySuccess: '',
      };
    }
    case TYPE.RESEND_SUCCESS: {
      return {
        ...state,
        loading: false,
        resendMessage: action.payload.message,
      };
    }
    //verification code
    case TYPE.VERIFY_REQUEST: {
      return {
        ...state,
        loading: true,
        resendMessage: null,
        verifyError: null,
        verifyType: '',
        verifySuccess: '',
        loginError: null,
        signupError: null,
        resendError: null,
        resetPassError: null,
        forgotPassError: null,
      };
    }
    case TYPE.VERIFY_ERROR: {
      return {
        ...state,
        loading: false,
        verifyError: action.payload,
        verifyType: '',
        signupError: null,
        resendError: null,
        loginError: null,
        resetPassError: null,
        forgotPassError: null,
        verifySuccess: '',
      };
    }
    case TYPE.VERIFY_SUCCESS: {
      return {
        ...state,
        loading: false,
        email_verified: true,
        verifySuccess: action.payload.message,
        email: action.payload.email,
        verifyError: null,
        verifyType: action.payload.data.code ? '' : 'VERIFY',
      };
    }
    case TYPE.VERIFY_SUCCESS_SIGNUP: {
      let accesstoken = '';
      let refreshtoken = '';
      if (action.payload.data.token) {
        accesstoken = action.payload.data.token.access_token;
        refreshtoken = action.payload.data.token.refresh_token;
      }
      console.log('action.payload', action.payload.data);
      return {
        ...state,
        loading: false,
        email_verified: true,
        verifySuccess: action.payload.message,
        email: action.payload.email,
        access_token: accesstoken,
        refresh_token: refreshtoken,
        userData: action.payload.data.user,
        verifyError: null,
        verifyType: action.payload.data.code ? '' : 'VERIFY',
      };
    }
    //logout
    case TYPE.LOGOUT_REQUEST: {
      return {
        ...state,
        loading: true,
        signupError: null,
        resendError: null,
        loginError: null,
        verifyError: null,
        resetPassError: null,
        forgotPassError: null,
        verifySuccess: '',
      };
    }
    case TYPE.LOGOUT_SUCCESS: {
      return {
        ...state,
        loading: false,
        userData: null,
        access_token: '',
        refresh_token: '',
      };
    }
    case TYPE.LOGOUT_ERROR: {
      return {
        ...state,
        loading: false,
        signupError: null,
        resendError: null,
        loginError: null,
        verifyError: null,
        resetPassError: null,
        forgotPassError: null,
      };
    }
    //forgot password
    case TYPE.FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        loading: true,
        forgotPassError: null,
        resendMessage: null,
        verifyType: '',
        loginError: null,
        signupError: null,
        resendError: null,
        verifyError: null,
        verifySuccess: '',
        resetPassError: null,
        resetPasswordSuccess: '',
      };
    }
    case TYPE.FORGOT_PASSWORD_SUCCESS: {
      //console.log("Email", action.payload.email);
      return {
        ...state,
        email: null,
        loading: false,
        verifyType: '',
        verifySuccess: '',
      };
    }
    case TYPE.FORGOT_PASSWORD_ERROR: {
      return {
        ...state,
        loading: false,
        forgotPassError: action.payload,
        verifyType: '',
        email: null,
        signupError: null,
        resendError: null,
        loginError: null,
        verifyError: null,
        verifySuccess: '',
        resetPassError: null,
      };
    }
    case TYPE.FORGOT_PASSWORD_CLEAR: {
      return {
        ...state,
        forgotPassError: null,
        resendMessage: null,
        verifyType: '',
        loginError: null,
        signupError: null,
        resendError: null,
        verifyError: null,
        resetPassError: null,
      };
    }
    //reset password code signup
    case TYPE.RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        loading: true,
        resetPassError: null,
        verifyType: '',
        signupError: null,
        resendError: null,
        loginError: null,
        verifyError: null,
        verifySuccess: '',
        forgotPassError: null,
        resetPasswordSuccess: '',
      };
    }
    case TYPE.RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false,
        resetPasswordSuccess: action.payload.message,
      };
    }
    case TYPE.RESET_PASSWORD_ERROR: {
      return {
        ...state,
        loading: false,
        resetPassError: action.payload,
        verifyType: '',
        signupError: null,
        resendError: null,
        loginError: null,
        verifyError: null,
        forgotPassError: null,
        resetPasswordSuccess: '',
      };
    }
    case TYPE.RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        loading: false,
        verifySuccess: '',
        signupSuccess: '',
      };
    }
    default:
      return state;
  }
};
