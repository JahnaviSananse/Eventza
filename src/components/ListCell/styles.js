import {StyleSheet} from 'react-native';
import {theme} from '../../constants/colors';
import {getSize} from '../../constants/constant';

const styles = StyleSheet.create({
  itemContainer: {
    height: 220,
    width: 320,
    borderColor: theme.colors.gray,
  },
  headerTitleText: {fontSize: 22, color: theme.colors.white},
  itemIcon: {width: '90%', height: '90%'},
  itemDetail: {marginTop: 10},
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
  itemTagsContainer: {flexDirection: 'row'},
  itemTag: {
    fontSize: getSize(12),
    color: theme.colors.textGray,
    // marginEnd: 10,
  },
  headerIcon: {width: 24, height: 24},
  headerIconMed: {width: 20, height: 20, marginStart: 15},
  mapIcon: {width: 12, height: 12},
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  locationText: {fontSize: getSize(12), textDecorationLine: 'underline'},
  timeText: {fontSize: getSize(12)},
});
export default styles;
