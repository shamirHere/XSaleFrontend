import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import images from '../../assets/images';
import icons from '../../assets/icons';
import styles from '../../assets/styles';
import {
  HomeHeader,
  LocationInput,
  Cat,
  Categories,
  SuggestionBox,
} from '../../component/Home';
import {BottomNavigation} from '../../component/shared';

const Home = () => {
  return (
    <SafeAreaView style={[styles.pdh16, {borderWidth: 1, height: '100%'}]}>
      <HomeHeader />
      <LocationInput />
      <View
        style={[
          {
            height: 115,
            paddingHorizontal: 16,
            width: '100%',
            backgroundColor: colors.grey100,
            borderRadius: 6,
          },
          styles.mt8,
          styles.pdt8,
        ]}>
        <View
          style={[styles.fdRow, styles.mb4, {justifyContent: 'space-between'}]}>
          <Text
            style={[
              styles.fwBold,
              styles.ts20,
              {color: colors.blackOlive, fontFamily: 'Fira Sans'},
            ]}>
            Categories
          </Text>
          <TouchableOpacity>
            <Text
              style={[
                styles.fw700,
                {fontFamily: 'Fira Sans', color: colors.taupeGray},
              ]}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <Categories />
      </View>
      <SuggestionBox title={'Recently Viewed'} />
      <SuggestionBox title={'New Arrivals'} />
      <BottomNavigation />
    </SafeAreaView>
  );
};

export default Home;
