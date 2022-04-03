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
    borderColor: '#fff',
    borderBottomColor: colors.primaryVariant,
    borderBottomWidth: 1,
    padding: 0,
    textAlign: 'center',
  },
  customBtnBG: {
    backgroundColor: colors.primaryVariant,
    borderRadius: 5,
    marginLeft: width * 0.05,
    padding: '1%',
  },
  customBtnText: {
    padding: '3%',
    color: colors.white,
    alignSelf: 'center',
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: '5%',
  },
  customBtnCov: {
    backgroundColor: colors.primaryVariant,
    borderRadius: 5,
    padding: '1%',
  },
  customTextCov: {
    paddingVertical: '3%',
    width: width * 0.25,
    color: colors.white,
    textAlign: 'center',
    fontSize: width * 0.04,
  },
});
