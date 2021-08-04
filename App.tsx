import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import { configureStore } from './src/redux/store';
import ScreenA from './src/screens/ScreenA';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenB from './src/screens/ScreenB';
import { screenNames } from './src/screens/screens';

const Stack = createStackNavigator();
const store = configureStore();

const App = () => {
   return (
    <Provider store={store}>
        <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name={screenNames.screenA}
                        component={ScreenA}
                        options={{ title: 'Screen A' }}
                    />
                    <Stack.Screen
                        name={screenNames.screenB}
                        component={ScreenB}
                        options={{ title: 'Screen B' } }
                    />
                </Stack.Navigator>
        </NavigationContainer>
     </Provider>
   );
 };

 export default App;
