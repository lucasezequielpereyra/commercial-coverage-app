import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../utils/colors';

const { width, height } = Dimensions.get('window');

export const Styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: '5%',
    alignSelf: 'center',
  },
  input: {
    width: width * 0.6,
    height: height * 0.06,
    fontSize: 20,
    alignSelf: 'center',
    borderColor: '#fff',
    borderBottomColor: colors.primaryVariant,
    borderBottomWidth: 1,
    padding: 0,
  },
  customBtnBG: {
    backgroundColor: colors.primaryVariant,
    borderRadius: 5,
    marginHorizontal: width * 0.05,
    padding: '1%',
  },
  customBtnText: {
    padding: 10,
    color: colors.white,
    alignSelf: 'center',
  },
});
