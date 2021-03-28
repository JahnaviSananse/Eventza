import {StyleSheet} from 'react-native';
import * as CONSTANT from '../../../constants/constant';
import {theme} from './../../../constants/colors';

const styles = StyleSheet.create({
  safearea: {backgroundColor: theme.colors.white},
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 66,
    backgroundColor: theme.colors.blue,
  },
  mainContainer: {
    height: CONSTANT.SCREEN_HEIGHT - 120,
    padding: 20,
    paddingBottom: 70,
  },
  itemRightIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 16,
  },
  itemTitle: {fontSize: 16},
  itemLeftIcon: {width: 24, height: 24, marginEnd: 15},
  verticalDevider: {
    height: '100%',
    width: 2,
    backgroundColor: theme.colors.blue,
    position: 'absolute',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    borderWidth: 0.2,
    borderColor: 'gray',
    marginBottom: 10,
    paddingHorizontal: 16,
  },
});
export default styles;
