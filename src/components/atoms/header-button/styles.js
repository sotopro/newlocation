import {StyleSheet, Platform} from 'react-native';
import {COLORS} from '../../../constants';

export const styles = StyleSheet.create({
  textButton: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Platform.OS === 'android' ? 'white' : COLORS.primaryColor,
  },
});
