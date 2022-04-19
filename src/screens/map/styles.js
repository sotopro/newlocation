import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.white,
    fontSize: 16,
    color: colors.primaryColor,
    padding: 4,
    borderRadius: 4,
  },
  loading: {
    fontSize: 16,
    color: colors.primaryColor,
    fontWeight: 'bold',
  },
});
