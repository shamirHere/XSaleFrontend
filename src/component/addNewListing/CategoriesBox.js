import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import icons from '../../assets/icons';

const CategoriesBox = ({title, style}) => {
  return (
    <View
      style={[
        {
          height: 110,
          width: 170,
          borderRadius: 12,
          backgroundColor: colors.fleshTint,
        },
        style,
      ]}>
      <View
        style={[
          styles.fdRow,
          styles.pdh12,
          styles.mt8,
          {height: '20%', width: '100%', justifyContent: 'space-between'},
        ]}>
        <Text style={[styles.ts16, {color: colors.white}, styles.fw700]}>
          {title ? title : 'Animal'}
        </Text>
        <View
          style={[
            {
              height: 25,
              width: 42,
              borderRadius: 15,
              backgroundColor: colors.white,
              justifyContent: 'center',
            },
          ]}>
          <Image
            source={icons.arrow_next}
            style={[styles.icon24, {alignSelf: 'center'}]}
          />
        </View>
      </View>
    </View>
  );
};
export default CategoriesBox;
