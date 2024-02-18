import React from 'react';
import {Image, Pressable, Text, TouchableOpacity, View} from 'react-native';
import images from '../../assets/images';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import {useNavigation} from '@react-navigation/native';

const ChatCard = () => {
  const Navigation = useNavigation();
  return (
    <Pressable
      style={[styles.mb8, {elevation: 0.5, borderRadius: 3}]}
      onPress={() => Navigation.navigate('ChatScreen')}>
      <View
        style={[
          {height: 75, width: '100%', borderRadius: 12},
          styles.pdv8,
          styles.pdh12,
          styles.fdRow,
        ]}>
        <Image
          source={images.profilePic}
          style={[
            {borderRadius: 50, height: 56, width: 56, resizeMode: 'contain'},
          ]}
        />
        <View style={[{width: '80%', height: '100%'}, styles.ml12]}>
          <View style={[styles.fdRow]}>
            <Text
              style={[
                styles.h5,
                styles.fwBold,
                styles.mr8,
                {color: colors.darkGrey},
              ]}>
              JBL Charge 2 Speaker
            </Text>
            <View
              style={[
                styles.mt4,
                {borderColor: colors.grey800, height: 14},
              ]}></View>
            <Text
              style={[
                styles.ts13,
                styles.fwBold,
                styles.ml4,
                {color: colors.grey800, marginTop: 2},
              ]}>
              Greta Life
            </Text>
            <View
              style={[
                {
                  height: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 20,
                  borderRadius: 50,
                  backgroundColor: colors.fleshTint,
                },
                styles.ml8,
              ]}>
              <Text style={[styles.ts13, {color: colors.white}, styles.fwBold]}>
                1
              </Text>
            </View>
          </View>
          <Text style={[{marginTop: 2, color: colors.black}, styles.fwBold]}>
            Greta : Alright
          </Text>
          <Text
            style={[{textAlign: 'right', color: colors.grey800}, styles.ts12]}>
            20 Dec 20, 9:23 AM
          </Text>
        </View>
      </View>
    </Pressable>
  );
};
export default ChatCard;
