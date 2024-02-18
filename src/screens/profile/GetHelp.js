import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import React from 'react';
import {TitleHeader} from '../../component/shared';
import styles from '../../assets/styles';
import colors from '../../assets/colors';

const GetHelp = ({navigation}) => {
  const {height, width} = Dimensions.get('window');
  return (
    <SafeAreaView style={[{height: '100%', width: '100%'}, styles.pdh16]}>
      <TitleHeader title={'Get Help'} onBackPress={() => navigation.pop()} />
      <View
        style={[
          {
            width: '200%',
            alignSelf: 'center',
            borderBottomWidth: 1,
            opacity: 0.2,
          },
        ]}></View>
      <View style={[styles.mt8]}>
        <Text style={[{color: colors.black800}, styles.ts16, styles.mb8]}>
          Subject : Need Help? We're Here for you!
        </Text>
        <Text style={[{color: colors.black800}, styles.ts16, styles.mb12]}>
          Hey there,{' '}
        </Text>
        <Text
          style={[
            {color: colors.black800, lineHeight: 25},
            styles.mb12,
            styles.ts16,
          ]}>
          Just a quick note to let you know that if you ever need assistance
          with anything related to our services, Simply shoot us an email at{' '}
          <Text style={[{color: colors.black, fontWeight: 'bold'}]}>
            info@xsale.com
          </Text>
          and we'll get back to you soon as possible.
        </Text>
        <Text style={[{color: colors.black800}, styles.ts16, styles.mb12]}>
          Looking forward to assisting you!
        </Text>
        <Text style={[{color: colors.black800}, styles.ts16]}>Thanks</Text>
      </View>
    </SafeAreaView>
  );
};

export default GetHelp;
