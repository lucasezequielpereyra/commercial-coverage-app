import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../utils/colors';

const { width } = Dimensions.get('window');

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: width,
    marginVertical: '1.3%',
  },
  label: {
    flexWrap: 'wrap',
    width: width / 1.5,
    fontSize: width * 0.05,
    color: colors.primaryVariant,
    marginHorizontal: '2%',
    fontWeight: 'bold',
  },
  value: {
    width: width / 6,
    fontSize: width * 0.06,
    color: colors.grey,
    textAlign: 'center',
  },
  containerHeader: {
    flex: 1,
    flexDirection: 'row',
    width: width,
    marginBottom: '2%',
    borderBottomWidth: 0.5,
  },
  labelHeader: {
    width: width / 2,
    fontSize: width * 0.06,
    color: colors.primaryColor,
    marginHorizontal: '2%',
    fontWeight: 'bold',
  },
  valueHeader: {
    width: width / 2,
    fontSize: width * 0.06,
    color: colors.primaryColor,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
