import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../../assets/styles';
import colors from '../../assets/colors';

const Button = ({label, style, id, textStyle}) => {
  return (
    <TouchableOpacity
      key={id}
      style={[
        styles.pdh12,
        styles.pdv8,
        {
          justifyContent : "center",
          backgroundColor: colors.darkGrey,
          height: 40,
          width: 'auto',
          borderRadius: 14,
        },
        style
      ]}>
      <Text style={[{color: colors.white}, styles.fwBold, styles.ts13, textStyle]}>
        {label ? label : 'Button'}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
