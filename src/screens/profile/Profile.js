import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {BottomNavigation} from '../../component/shared';
import styles from '../../assets/styles';
import colors from '../../assets/colors';
import icons from '../../assets/icons';
import images from '../../assets/images';

const Profile = () => {
  const firstHeader = [
    {id: 1, icon: icons.logout, title: 'Logout'},
    {id: 2, icon: icons.delete, title: 'Delete Account'},
    {id: 3, icon: icons.language, title: 'Change Language'},
  ];
  const secondHeader = [
    {id: 1, icon: icons.question, title: 'Get Help'},
    {id: 2, icon: icons.suggestion, title: 'Send us Suggestion'},
    {id: 3, icon: icons.privacy, title: 'Privacy Policies'},
    {id: 4, icon: icons.terms_condition, title: 'Terms & Condition'},
    {id: 5, icon: icons.invite_friend, title: 'Invite Friends'},
    {id: 6, icon: icons.rate_us, title: 'Rate Us'},
  ];

  const OptionHeader = ({label}) => {
    return (
      <View
        style={[
          {
            height: '7%',
            justifyContent: 'center',
            backgroundColor: colors.pink100,
            width: '100%',
          },
        ]}>
        <Text style={[styles.h2, styles.ml16, styles.ts18, {color: colors.black}]}>
          {label}
        </Text>
      </View>
    );
  };

  const Option = ({icon, title, id}) => {
    return (
      <View style={[styles.pdh16, {width: '100%', height: 45}]}>
        <View style={[styles.fdRow, styles.mt8]}>
          <Image
            source={icon}
            style={[styles.mr12, styles.mt4, styles.icon20]}
          />
          <Text style={[styles.ts18, {color: colors.black}]}>{title}</Text>
        </View>
        {id === 3 ? null : (
          <View style={[styles.mt12, {borderBottomWidth: 0.5}]}></View>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.pdh16, styles.pdv12, {height: '100%'}]}>
      <View style={[styles.mt4, styles.fdRow, {height: 'auto', width: '100%'}]}>
        <Image
          source={images.profilePic}
          style={[
            {borderRadius: 50, height: 68, width: 68, resizeMode: 'contain'},
          ]}
        />
        <View
          style={[
            styles.fdRow,
            styles.pdh16,
            styles.pdr8,
            {justifyContent: 'space-between', width: '80%'},
          ]}>
          <View>
            <Text style={[styles.h1, {color: colors.lightOrange}]}>
              Alice Eve
            </Text>
            <Text style={[styles.h4, styles.mt4, {color: colors.black}]}>
              123456789
            </Text>
          </View>
          <TouchableWithoutFeedback>
            <Image
              source={icons.arrow_back}
              style={[
                styles.icon44,
                styles.mt12,
                {transform: [{rotate: '180deg'}]},
              ]}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={[styles.mt20, {height: '80%'}]}>
        <OptionHeader label={'Setting'} />
        <View>
          {firstHeader.map((item, index) => {
            return <Option icon={item.icon} title={item.title} key={item.id} />;
          })}
        </View>
        <OptionHeader label={'Support'} />
        <View>
          {secondHeader.map((item, index) => {
            return (
              <Option
                icon={item.icon}
                title={item.title}
                key={item.id}
                id={item.id}
              />
            );
          })}
        </View>
      </View>

      <BottomNavigation />
    </SafeAreaView>
  );
};

export default Profile;
