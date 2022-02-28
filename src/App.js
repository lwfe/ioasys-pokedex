import React from 'react';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {store} from '../src/store/index';
import {Provider} from 'react-redux';

import Main from './pages/Main/index';
import Splash from './pages/Splash/index';
import Favorites from './pages/Favorite';
import PokeDetails from './pages/PokeDetails';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Favorites"
            component={Favorites}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="PokeDetails"
            component={PokeDetails}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
