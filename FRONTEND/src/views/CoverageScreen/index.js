import React from 'react';
import { Styles } from './style';
import { View } from 'react-native';
import CoverageHeader from '../../components/atoms/coverageHeader/index';
import Coverages from '../../components/molecules/coverages/index';

const CovarageScreen = () => {
  return (
    <View style={Styles.container}>
      <CoverageHeader />
      <Coverages />
    </View>
  );
};

export default CovarageScreen;
