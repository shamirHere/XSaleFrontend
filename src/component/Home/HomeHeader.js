import React from "react";
import {View, Text, TouchableOpacity, Image} from "react-native"; 
import colors from "../../assets/colors";
import styles from "../../assets/styles";
import icons from "../../assets/icons";
import images from "../../assets/images";

const HomeHeader = ({name}) => {
    return (
        <View
        style={[
          styles.fdRow,
          {
            paddingTop: 10,
            justifyContent: 'space-between',
            height: 65,
          },
        ]}>
        <Image
          source={images.xsale}
          style={[{height: 40, width: 70, resizeMode: 'contain'}]}
        />
        <View style={{height: 70, width: 'auto', marginRight: 10}}>
          <Text
            style={[
              styles.h1,
              {
                textAlign: 'center',
                fontWeight: '900',
                color: colors.blackOlive,
                fontFamily: 'Fira Sans',
              },
            ]}>
            Hey {name ? name : "shamir"}
          </Text>
          <Text
            style={[
              styles.h5,
              {
                fontSize: 15,
                color: colors.sunsetOrange,
                textAlign: 'center',
                fontFamily: 'Fira Sans',
              },
            ]}>
            Welcome back !
          </Text>
        </View>
        <TouchableOpacity>
          <Image
            source={icons.notification_bell}
            style={[styles.icon40, {marginTop: 5}]}
          />
        </TouchableOpacity>
      </View>
    )
}; 

export default HomeHeader; 


