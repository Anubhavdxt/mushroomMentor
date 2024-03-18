import {StatusBar} from 'react-native';
import React from 'react';

// Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from './screens/Home';
import KnowYourMushroom from './screens/KnowYourMushroom';

export type RootStackParamList = {
  Home: undefined;
  KnowYourMushroom: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home',
          }}
        />
        <Stack.Screen
          name="KnowYourMushroom"
          component={KnowYourMushroom}
          options={{
            title: 'Know Your Mushroom',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
