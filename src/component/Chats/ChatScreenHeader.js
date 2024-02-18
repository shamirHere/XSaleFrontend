import {
  Dimensions,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import styles from '../../assets/styles';
import icons from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';
import images from '../../assets/images';
import colors from '../../assets/colors';

const ChatScreenHeader = () => {
  const {height, width} = Dimensions.get('window');
  const Navigation = useNavigation();
  return (
    <View
      style={[
        {
          height: height * 0.065,
          width: width * 1,
          alignItems : "center",
          justifyContent : "space-between"
        },
        styles.pdh12,
        styles.fdRow,
      ]}>
      <View style={[styles.fdRow]}>
        <TouchableOpacity onPress={() => Navigation.pop()} style={[styles.mr12, {alignSelf : "center"}]}>
            <Image source={icons.arrow_back} style={[styles.icon32]} />
        </TouchableOpacity>
        <View style={[styles.fdRow, {width : '60%'}]}>
            <Image source={images.profilePic} style={[styles.icon44, {borderRadius : 20}, styles.mr12]}/>
            <Text style={[{alignSelf : "center", color: colors.black}, styles.ts17, styles.fw400]}>Sk Shamir</Text>
        </View>
      </View>
      <View style={[styles.fdRow, {width : "25%"}, styles.ml44]}>
        <Pressable>
          <Image source={icons.call} style={[styles.icon20, styles.mr12]}/>
        </Pressable>
        <Pressable>
          <Image source={icons.dots} style={[styles.icon20]}/>
        </Pressable>
      </View>
    </View>
  );
};

export default ChatScreenHeader;
