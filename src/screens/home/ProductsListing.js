import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import {TitleHeader, CategoriesItemBox, AdsCard} from '../../component/shared';
import styles from '../../assets/styles';
import {FilterBox} from '../../component/Home';

const ProductsListing = ({navigation, route}) => {
  const title = route.params;
  return (
    <SafeAreaView style={[styles.pdh16]}>
      <TitleHeader title={title} onBackPress={() => navigation.pop()} />
      <View
        style={[
          {
            borderBottomWidth: 1,
            width: '200%',
            alignSelf: 'center',
            opacity: 0.2,
          },
        ]}></View>
      <ScrollView style={[{height: '95%'}, styles.mt8]}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[{height: 100, width: '100%'}]}>
          <CategoriesItemBox style={[styles.mr8]} />
          <CategoriesItemBox style={[styles.mr8]} />
          <CategoriesItemBox style={[styles.mr8]} />
          <CategoriesItemBox style={[styles.mr8]} />
          <CategoriesItemBox style={[styles.mr8]} />
        </ScrollView>
        <View style={[{height: 649, width: '100%'}, styles.mt12]}>
          <FilterBox label={title} style={[styles.mb12]} />
          <ScrollView>
            <View
              style={[
                styles.fdRow,
                styles.mt12,
                {justifyContent: 'space-between'},
              ]}>
              <AdsCard />
              <AdsCard />
            </View>
            <View
              style={[
                styles.fdRow,
                styles.mt12,
                {justifyContent: 'space-between'},
              ]}>
              <AdsCard />
              <AdsCard />
            </View>
            <View
              style={[
                styles.fdRow,
                styles.mt12,
                {justifyContent: 'space-between'},
              ]}>
              <AdsCard />
              <AdsCard />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductsListing;
