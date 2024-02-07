import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import colors from '../../assets/colors';
import styles from '../../assets/styles';
import icons from '../../assets/icons';

const InputText = () => {
  return (
    <View
      style={[
        styles.fdRow,
        styles.pdh4,
        styles.pdr12,
        {
          borderRadius: 20,
          height: 45,
          width: '100%',
          backgroundColor: colors.grey700,
        },
      ]}>
      <TextInput
        placeholder="Enter your name"
        style={[
          styles.pdl12,
          styles.ts15,
          {
            color: colors.grey800,
            height: '100%',
            width: '90%',
            borderRadius: 20,
          },
        ]}
      />
      <TouchableWithoutFeedback>
        <Image
          source={icons.magnifyingGlass}
          style={[styles.icon28, styles.mt8]}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};
export default InputText;
