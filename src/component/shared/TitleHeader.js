import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import icons from '../../assets/icons';
import styles from '../../assets/styles';
import colors from '../../assets/colors';

const TitleHeader = () => {
  return (
    <View style={[styles.fdRow, styles.mt12, styles.mb4, {height: 50, width: '100%'}]}>
      <TouchableOpacity>
        <Image source={icons.arrow_back} style={[styles.icon44]} />
      </TouchableOpacity>
      <Text
        style={[
          styles.fwBold,
          styles.ts25,
          styles.ml16,
          styles.mt4,
          {color: colors.darkGrey},
        ]}>
        Messages
      </Text>
    </View>
  );
};
export default TitleHeader;
