import React, { Fragment } from 'react';
import { View, Text } from 'react-native';
import { Styles } from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CoverageData = ({ data }) => {
  return (
    <Fragment>
      <View style={Styles.containerHeader}>
        <Text style={Styles.labelHeader}>PRODUCTO</Text>
        <Text style={Styles.valueHeader}>COBERTURA</Text>
      </View>
      <View style={Styles.container}>
        {data.map((item, index) => {
          return (
            <Fragment key={index}>
              <Text style={Styles.label}>{item[0]}:</Text>
              <Text style={Styles.value}>
                {item[1] === 1 && (
                  <Ionicons name="checkmark-sharp" style={Styles.value} />
                )}
                {item[1] === 0 && (
                  <Ionicons name="close-sharp" style={Styles.value} />
                )}
              </Text>
            </Fragment>
          );
        })}
      </View>
    </Fragment>
  );
};

export default CoverageData;
