import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Styles } from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CoverageData = ({ data }) => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index}
      ListHeaderComponent={() => (
        <View style={Styles.containerHeader}>
          <Text style={Styles.labelHeader}>PRODUCTO</Text>
          <Text style={Styles.valueHeader}>COBERTURA</Text>
        </View>
      )}
      renderItem={({ item }) => (
        <View style={Styles.container}>
          <Text style={Styles.label}>{item.key}</Text>
          {item.data === 1 && (
            <Ionicons name="checkmark-sharp" style={Styles.value} />
          )}
          {item.data === 0 && (
            <Ionicons name="close-sharp" style={Styles.value} />
          )}
        </View>
      )}
    />
  );
};

export default CoverageData;
