import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../../utils/colors';

const { width, height } = Dimensions.get('window');

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  logo: {
    width: width,
    alignSelf: 'flex-start',
    resizeMode: 'contain',
    marginVertical: '-4%',
  },
  input: {
    width: width * 0.9,
    alignSelf: 'center',
    borderColor: '#fff',
    borderBottomColor: colors.primaryVariant,
    borderWidth: 1,
    color: colors.primaryVariant,
    fontWeight: 'bold',
    fontSize: 16,
  },
  customBtnBG: {
    flexDirection: 'row',
    backgroundColor: colors.primaryVariant,
    borderRadius: 5,
    marginHorizontal: width * 0.05,
    marginTop: height * 0.08,
    justifyContent: 'center',
    padding: '4%',
  },
  customBtnText: {
    fontSize: 20,
    alignSelf: 'center',
    color: colors.white,
  },
});
