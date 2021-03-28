import {StyleSheet} from 'react-native';
import * as CONSTANT from '../../../constants/constant';
import {getSize} from '../../../constants/constant';
import {theme} from './../../../constants/colors';

const styles = StyleSheet.create({
  safearea: {backgroundColor: theme.colors.white, height: '100%'},
  mainContainer: {
    // height: CONSTANT.SCREEN_HEIGHT - 120,
    flex: 1,
  },
  detailImage: {
    // width: '100%',
    // height: '40%',
    width: '100%',
    height: CONSTANT.SCREEN_HEIGHT / 3,
  },
  //header
  headerTitleText: {fontSize: 22, color: theme.colors.white},
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    height: 66,
    backgroundColor: theme.colors.blue,
  },
  headerIcon: {width: 24, height: 24},
  headerIconMed: {width: 18, height: 18, marginStart: 15},
  headerIconLarge: {width: 18, height: 18, marginStart: 15},
  //screen
  tagButton: {
    height: 35,
    flex: 1,
    paddingHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'lightgray',
    borderWidth: 0.5,
    marginEnd: 20,
  },
  tagContainer: {
    paddingVertical: 13,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  descriptionContainer: {padding: 20},
  detailTitle: {fontSize: getSize(24), fontWeight: '500'},
  detailDescription: {fontSize: getSize(20), marginTop: 20, fontWeight: '300'},
  commonIcon: {width: 24, height: 24, marginEnd: 10},
  infoContainer: {
    height: 40,
    width: '100%',
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
    backgroundColor: theme.colors.white,
  },
  bottomShareContainer: {flexDirection: 'row', position: 'absolute', right: 10},
  timeText: {fontSize: 18, fontWeight: '200', marginEnd: 10},
  infoText: {fontSize: 16, fontWeight: '400', color: theme.colors.blue},
});
export default styles;
