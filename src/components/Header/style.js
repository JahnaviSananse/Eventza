import {StyleSheet} from 'react-native';
import {theme} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: theme.colors.blue,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingLeft: 10,
    paddingRight: 10,
  },
  leftImgContainer: {
    width: 35,
    height: 35,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    color: theme.colors.white,
  },
  rightImage: {
    width: 20,
    height: 20,
  },
  img: {
    width: 30,
    height: 25,
  },
});
export default styles;
