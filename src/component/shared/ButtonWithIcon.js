import React from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import icons from '../../assets/icons';

const ButtonWithIcon = ({label, icon, style}) => {
  return (
    <TouchableOpacity
      style={[
        styles.fdRow,
        {
          backgroundColor: colors.darkGrey,
          height: 'auto',
          width: 'auto',
          borderRadius: 40,
          width: 230,
          justifyContent: 'center',
          alignItems: 'center',
        },
        styles.pdv12,
        styles.pdh16,
        style
      ]}>
      <Image source={icon} style={[styles.icon28, styles.mr8]} />
      <Text style={[styles.ts15, {color: colors.white}]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;
