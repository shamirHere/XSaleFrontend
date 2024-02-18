import {View, Text, TextInput, Image, Pressable, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../assets/colors';
import styles from '../../assets/styles';
import icons from '../../assets/icons';

const TitleInput = ({
  title,
  inputPlaceholder,
  secureTextEntry,
  style,
  titleStyle,
  keyboardType,
  inputStyle,
  rightIcon,
}) => {
  return (
    <View style={[{width: '100%' }, styles.mb12, style]}>
      <Text style={[{color: colors.black}, styles.ml4, titleStyle]}>
        {title}
      </Text>
      {rightIcon && (
        <View
          style={[
            rightIcon && styles.fdRow,
            styles.pdh8,
            styles.pdr12,
            styles.mt4,
            {
              backgroundColor: '#eaeaea',
              borderRadius: 15,
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          ]}>
          <TextInput
            placeholder={inputPlaceholder}
            keyboardType={keyboardType ? keyboardType : 'default'}
            style={[inputStyle, {width : "90%"}]}
            secureTextEntry={secureTextEntry ? secureTextEntry : false}
          />
          {rightIcon ? (
            <TouchableOpacity>
              <Image source={icons.edit} style={[styles.icon24]} />
            </TouchableOpacity>
          ) : null}
        </View>
      )}
      {!rightIcon && (
        <View>
          <TextInput
            placeholder={inputPlaceholder}
            style={[{borderBottomWidth: 1}, inputStyle]}
            keyboardType={keyboardType}
            secureTextEntry={secureTextEntry ? secureTextEntry : false}
          />
        </View>
      )}
    </View>
  );
};

export default TitleInput;
