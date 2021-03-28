import request from './request';
import AxiosInstance from 'src/api/interceptorCall'

export async function refreshToken(params: any) {
  return request.authCall({
    url: '/user/token',
    method: 'PATCH',
    data: params,
  });
}
export async function login(req: object) {
  return request.authCall({
    url: '/auth/login',
    method: 'POST',
    data: req,
  });
}
export async function logout() {
  return AxiosInstance.post("/auth/logout")
}
export async function signup(req: any) {
  return request.authCall({
    url: '/auth/signup',
    method: 'POST',
    data: req,
  });
}
export async function verify(req: Object) {
  return request.authCall({
    url: '/auth/verificationcode',
    method: 'POST',
    data: req,
  });
}
export async function resendCode(req: any) {
  return request.authCall({
    url: '/auth/resendverificationcode',
    method: 'POST',
    data: req,
  });
}
export async function forgotPassword(req: object) {
  return request.authCall({
    url: '/auth/forgotpassword',
    method: 'POST',
    data: req,
  });
}
export async function resetPassword(req: Object) {
  return request.authCall({
    url: '/auth/resetpassword',
    method: 'POST',
    data: req,
  });
}
export async function spotifyAuth(req: any) {
  return request.call({
    url: `/auth/spotify`,
    method: 'POST',
    data: req,
  });
}
export async function updateLocation(req: any) {
  return request.call({
    url: `/user/me`,
    method: 'PATCH',
    data: req,
  });
}
export async function getCurrentUser() {
  return request.call({
    url: `/user/me`,
    method: 'GET',
  });
}
export async function deleteUser() {
  return request.call({
    url: `/user/me`,
    method: 'DELETE',
  });
}
export async function fetchSpotifyData() {
  return request.call({
    url: `/points/calculate-points`,
    method: 'PATCH',
  });
}
export async function getUserBadges() {
  return request.call({
    url: `/badge/get-user-badge`,
    method: 'GET',
  });
}
export async function getSavedOffers() {
  return request.call({
    url: `/user/me/saved-offer`,
    method: 'GET',
  });
}
export async function checkUserAcceptedTermsServices() {
  return request.call({
    url: `/user/me/check-term-accepted`,
    method: 'GET',
  });
}
export async function uplaodUserImage(params: any) {
  console.log('PARAMS====>', params);
  let imgObj: any = {
    name:
      params.file.fileName === undefined || params.file.fileName === null
        ? 'profile.jpeg'
        : params.file.fileName,
    type: params.file.type,
    // uri: Platform.OS === "android" ? params.file.uri : params.file.uri.replace("file://", "")
    uri: params.file.uri,
  };
  // Platform.OS === "android" ? params.file.uri : params.file.uri.replace("file://", "")
  let formData = new FormData();
  formData.append('moduleType', params.moduleType);
  formData.append('moduleId', params.moduleId);
  formData.append('file', imgObj);
  // console.log("PARAMS11====>", formData);
  return request.multipart({
    url: `/media`,
    method: 'POST',
    data: formData,
  });
}
