import React from 'react';
import { ScrollView } from 'react-native';
import CoverageData from '../../components/atoms/coverageData';

const CoverageKofre = ({ route }) => {
  const { data } = route.params;
  const coverages = data.clients.coberturas;
  const myData = [
    { CCTM: coverages.CCTM },
    { 'CEPITA FRESH CF': coverages.FRESH_CF },
    { 'Smart / Kin s/g CP': coverages.SMART_KIN_SG_CP },
    { 'CCSO / CCSA 500': coverages.CCSO_CCSA_500 },
    { 'FN / SP One Way': coverages.FN_SP_OW },
    { 'FN Pomelo ': coverages.FN_POMELO },
    { 'Smart Water': coverages.SMART },
    { '220 / 237': coverages.PET_220_237 },
  ];
  return (
    <ScrollView>
      <CoverageData data={myData} />
    </ScrollView>
  );
};

export default CoverageKofre;
