import {View, Text, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './Navigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {persistor, store} from './Redux/store';
import {themecolor, white} from './utils/color';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <PaperProvider>
          <Provider store={store}>
            <PersistGate loading={true} persistor={persistor}>
              <StatusBar
                backgroundColor={themecolor}
                barStyle={'dark-content'}
              />
              <Navigation />
            </PersistGate>
          </Provider>
        </PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;
