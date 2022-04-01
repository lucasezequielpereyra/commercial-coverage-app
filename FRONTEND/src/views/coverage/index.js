import React from 'react';
import { View } from 'react-native';
import Coverages from '../../components/molecules/coverages/index';
import SubHeader from '../../components/atoms/subheader';

const CovarageScreen = () => {
  return (
    <View>
      <SubHeader title="COBERTURAS" />
      <Coverages />
    </View>
  );
};

export default CovarageScreen;
