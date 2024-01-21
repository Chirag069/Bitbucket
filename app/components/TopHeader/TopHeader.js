import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  black,
  themeshade,
  white,
  themecolor,
  fontbold,
} from '../../utils/color';
import scale, {verticalScale} from '../../utils/scale';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const TopHeader = ({title}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.Category}>
      <Text style={styles.headerText}>{title}</Text>
      <View style={styles.rightPlaceholder}>
        <TouchableOpacity onPress={() => {}}>
          <Feather name="bell" size={scale(25)} color={white} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Entypo name="dots-three-vertical" size={scale(25)} color={white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeshade,
  },

  Category: {
    flexDirection: 'row',
    justifyContent: 'center',

    alignItems: 'center',
    paddingHorizontal: scale(20),
    backgroundColor: themecolor,
    paddingVertical: verticalScale(15),
  },

  headerText: {
    color: white,
    fontSize: scale(23),
    fontFamily: fontbold,
  },

  rightPlaceholder: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    right: scale(20),
    height: verticalScale(40),
    width: scale(40),
    gap: scale(10),
  },

  CategoryHeader: {
    color: themecolor,
    fontSize: scale(20),
    marginTop: verticalScale(10),
  },
});
