import axios from 'axios';
import { AsyncStorage } from 'react-native';
import * as CONSTANT from 'src/constants/constant';
import evn from 'src/environment/env';

let AxiosFormDataInstance = axios.create({
  baseURL: evn.API_URL,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// const getTokenURL = (data: any) => {
//     if (data) {
//         data.then(function (result: any) {
//             if (result) {
//                 return result.toString()
//             }
//         })
//     }
// }

AxiosFormDataInstance.interceptors.request.use((config) =>
  AsyncStorage.getItem(CONSTANT.ACCESS_TOKEN).then((value) => {
    config.headers['Authorization'] = 'Bearer ' + value;
    config.headers['Content-Type'] = 'multipart/form-data';
    return config;
  }),
);

AxiosFormDataInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return new Promise((resolve, reject) => {
      const originalReq = err.config;
      //console.log('INERROR', err);
      if (err.response) {
        //console.log("ER REsponse", err.response);
        if (
          err.response.status === 401 &&
          err.config &&
          !err.config.__isRetryRequest
        ) {
          originalReq._retry = true;
          AsyncStorage.getItem(CONSTANT.REFRESH_TOKEN).then((value) => {
            let res = axios({
              method: 'post',
              url: 'http://139.59.65.130:5000/mob/api/v1/auth/refreshtoken',
              data: {refresh_token: value},
            }).then((res) => {
              AsyncStorage.setItem(
                CONSTANT.ACCESS_TOKEN,
                res.data.data.access_token,
              );
              AsyncStorage.setItem(
                CONSTANT.REFRESH_TOKEN,
                res.data.data.refresh_token,
              );
              originalReq.headers['access_token'] = res.data.data.access_token;
              return axios(originalReq);
            });
            resolve(res);
          });
        } else {
          //console.log('errerrerr', err.response);
          throw err.response.data.message;
        }
      } else {
        //console.log('NATHI', err.message);
        throw err.message;
      }
      return Promise.reject(err);
    });
  },
);

export default AxiosFormDataInstance;
