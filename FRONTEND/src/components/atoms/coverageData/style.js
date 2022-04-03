import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../utils/colors';

const { width } = Dimensions.get('window');

export const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    marginBottom: 10,
    marginHorizontal: 10,
  },
  label: {
    fontSize: width * 0.05,
    color: colors.primaryVariant,
    marginHorizontal: '2%',
  },
  value: {
    fontSize: width * 0.05,
    color: colors.grey,
  },
});
