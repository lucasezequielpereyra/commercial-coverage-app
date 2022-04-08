import React from 'react';
import CoverageData from '../../components/atoms/coverageData';

const AllCoveragesScreen = ({ route }) => {
  const { data } = route.params;
  const myData = Object.entries(data);

  return <CoverageData data={myData} />;
};

export default AllCoveragesScreen;
