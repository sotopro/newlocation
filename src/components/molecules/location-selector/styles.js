import {StyleSheet} from 'react-native';
import colors from '../../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  preview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.primaryColor,
    borderWidth: 1,
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
