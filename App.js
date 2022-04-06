import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


import { HomeScreen } from './screens/HomeScreen';
import { ExampleScreen } from './screens/ExampleScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Example" component={ExampleScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;