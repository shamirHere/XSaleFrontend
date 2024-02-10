import {View, Text, TextInput} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import styles from '../../assets/styles';

const TitleInput = ({title, inputPlaceholder, secureTextEntry, style}) => {
  return (
    <View style={[{width: '100%'}, style]}>
      <Text style={[{color: colors.black}, styles.ml4]}>{title}</Text>
      <TextInput
        placeholder={inputPlaceholder}
        keyboardType={'default'}
        style={[{borderBottomWidth: 1}]}
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
      />
    </View>
  );
};

export default TitleInput;
