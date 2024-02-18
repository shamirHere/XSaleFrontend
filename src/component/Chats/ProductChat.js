import {Dimensions,  View, Text, Pressable, Image} from 'react-native'; 
import React from 'react'; 
import images from '../../assets/images';
import styles from '../../assets/styles';
import icons from '../../assets/icons';
import colors from '../../assets/colors';

const ProductChat = () => {
    const {height , width} = Dimensions.get("window"); 
  return (
    <Pressable style={[{width : "100%", height : height * 0.12, backgroundColor : colors.pink100}, styles.pdh8, styles.fdRow, styles.pdv4]}>
        <Image source={images.thing4} style={[{height : '95%', width : '20%', resizeMode : "contain", borderRadius : 12 } ,styles.mr12]}/>
        <View style={[styles.mt8]}>
            <Text style={[styles.ts15, {fontWeight : "bold", color : colors.black}, styles.mb4 ]}>Other Vehicle</Text>
            <View style={[styles.fdRow ,styles.mb4, {color : colors.black}]}>
                <Image source={icons.rupee} style={[styles.icon20]}/>
                <Text style={[styles.ts17, {fontWeight : "700", color : colors.black}]}>12000</Text>
            </View>
            <Text>Ranchi, Jharkhand</Text>
        </View>
    </Pressable>
  )
}

export default ProductChat; 
