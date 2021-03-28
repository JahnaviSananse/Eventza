import {StyleSheet} from 'react-native';
import * as CONSTANT from '../../../constants/constant';
import {getSize} from '../../../constants/constant';
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
  // flatlistContainer: {paddingBottom: 300},
  itemContainer: {
    height: 98,
    borderColor: theme.colors.gray,
    borderWidth: 0.2,
    marginBottom: 20,
    flexDirection: 'row',
    // paddingEnd: 5,
    shadowColor: theme.colors.darkShalow,
    shadowOffset: {width: 0, height: 0},
    // elevation: 5,
  },
  headerTitleText: {fontSize: 22, color: theme.colors.white},
  itemIcon: {width: '45%', height: '100%'},
  itemDetail: {width: '50%', margin: 10},
  itemTitle: {fontSize: getSize(16), fontWeight: '500'},
  itemDescription: {
    color: theme.colors.blue,
    fontSize: getSize(12),
    marginEnd: 10,
  },
  itemDescriptionContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    marginTop: 5,
  },
  itemTagsContainer: {flexDirection: 'row'},
  itemTag: {fontSize: getSize(12), color: theme.colors.textGray, marginEnd: 10},
  headerIcon: {width: 24, height: 24},
  headerIconMed: {width: 20, height: 20, marginStart: 15},
});
export default styles;
