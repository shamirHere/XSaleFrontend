import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Image,
} from 'react-native';
import styles from '../../assets/styles';
import icons from '../../assets/icons';

const Categories = () => {
  const categoriesData = [
    {
      id: 1,
      icon: icons.vehicle,
      text: 'Vehicle',
    },
    {
      id: 2,
      icon: icons.real_estate,
      text: 'Real Estate',
    },
    {
      id: 3,
      icon: icons.mobile,
      text: 'Mobile',
    },
    {
      id: 4,
      icon: icons.pet,
      text: 'Pet',
    },
    {
      id: 5,
      icon: icons.suitcase,
      text: 'Jobs',
    },
    {
      id: 6,
      icon: icons.vehicle,
      text: 'Vehicle',
    },
    {
      id: 7,
      icon: icons.real_estate,
      text: 'Real Estate',
    },
    {
      id: 8,
      icon: icons.mobile,
      text: 'Mobile',
    },
    {
      id: 9,
      icon: icons.pet,
      text: 'Pet',
    },
    {
      id: 10,
      icon: icons.suitcase,
      text: 'Jobs',
    },
  ];

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {categoriesData.map((item, index) => {
        return (
          <TouchableOpacity
            key={item.id}
            style={[ styles.mr4, {width: "15%", height: "80%",marginTop: 3, alignItems: 'center'} , styles.mt4]}>
            <Image source={item.icon} style={styles.icon36} />
            <Text style={[ styles.mt4, styles.ts14, styles.fwBold]}>
              {item.text}
            </Text>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};
export default Categories;
