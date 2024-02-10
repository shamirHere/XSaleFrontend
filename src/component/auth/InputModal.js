import {View, Text, Modal, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import styles from '../../assets/styles';
import {TitleInput} from '../shared';

const InputModal = () => {
  return (
    <Modal animationType="slide" transparent={true}>
      <View
        style={[
          {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <View
          style={[
            styles.pdt12,
            styles.pdh16,
            {
              backgroundColor: colors.white,
              width: '85%',
              height: 500,
              borderRadius: 30,
            },
          ]}>
          <View style={[{alignItems: 'center'}, styles.mb20]}>
            <Text
              style={[styles.ts25, {color: colors.black, fontWeight: '900'}]}>
              XSale
            </Text>
            <Text
              style={[styles.ts15, {color: colors.black, fontWeight: '600'}]}>
              India
            </Text>
          </View>
          <View style={[{alignItems: 'center'}]}>
            <Text style={[styles.ts14, {color: colors.black}]}>
              Type your Mobile Number
            </Text>
            <Text style={[styles.ts14, {color: colors.black}]}>
              To Continue with XSale
            </Text>
          </View>
          <TitleInput
            title={'Mobile'}
            inputPlaceholder={'Enter your number'}
            style={[styles.mt12, styles.mb24]}
          />
          <TitleInput
            title={'Set Password'}
            inputPlaceholder={'Enter your number'}
            secureTextEntry={true}
          />

          <View style={{ marginTop: 100 , alignItems : 'center'}}>

            <Text style={[styles.ts12, { textAlign : "center",  color: colors.black}]}>
                To continue with Mobile will share your name,
            </Text>
            <Text
                style={[styles.ts12, {color: colors.black, textAlign: 'center'}]}>
                email address, and profile picture with Xsale India.
            </Text>
            <Text
                style={[styles.ts12, {color: colors.black, textAlign: 'center'}]}>
                Before using this app, review its
            </Text>
            <Text
                style={[styles.ts12, {color: colors.black, textAlign: 'center'}]}>
                Privacy policy and Terms & Conditions apply.
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default InputModal;
