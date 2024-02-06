import React from 'react';
import {View, Text, TouchableOpacity, Pressable, Image} from 'react-native';
import styles from '../../assets/styles';
import icons from '../../assets/icons';
import colors from '../../assets/colors';

const LocationInput = () => {
  return (
    <Pressable
      style={[
        styles.fdRow,
        styles.mt16, 
        styles.pdv4, 
        styles.mb8, 
        {
          width: '100%',
          borderRadius: 10,
          shadowColor:  colors.black,
          shadowOffset: {width: 0, height: 2},
          shadowOpacity: 0.3,
          shadowRadius: 10,
          backgroundColor : colors.white, 
          elevation : 5
        },
      ]}>
      <View style={[styles.fdRow, {width: '90%', marginTop: 3}]}>
        <Image
          source={icons.location}
          style={[styles.icon24, {marginRight: 5, marginLeft: 10}]}
        />
        <Text style={[styles.fw700, {color: colors.black, fontSize: 15}]}>
          Nayatoli, Ranchi, Jharkhand, India
        </Text>
      </View>
      <TouchableOpacity>
        <Image source={icons.arrow_next} style={styles.icon32} />
      </TouchableOpacity>
    </Pressable>
  );
};
export default LocationInput;
