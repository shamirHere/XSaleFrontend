import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TextInput,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import {ChatScreenHeader, ProductChat} from '../../component/Chats';
import icons from '../../assets/icons';

const ChatScreen = () => {
  const {height, width} = Dimensions.get('window');
  return (
    <SafeAreaView style={[{height: '100%'}]}>
      <ChatScreenHeader />
      <ProductChat />
      {/* <View
        style={[{height: height * 0.73, width: '100%'}]}></View> */}

      <View
        style={[
          styles.pdh16,
          styles.fdRow,
          styles.ml16,
          {
            backgroundColor: colors.grey500,
            height: height * 0.06,
            width: '93%',
            position: 'absolute',
            bottom: 8,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
          },
        ]}>
        <TextInput
          placeholder="Enter your message"
          style={[
            {backgroundColor: colors.grey500, borderRadius: 15, width: '90%'},
            styles.ts17,
            styles.pdl12,
          ]}
        />
        <TouchableOpacity>
          <Image source={icons.send} style={[styles.icon28]} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;
