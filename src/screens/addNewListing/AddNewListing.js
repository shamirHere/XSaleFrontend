import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {TitleHeader} from '../../component/shared';
import {CategoriesBox} from '../../component/addNewListing';
import styles from '../../assets/styles';
import colors from '../../assets/colors';

const AddNewListing = ({navigation}) => { 
  return (
    <SafeAreaView style={[{height: '100%'}]}>
      <View style={[styles.pdh16]}>
        <TitleHeader title={'Add New Listing'} onBackPress={() => navigation.pop()}/>
      </View>
      <ScrollView
        style={[
          {height: '90%', backgroundColor: colors.lightGrey},
          styles.pdv12,
        ]}>
        <View
          style={[styles.pdh16, {height: 50, justifyContent: 'space-between'}]}>
          <Text style={[{color: colors.black}, styles.fwBold, styles.ts15]}>
            In Which category do you want to sell ?
          </Text>
          <Text style={[{color: colors.black}, styles.fwBold, styles.ts15]}>
            Select any one
          </Text>
        </View>
        <View style={[{height: '95%'}, styles.pdh16, styles.pdt12]}>
          <View
            style={[
              styles.fdRow,
              styles.mb12,
              {justifyContent: 'space-between'},
            ]}>
            <CategoriesBox />
            <CategoriesBox />
          </View>
          <View
            style={[
              styles.fdRow,
              styles.mb12,
              {justifyContent: 'space-between'},
            ]}>
            <CategoriesBox />
            <CategoriesBox />
          </View>
          <View
            style={[
              styles.fdRow,
              styles.mb12,
              {justifyContent: 'space-between'},
            ]}>
            <CategoriesBox />
            <CategoriesBox />
          </View>
          <View
            style={[
              styles.fdRow,
              styles.mb12,
              {justifyContent: 'space-between'},
            ]}>
            <CategoriesBox />
            <CategoriesBox />
          </View>
          <View
            style={[
              styles.fdRow,
              styles.mb12,
              {justifyContent: 'space-between'},
            ]}>
            <CategoriesBox />
            <CategoriesBox />
          </View>
          <View
            style={[
              styles.fdRow,
              styles.mb28,
              {justifyContent: 'space-between'},
            ]}>
            <CategoriesBox />
            <CategoriesBox />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddNewListing;
