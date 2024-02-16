import {View, Text, SafeAreaView, ScrollView, FlatList} from 'react-native';
import React from 'react';
import {TitleHeader} from '../../component/shared';
import {CategoriesBox} from '../../component/addNewListing';
import styles from '../../assets/styles';
import colors from '../../assets/colors';

const AddNewListing = ({navigation}) => {
  const listingCategory = [
    {id: 1, name: 'Vehicle',},
    {id: 2, name: 'Property'},
    {id: 3, name: 'Mobile',},
    {id: 4, name: 'Bike',},
    {id: 5, name: 'Electronics',},
    {id: 6, name: 'Jobs',},
    {id: 7, name: 'Matrimonial',},
    {id: 8, name: 'Furniture',},
    {id: 9, name: 'Animal'},
    {id: 10, name: 'Puoltry & Birds',},
    {id: 11, name: 'Farm Machines',},
    {id: 12, name: 'Services',},
  ];



  return (
    <SafeAreaView style={[{height: '100%'}]}>
      <View style={[styles.pdh16]}>
        <TitleHeader
          title={'Add New Listing'}
          onBackPress={() => navigation.pop()}
        />
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
        <View style={[{height: '95%'}, styles.pdh16, styles.pdt12, styles.mb20]}>
          <FlatList
            data={listingCategory}
            renderItem={({item, index}) => {
              console.log(item)
              return (<CategoriesBox  style={[styles.mr20, styles.mb12]} title={item.name}/>)
            }}
            keyExtractor={listingCategory => listingCategory.id}
            numColumns={2}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AddNewListing;
