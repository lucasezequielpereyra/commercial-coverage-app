import { StyleSheet, Dimensions } from 'react-native';
const { height } = Dimensions.get('window');

import { colors } from '../../../utils/colors';

export const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primaryVariant,
    height: height * 0.08,
  },
  text: {
    fontSize: 25,
    color: colors.white,
  },
});
