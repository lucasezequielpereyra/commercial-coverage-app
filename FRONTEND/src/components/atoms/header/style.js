import { StyleSheet } from 'react-native';
import { colors } from '../../../utils/colors';

export const Styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryColor,
  },
  text: {
    fontSize: 30,
    color: colors.white,
  },
});
