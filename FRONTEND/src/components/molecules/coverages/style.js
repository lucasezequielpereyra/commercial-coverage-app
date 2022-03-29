import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../utils/colors';

const { width } = Dimensions.get('window');

export const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '3%',
    marginHorizontal: width * 0.2,
  },
  input: {
    width: width * 0.25,
  },
  customBtnBG: {
    backgroundColor: colors.primaryColor,
    borderRadius: 5,
    marginHorizontal: width * 0.05,
  },
  customBtnText: {
    fontSize: 20,
    padding: 10,
    color: colors.white,
  },
});
