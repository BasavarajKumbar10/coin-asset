import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import {SafeAreaView, StatusBar, StyleSheet, useColorScheme,} from 'react-native';
import { configureStore } from './src/redux/store';
import ScreenA from './src/screens/ScreenA';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const store = configureStore();

const App = () => {
   return (
    <Provider store={store}>
        <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="ScreenA"
                        component={ScreenA}
                        options={{ title: 'ScreenA' }}
                    />
                </Stack.Navigator>
        </NavigationContainer>
     </Provider>
   );
 };

 export default App;
