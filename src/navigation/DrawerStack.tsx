import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screen/Home';
import Login from '../screen/Login';

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation={true}
      screenOptions={{headerShown: false}}
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Login" component={Login} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
