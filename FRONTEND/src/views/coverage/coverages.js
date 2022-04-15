import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, ActivityIndicator } from 'react-native';
import { getCoveragesByClient } from '../../api';
import { useSelector } from 'react-redux';
import CoverageData from '../../components/atoms/coverageData';
import { colors } from '../../utils/colors';

const useFetch = client => {
  const [coverages, setCoverages] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const { userToken } = useSelector(state => state.user);

  useEffect(() => {
    const data = async () => {
      try {
        setIsFetching(true);
        const myData = await getCoveragesByClient(client, userToken);
        setCoverages(Object.entries(myData.data.coverages));
      } catch (error) {
        Alert.alert('Error', error);
      } finally {
        setIsFetching(false);
      }
    };

    data();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client]);

  return {
    coverages,
    isFetching,
  };
};

const AllCoveragesScreen = ({ route }) => {
  const { client } = route.params;
  const { coverages, isFetching } = useFetch(client);

  return (
    <ScrollView>
      {isFetching && (
        <ActivityIndicator size="large" color={colors.primaryColor} />
      )}
      {coverages.length > 0 && <CoverageData data={coverages} />}
    </ScrollView>
  );
};

export default AllCoveragesScreen;
