import {StyleSheet} from 'react-native';
import {theme} from '../../../constants/colors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.background,
  },
  logoContainer: {
    width: '100%',
    height: '100%',
    top: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    padding: 20,
  },
  keyboardAware: {flex: 1},
  logo: {
    width: 200,
    height: 280,
    marginBottom: 50,
  },
  appTitle: {fontSize: 45, fontWeight: 'bold', color: theme.colors.red},
});
export default styles;
