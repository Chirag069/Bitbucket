import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import scale, {verticalScale} from '../utils/scale';
import {
  black,
  grey5,
  grey6,
  themecolor,
  themeshade,
  white,
} from '../utils/color';
import Home from '../Screens/Home/Home';
import DeviceInfo from '../Screens/DeviceInfo/DeviceInfo';
import Account from '../Screens/Account/Account';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="Events"
      screenOptions={{
        tabBarStyle: {
          borderTopWidth: 0,
          height: verticalScale(70),
          backgroundColor: white,
        },

        tabBarShowLabel: false,
      }}
      options={{
        backgroundColor: '#000',
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <>
              <AntDesign
                name={'home'}
                style={
                  focused ? styles.inactiveiconestyle : styles.activeiconestyle
                }
              />
              <Text style={focused ? styles.inactivelable : styles.lablestyle}>
                Home
              </Text>
              <View style={focused ? styles.dotstyle : styles.inactivedot} />
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <>
              <AntDesign
                name={'user'}
                style={
                  focused ? styles.inactiveiconestyle : styles.activeiconestyle
                }
              />
              <Text style={focused ? styles.inactivelable : styles.lablestyle}>
                Account
              </Text>
              <View style={focused ? styles.dotstyle : styles.inactivedot} />
            </>
          ),
        }}
      />

      <Tab.Screen
        name="Device Info"
        component={DeviceInfo}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <>
              <MaterialCommunityIcons
                name={'devices'}
                style={
                  focused ? styles.inactiveiconestyle : styles.activeiconestyle
                }
              />
              <Text style={focused ? styles.inactivelable : styles.lablestyle}>
                Device info
              </Text>
              <View style={focused ? styles.dotstyle : styles.inactivedot} />
            </>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;

const styles = StyleSheet.create({
  iconecontainer: {
    borderBottomWidth: 2,
    borderColor: themecolor,
    paddingBottom: verticalScale(2),
  },
  activeiconestyle: {
    fontSize: scale(30),
    color: grey5,
  },
  inactiveiconestyle: {
    fontSize: scale(30),
    color: themecolor,
  },
  lablestyle: {fontSize: scale(10), color: grey6, fontWeight: '800'},
  inactivelable: {fontSize: scale(10), color: themecolor, fontWeight: '800'},
  dotstyle: {
    padding: scale(2),
    backgroundColor: themecolor,
    borderRadius: scale(10),
    marginTop: verticalScale(5),
  },
  inactivedot: {
    padding: scale(2),
    backgroundColor: white,
    borderRadius: scale(10),
    marginTop: verticalScale(5),
  },
});
