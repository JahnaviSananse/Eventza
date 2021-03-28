import axios from 'axios';
import evn from 'src/environment/env';

class Request {
  // public axios: AxiosInstance;
  api;
  isConnected = false;
  constructor() {
    this.api = axios.create({
      baseURL: evn.API_URL,
      timeout: 100000,
    });
  }

  async authCall(config) {
    try {
      let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      };
      const res = await this.api.request({
        headers,
        ...config,
      });
      return res.data;
    } catch (error) {
      throw error.response.data.message;
    }
  }

  // public async call(config: AxiosRequestConfig) {
  //   // const state: IReduxState = store.getState();
  //   const state: IReduxState = store.getState();
  //   let authToken = state.auth.token.access_token;
  //   if (authToken === null) {
  //     let data = await AsyncStorage.getItem(CONSTANT.IS_LOGGED_IN);
  //     if (data !== null) {
  //       let parsedData = JSON.parse(data);
  //       authToken = parsedData.token.access_token;
  //     }
  //   }
  //   // console.log('Config :', config);
  //   //console.log('authToken :', authToken);
  //   try {
  //     let headers: any = {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //     };

  //     if (authToken) {
  //       headers = {
  //         ...headers,
  //         Authorization: `Bearer ${authToken}`,
  //       };
  //     }
  //     const res = await this.api.request({
  //       headers,
  //       ...config,
  //     });
  //     return res.data;
  //   } catch (error) {
  //     console.log('error coming :', error);
  //     if (error.message === 'Network Error') {
  //       ('No Internet connection');
  //     }
  //     throw error;
  //   }
  // }

  // public async multipart(config: AxiosRequestConfig) {
  //   // const state: IReduxState = store.getState();
  //   const state: IReduxState = store.getState();
  //   let authToken = state.auth.access_token;
  //   if (authToken === null) {
  //     let data = await AsyncStorage.getItem(CONSTANT.IS_LOGGED_IN);
  //     if (data !== null) {
  //       let parsedData = JSON.parse(data);
  //       authToken = parsedData.token;
  //     }
  //   }
  //   console.log('Config :', config);
  //   try {
  //     let headers: any = {};
  //     if (authToken) {
  //       headers = {
  //         // ...headers,
  //         'Content-Type': 'multipart/form-data',
  //         Authorization: `Bearer ${authToken}`,
  //       };
  //     }
  //     console.log('Req params=>', headers);
  //     const res = await this.api.request({
  //       headers,
  //       ...config,
  //     });
  //     return res.data;
  //   } catch (error) {
  //     if (error.message === 'Network Error') {
  //       ('No Internet connection');
  //       // showSnackBar('No Internet connection')
  //     }
  //     throw error;
  //   }
  // }
}

export default new Request();
