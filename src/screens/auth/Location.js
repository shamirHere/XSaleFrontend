import {SafeAreaView, View, Text, Image} from 'react-native';
import React from 'react';
import {ButtonWithIcon} from '../../component/shared';
import icons from '../../assets/icons';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import { InputModal } from '../../component/auth';

const Location = () => {
  return (
    <SafeAreaView
      style={[
        {height: '100%', justifyContent: 'center', alignItems: 'center'},
        styles.pdh16,
      ]}>
      {/* <Image
        source={icons.map}
        style={[{width: 200, height: 200, resizeMode: 'contain'}, styles.mb48]}
      />
      <Text style={[{color: '#A59C9C'}, styles.ts15, styles.mb4]}>
        Enjoy a personalized selling and Buying{' '}
      </Text>
      <Text style={[{color: '#A59C9C'}, styles.ts15, styles.mb48]}>
        experience by Telling us your Location
      </Text>
      <ButtonWithIcon icon={icons.location} label={'Find My Location'} />
      <Text style={[{color: colors.black}, styles.ts16, styles.mt36]}>
        Other Location
      </Text> */}
      <InputModal />
    </SafeAreaView>
  );
};

export default Location;
