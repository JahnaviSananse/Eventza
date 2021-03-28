import {Alert} from 'react-native';

export const showAlert = (title, message) => {
  Alert.alert(title === '' ? 'CoinTube' : title, message, [{text: 'OK'}], {
    cancelable: false,
  });
};

export const addCommas = (num) => {
  var str = num.toString().split('.');
  if (str[0].length >= 4) {
    //add comma every 3 digits befor decimal
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }
  return str.join('.');
};

// export const chooseDoc = async () => {
//   try {
//     const res = await DocumentPicker.pick({
//       type: [DocumentPicker.types.pdf],
//     });
//     return res.uri;
//   } catch (err) {
//     if (DocumentPicker.isCancel(err)) {
//       // User cancelled the picker, exit any dialogs or menus and move on
//     } else {
//       throw err;
//     }
//   }
// };
