import React from 'react';
import CoverageData from '../../components/atoms/coverageData';

const CoverageKofre = ({ route }) => {
  const { data } = route.params;
  const coverages = data.clients.coberturas;
  const myData = [
    { key: 'Smart / Kin s/g CP', data: coverages.SMART_KIN_SG_CP },
    { key: 'FN / SP One Way', data: coverages.FN_SP_OW },
    { key: 'CEPITA FRESH CF', data: coverages.FRESH_CF },
    { key: 'CCSO RP / RGB ', data: coverages.CCSO_REFPET__RGB },
  ];
  return <CoverageData data={myData} />;
};

export default CoverageKofre;
