import React from 'react';
import CoverageData from '../../components/atoms/coverageData';

const AllCoveragesScreen = ({ route }) => {
  const { data } = route.params;
  const coverages = data.clients.coberturas;
  const myData = [
    { key: 'CCTM', data: coverages.CCTM },
    { key: 'CCSO RP / RGB ', data: coverages.CCSO_REFPET__RGB },
    { key: 'CCSO 1.75 / 2.25', data: coverages.CCSO_175_225 },
    { key: 'FN 1.75 / RP', data: coverages.FN_175_REFPET },
    { key: 'CEPITA FRESH CF', data: coverages.FRESH_CF },
    { key: 'CCSO 237 / 500', data: coverages.CCSO_237_500 },
    { key: 'CCSA 220 / 500', data: coverages.CCSA_220_500 },
    { key: 'FN 220 / 500', data: coverages.FN_220_500 },
    { key: 'Smart / Kin s/g CP', data: coverages.SMART_KIN_SG_CP },
    { key: 'CCSA RP / CCL 1.75', data: coverages.CCSAREFPET_CCL175 },
    { key: 'SP 1.75 / RP', data: coverages.SP_175_REFPET },
    { key: 'SP 2.25', data: coverages.SP_225 },
    { key: 'CCSA 1.75', data: coverages.CCS_175 },
    { key: 'SP 220 / 500', data: coverages.SP_220_500 },
    { key: 'CCSA 2.25 / CCL 2.25', data: coverages.CCS225_CCL_225 },
    { key: 'Cepita 200 / Fresh 500', data: coverages.CEPITA200_FRESH500 },
    { key: 'Cepita 1L / AQ 2.25', data: coverages.CEPITA1L_AQ225 },
    { key: 'Kin 2.25 / Smart 1.5', data: coverages.KIN225_SMART15 },
    { key: 'Powerade 500 / 995', data: coverages.POWERADE_500_995 },
    { key: 'ADES', data: coverages.ADES },
    { key: 'CCSO / CCSA 500', data: coverages.CCSO_CCSA_500 },
    { key: 'FN / SP One Way', data: coverages.FN_SP_OW },
    { key: 'FN Pomelo ', data: coverages.FN_POMELO },
    { key: 'Smart Water', data: coverages.SMART },
    { key: '220 / 237', data: coverages.PET_220_237 },
  ];
  return <CoverageData data={myData} />;
};

export default AllCoveragesScreen;
