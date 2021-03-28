import {StyleSheet} from 'react-native';
import {theme} from '../../constants/colors';
import {getSize} from '../../constants/constant';

const styles = StyleSheet.create({
  itemContainer: {
    height: 172,
    width: '47%',
    borderColor: theme.colors.gray,
    borderWidth: 0.2,
    marginBottom: 20,
    // flexDirection: 'row',
    shadowColor: theme.colors.darkShalow,
    shadowOffset: {width: 0, height: 0},
    marginEnd: 20,
  },
  headerTitleText: {fontSize: 22, color: theme.colors.white},
  itemIcon: {width: '100%', height: '45%'},
  itemDetail: {margin: 10},
  itemTitle: {fontSize: getSize(12), fontWeight: '500'},
  itemDescription: {
    color: theme.colors.blue,
    fontSize: getSize(12),
    marginEnd: 10,
  },
  itemDescriptionContainer: {
    flexDirection: 'row',
    marginBottom: 8,
    marginTop: 15,
  },
  itemTagsContainer: {flexDirection: 'row'},
  itemTag: {fontSize: getSize(12), color: theme.colors.textGray, marginEnd: 10},
  headerIcon: {width: 24, height: 24},
  headerIconMed: {width: 20, height: 20, marginStart: 15},
});
export default styles;
