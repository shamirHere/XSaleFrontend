import {View, Text, Pressable, Image} from 'react-native';
import React from 'react';
import images from '../../assets/images';
import styles from '../../assets/styles';
import colors from '../../assets/colors';

const CategoriesItemBox = ({style}) => {
  return (
    <Pressable
      style={[
        {
          height: 100,
          width: 100,
          borderRadius: 12,
          padding: 6,
          backgroundColor: colors.fleshTint,
        },
        style,
      ]}>
      <Image
        source={images.profilePic}
        style={[{height: '80%', width: '100%', borderRadius: 12}]}
      />
      <Text
        style={[
          styles.ts13,
          {marginTop: 2, textAlign: 'center', color: colors.white},
        ]}>
        Cow Calf
      </Text>
    </Pressable>
  );
};

export default CategoriesItemBox;
