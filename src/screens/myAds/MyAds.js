import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {Button, BottomNavigation} from '../../component/shared';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import { PremiumOption } from '../../component/myAds';

const MyAds = () => {
  const OptionButton = ({label}) => {
    return (
      <TouchableWithoutFeedback>
        <View
          style={[
            {
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: colors.darkGrey,
              borderRadius: 12,
            },
            styles.pdh20,
            styles.pdv8,
          ]}>
          <Text>{label}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <SafeAreaView style={[styles.p16, {height: '100%'}]}>
      <Text style={[styles.h1, {color: colors.darkGrey, textAlign: 'center'}]}>
        My Ads
      </Text>

      <View
        style={[
          styles.fdRow,
          styles.mt12,
          styles.pdh8, 
          {
            height: 50,
            width: '100%',
            justifyContent: 'space-between',
          },
        ]}>
        <Button
          label={'Ads'}
          style={[{width: '45%', height: '90%'}]}
          textStyle={[styles.fw700, styles.ts17, {textAlign: 'center'}]}
        />
        <Button
          label={'Buy Premium'}
          style={[{width: '45%', height: '90%'}]}
          textStyle={[styles.fw700, styles.ts17, {textAlign: 'center'}]}
        />
      </View>
      <View
        style={[
          {
            borderBottomColor: colors.black,
            borderBottomWidth: 1,
            opacity: 0.2,
          },
          styles.mt8,
        ]}
      />
      <View></View>
      <View
        style={[
          {
            height: 50,
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
          styles.fdRow,
          styles.mt8,
        ]}>
        <OptionButton label={'Active'} />
        <OptionButton label={'Deactivate'} />
        <OptionButton label={'Favourite'} />
      </View>
      <ScrollView style={[{height : 50} , styles.pdt12]}>
        <PremiumOption title={'Buy Premium Ads'} description={'Place your ads on the top'}/>
        <PremiumOption title={'Premium Ads Credit'} description={'Check remaining premium ads credit'}/>
        <PremiumOption title={'View Invoice'} description={'Check your past prurchase details'}/>
      </ScrollView>
      <BottomNavigation />
    </SafeAreaView>
  );
};

export default MyAds;
