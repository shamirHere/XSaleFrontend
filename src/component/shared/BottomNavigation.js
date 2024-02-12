import {View, Text, Image, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import icons from '../../assets/icons';
import { Home } from '../../screens/home';
import { Chats } from '../../screens/chats';
import { AddNewListing } from '../../screens/addNewListing';
import { MyAds } from '../../screens/myAds';
import { Profile } from '../../screens/profile';
import { useNavigation } from '@react-navigation/native';

const BottomNavigation = () => {

  // const Tab = createBottomTabNavigator(); 
  const Navigation = useNavigation(); 
  return (
    <View
      style={[
        {
          position: 'absolute',
          bottom: 10,
          left: 0,
          right: 0,
          backgroundColor: colors.darkGrey,
          justifyContent: 'space-around',
          alignItems: 'center',
          width: 375,
          borderRadius: 20,
        },
        styles.ml8,
        styles.fdRow,
      ]}>
      <TouchableOpacity onPress={() => Navigation.navigate("Home")}>
        <Image source={icons.home} style={[styles.icon28]} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Navigation.navigate("Chats")}>
        <Image source={icons.chats} style={[styles.icon28]} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Navigation.navigate('AddNewListing')}
        style={[
          {
            height: 50,
            bottom: 10,
            position: 'relative',
            right: 0,
            width: 50,
            borderRadius: 50,
            borderColor: colors.darkGrey,
            backgroundColor: colors.white,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: colors.darkGrey,
            elevation: 10,
            shadowColor: colors.black,
            shadowOffset: {width: 4, height: 10},
            shadowOpacity: 1,
            shadowRadius: 100,
          },
        ]}>
        <Image source={icons.plus_white} style={[styles.icon28]} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Navigation.navigate('MyAds')}>
        <Image source={icons.ads} style={[styles.icon28]} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Navigation.navigate('Profile')}>
        <Image source={icons.person} style={[styles.icon28]} />
      </TouchableOpacity>
    </View>
  );
};

export default BottomNavigation;
