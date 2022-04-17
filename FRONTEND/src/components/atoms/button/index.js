import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';

export const Button = ({ styles, onPress, children }) => {
  return (
    <TouchableOpacity style={styles} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

Button.propTypes = {
  style: PropTypes.object,
  onPress: PropTypes.func,
  children: PropTypes.node.isRequired,
};
