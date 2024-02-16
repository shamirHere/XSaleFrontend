import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import images from '../../assets/images';
import styles from '../../assets/styles';
import icons from '../../assets/icons';
import colors from '../../assets/colors';

const AdsCard = props => {
  const {height, width} = Dimensions.get('window');

  return (
    <Pressable
      style={[
        {
          height: height * 0.25,
          width: width * 0.43,
          borderRadius: 15,
          borderWidth: 1,
          overflow: 'hidden',
        },
      ]}>
      <View style={[{height: '48%'}]}>
        <Image
          source={images.thing3}
          style={[{height: '100%', width: '100%'}]}
        />
      </View>
      <View style={[styles.mt4, styles.pdh4, {height: '52%'}]}>
        <View style={[styles.fdRow, {justifyContent: 'space-between'}]}>
          <Text
            style={[
              styles.fwBold,
              styles.ts15,
              {marginLeft: 2, color: colors.black},
            ]}>
            Product Name
          </Text>
          <TouchableOpacity
            style={[
              {
                height: height * 0.03,
                width: width * 0.064,
                backgroundColor: colors.black,
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'centers',
                opacity: 0.7,
              },
            ]}>
            <Image
              source={icons.heart}
              style={[styles.icon24, {resizeMode: 'cover'}]}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.fdRow, styles.mb4, {alignItems: 'flex-start'}]}>
          <Image
            source={icons.rupee}
            style={[{height: 22, width: 22, resizeMode: 'contain'}, styles.mt4]}
          />
          <Text style={[styles.ts22, {color: colors.black}]}>600</Text>
        </View>
        <View style={[styles.fdRow]}>
          <Image
            source={icons.location}
            style={[styles.icon16, styles.mr4, {marginTop: 2}]}
          />
          <Text style={[{color: colors.black}]}>This is my address</Text>
        </View>
        <View
          style={[
            styles.fdRow,
            styles.pdh4,
            {justifyContent: 'space-between'},
            styles.mt4,
          ]}>
          <Text style={[{color: colors.black}, styles.ts14, styles.fwBold]}>
            5 KM
          </Text>
          <Text style={[{color: colors.black}, styles.ts14, styles.fwBold]}>
            22 Jan
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default AdsCard;
