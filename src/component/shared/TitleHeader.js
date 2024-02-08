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

const TitleHeader = ({title}) => {
  return (
    <View style={[styles.fdRow, styles.mt12, styles.mb4, {height: 50, width: '100%'}]}>
      <TouchableOpacity>
        <Image source={icons.arrow_back} style={[styles.icon40 , styles.mt4]} />
      </TouchableOpacity>
      <Text
        style={[
          styles.fwBold,
          styles.ts23,
          styles.ml16,
          styles.mt8,
          {color: colors.darkGrey},
        ]}>
        {title}
      </Text>
    </View>
  );
};
export default TitleHeader;
