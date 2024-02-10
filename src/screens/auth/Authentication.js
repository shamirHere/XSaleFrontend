import {View, Text, SafeAreaView, Image} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import styles from '../../assets/styles';
import icons from '../../assets/icons';
import images from '../../assets/images';
import {ButtonWithIcon} from '../../component/shared';

const Authentication = () => {
  return (
    <SafeAreaView style={[{height: '100%'}]}>
      <View
        style={[
          {
            height: '50%',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <Text style={[{fontSize: 70, color: colors.darkGrey}]}>XSale</Text>
        <Text
          style={[
            styles.fwBold,
            {
              color: colors.black,
              fontSize: 30,
              letterSpacing: 3,
              fontWeight: 900,
            },
          ]}>
          India
        </Text>
      </View>
      <View
        style={[
          {
            height: '50%',
            width: '100%',
            backgroundColor: colors.mintGreen,
            borderTopRightRadius: 12,
            borderTopLeftRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <ButtonWithIcon
          label={'Continue with Phone'}
          icon={icons.phone}
          style={[styles.mb24]}
        />
        <ButtonWithIcon
          label={'Continue with Google'}
          icon={icons.google}
          style={[styles.mb28]}
        />
        <Text
          style={[
            styles.mb8,
            styles.ts18,
            {fontWeight: 'bold', color: colors.white},
          ]}>
          OR
        </Text>
        <Text
          style={[
            styles.ts15,
            styles.mb24,
            styles.fw400,
            {textDecorationLine: 'underline', color: colors.white},
          ]}>
          Login with Gmail
        </Text>
        <Text style={[styles.ts13, styles.fw400, {color: colors.white}]}>
          If you continue, you are accepting
        </Text>
        <Text
          style={[
            styles.ts13,
            styles.fw400,
            {textDecorationLine: 'underline', color: colors.white},
          ]}>
          XSale Terma and Conditions and Privacy Policy
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Authentication;