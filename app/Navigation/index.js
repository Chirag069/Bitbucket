import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {themeshade} from '../utils/color';
import TabStack from './TabStack';

const Index = () => {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: themeshade, // Set the background color you want
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <View style={{flex: 1, backgroundColor: '#202020'}}>
        <TabStack />
      </View>
    </NavigationContainer>
  );
};

export default Index;
