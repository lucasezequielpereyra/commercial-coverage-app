import React from 'react';
import { ScrollView } from 'react-native';
import CoverageData from '../../components/atoms/coverageData';

const AllCoveragesScreen = ({ route }) => {
  const { data } = route.params;
  const coverages = data.clients.coberturas;
  const myData = [
    { CCTM: coverages.CCTM },
    { 'CCSO RP / RGB ': coverages.CCSO_REFPET__RGB },
    { 'CCSO 1.75 / 2.25': coverages.CCSO_175_225 },
    { 'FN 1.75 / RP': coverages.FN_175_REFPET },
    { 'CEPITA FRESH CF': coverages.FRESH_CF },
    { 'CCSO 237 / 500': coverages.CCSO_237_500 },
    { 'CCSA 220 / 500': coverages.CCSA_220_500 },
    { 'FN 220 / 500': coverages.FN_220_500 },
    { 'Smart / Kin s/g CP': coverages.SMART_KIN_SG_CP },
    { 'CCSA RP / CCL 1.75': coverages.CCSAREFPET_CCL175 },
    { 'SP 1.75 / RP': coverages.SP_175_REFPET },
    { 'SP 2.25': coverages.SP_225 },
    { 'CCSA 1.75': coverages.CCS_175 },
    { 'SP 220 / 500': coverages.SP_220_500 },
    { 'CCSA 2.25 / CCL 2.25': coverages.CCS225_CCL_225 },
    { 'Cepita 200 / Fresh 500': coverages.CEPITA200_FRESH500 },
    { 'Cepita 1L / AQ 2.25': coverages.CEPITA1L_AQ225 },
    { 'Kin 2.25 / Smart 1.5': coverages.KIN225_SMART15 },
    { 'Powerade 500 / 995': coverages.POWERADE_500_995 },
    { ADES: coverages.ADES },
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

export default AllCoveragesScreen;
