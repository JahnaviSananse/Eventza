import axios from 'axios';
import { AsyncStorage } from 'react-native';
import * as CONSTANT from 'src/constants/constant';
import evn from 'src/environment/env';

let AxiosInstance = axios.create({
    baseURL: evn.API_URL,
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json',
    }
})


AxiosInstance.interceptors.request.use(config =>
    AsyncStorage.getItem(CONSTANT.ACCESS_TOKEN).then((value) => {
        config.headers['Authorization'] = 'Bearer ' + value;
        return config;
    })
)

AxiosInstance.interceptors.response.use(response => {
    console.log("response:", response)
    return response;
}, err => {
    return new Promise((resolve, reject) => {
        const originalReq = err.config;
        console.log("ErRRRR", err ,err.response);
        if (err.response && err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
            originalReq._retry = true;
            AsyncStorage.getItem(CONSTANT.REFRESH_TOKEN).then((value) => {
                //console.log("Valuw", value)
                let res = axios({
                    method: 'post',
                    url: 'http://139.59.65.130:5000/mob/api/v1/auth/refreshtoken',
                    data: { refresh_token: value }
                }).then(res => {
                    //console.log("res", res);
                    AsyncStorage.setItem(CONSTANT.ACCESS_TOKEN, res.data.data.access_token)
                    AsyncStorage.setItem(CONSTANT.REFRESH_TOKEN, res.data.data.refresh_token)
                    originalReq.headers['access_token'] = res.data.data.access_token;
                    return axios(originalReq);
                }).catch((err) => console.log(err));
                resolve(res);
            })
        } else {
            //console.log("ThrowErrr", err.response.data.message)
            throw err.response.data.message
        }
        return Promise.reject(err);
    });
});

export default AxiosInstance