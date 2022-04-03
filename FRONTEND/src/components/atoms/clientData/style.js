import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../utils/colors';

const { width, height } = Dimensions.get('window');

export const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '5%',
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: width * 0.05,
    color: colors.primaryVariant,
    marginHorizontal: '2%',
    marginBottom: '-3.5%',
  },
  value: {
    fontSize: width * 0.05,
    color: colors.grey,
    marginBottom: '-4%',
  },
});
