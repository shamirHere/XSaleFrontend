import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import {TitleHeader, TitleInput,Button} from '../../component/shared';
import styles from '../../assets/styles';
import icons from '../../assets/icons';
import images from '../../assets/images';

const ChageInfo = ({navigation}) => {
  const {height, width} = Dimensions.get('window');
  return (
    <SafeAreaView style={[{height: height * 1, width: '100%'}, styles.pdh16]}>
      <TitleHeader title={'Profile'} onBackPress={() => navigation.pop()} />
      <View style={[{borderBottomWidth : 1, opacity : 0.2}]}></View>
      <View
        style={[
          {
            width: '100%',
            height: 130,
            alignItems: 'center',
          },
        ]}>
        <Pressable
          style={[
            styles.mt12,
            {
              alignItems: 'center',
              justifr: 'center',
              height: '70%',
              width: '25%',
              borderRadius: 50,
              borderWidth: 1,
            },
          ]}>
          <Image source={images.profilePic} style={[{height : 80, width : 60 , borderRadius : 50}]} />
        </Pressable>
      </View>
      <View style={[{height: 'auto'}]}>
        <Text style={[styles.h1, styles.mb16,{color : "#515151"}]}>My Account</Text>
        <TitleInput
          title={'Name'}
          inputPlaceholder={'Enter Your name'}
          titleStyle={[styles.ts20, styles.mb4, {fontWeight: 'bold', color : "#515151"}]}
          inputStyle={[
            styles.fwBold, 
            styles.ts15, 
            {
              color : "#a4a4a4", 
              height: 45,
              borderBottomWidth: 0,
              borderRadius: 15,
            },
          ]}
          rightIcon={true}
        />
        <TitleInput
          title={'Phone:'}
          keyboardType={'numeric'}
          inputPlaceholder={'Enter Your email'}
          titleStyle={[styles.ts20, styles.mb8, {fontWeight: 'bold',color : "#515151"}]}
          inputStyle={[
            styles.fwBold, 
            styles.ts15, 
            {
              color : "#a4a4a4", 
              height: 45,
              borderBottomWidth: 0,
              borderRadius: 15,
            },
          ]}
          rightIcon={true}
        />
        <TitleInput
          title={'Email: '}
          keyboardType={'email-address'}
          inputPlaceholder={'Enter Your email'}
          titleStyle={[styles.ts20,{fontWeight: 'bold',color : "#515151"}]}
          inputStyle={[
            styles.fwBold, 
            styles.ts15, 
            {
              color : "#a4a4a4", 
              height: 45,
              borderBottomWidth: 0,
              borderRadius: 15,
            },
          ]}
          rightIcon={true}
        />
        <Button style={[styles.mt12]} textStyle={[styles.ts20,styles.fw700,{textAlign : "center"}]}/>
      </View>
    </SafeAreaView>
  );
};

export default ChageInfo;
