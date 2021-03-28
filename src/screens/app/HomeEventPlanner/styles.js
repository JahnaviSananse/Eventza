import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/colors';
import * as CONSTANT from '../../../constants/constant';
import {getSize} from '../../../constants/constant';

const styles = StyleSheet.create({
  safearea: {backgroundColor: theme.colors.background},
  headerContainer: {
    // flexDirection: 'row',
    // alignItems: 'center',
    paddingHorizontal: 15,
    height: 180,
    backgroundColor: theme.colors.blue,
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '95%',
    paddingHorizontal: 20,
  },
  userIcon: {position: 'absolute', right: 0},
  mainContainer: {
    height: CONSTANT.SCREEN_HEIGHT - 120,
    paddingHorizontal: 20,
    paddingTop: 20,
    // paddingBottom: 70,
    backgroundColor: theme.colors.white,
  },
  // flatlistContainer: {paddingBottom: 300},

  headerIcon: {width: 24, height: 24},
  headerIconMed: {width: 40, height: 40, borderRadius: 40},
  headerIconLarge: {width: 18, height: 18, marginStart: 15},
  addContainer: {position: 'absolute', bottom: 100, right: 20},
  addIcon: {width: 45, height: 45},
  //
  cItemContainer: {
    height: 30,
    marginEnd: 10,
    // borderColor: theme.colors.white,
    // borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  inputContainer: {
    borderColor: theme.colors.white,
    borderWidth: 0.5,
    height: 45,
    marginVertical: 20,
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  searchIcon: {
    height: 20,
    width: 20,
  },
  input: {width: '90%', marginStart: 10},
  sectionHeader: {marginBottom: 10, color: theme.colors.gray},
  mapIcon: {width: 12, height: 12, marginEnd: 5},
  locationText: {
    color: theme.colors.offwhite,
    textDecorationLine: 'underline',
    fontSize: 12,
  },

  //
  itemContainer: {
    height: 270,
    width: '100%',
    borderColor: theme.colors.gray,
    marginBottom: 20,
    borderWidth: 0.4,
    borderRadius: 10,
  },
  itemIcon: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  itemDetail: {padding: 10},
  itemTitle: {fontSize: getSize(16), fontWeight: '500'},
  itemDescription: {
    color: theme.colors.blue,
    fontSize: getSize(12),
    // marginEnd: 10,
  },
  itemDescriptionContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    marginTop: 5,
  },
  // mapIcon: {width: 12, height: 12},
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  itemlocationText: {fontSize: getSize(12), textDecorationLine: 'underline'},
});
export default styles;
