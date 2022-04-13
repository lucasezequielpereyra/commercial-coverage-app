import React, { useEffect, useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { getCoveragesByClient } from '../../api';
import { useSelector } from 'react-redux';
import CoverageData from '../../components/atoms/coverageData';

const AllCoveragesScreen = ({ route }) => {
  const { client } = route.params;
  const [coverages, setCoverages] = useState([]);
  const { userToken } = useSelector(state => state.user);

  useEffect(() => {
    const data = async () => {
      try {
        const myData = await getCoveragesByClient(client, userToken);
        if (myData.status === 200) {
          setCoverages(Object.entries(myData.data.coverages));
        } else {
          Alert.alert('Error', 'No hay coberturas para este cliente');
        }
      } catch (error) {
        Alert.alert('Error', error);
      }
    };

    data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ScrollView>
      {coverages.length > 0 && <CoverageData data={coverages} />}
    </ScrollView>
  );
};

export default AllCoveragesScreen;
