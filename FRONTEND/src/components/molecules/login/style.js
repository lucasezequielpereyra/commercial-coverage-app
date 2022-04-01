import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../utils/colors';

const { width, height } = Dimensions.get('window');

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignSelf: 'center',
  },
  logo: {
    flex: 1,
    flexGrow: 0.4,
    width: width,
    resizeMode: 'contain',
  },
  input: {
    flex: 1,
    flexGrow: 0.08,
    width: width * 0.9,
    height: height * 0.1,
    alignSelf: 'center',
    borderColor: '#fff',
    borderBottomColor: colors.primaryVariant,
    borderWidth: 1,
    padding: 0,
  },
  customBtnBG: {
    flex: 1,
    flexGrow: 0.08,
    backgroundColor: colors.primaryVariant,
    borderRadius: 5,
    marginHorizontal: width * 0.05,
    marginTop: height * 0.05,
  },
  customBtnText: {
    fontSize: 20,
    padding: 10,
    color: colors.white,
    alignSelf: 'center',
  },
});
