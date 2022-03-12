import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import CreateStory from "../screens/createPost";
import Profile from "../screens/Profile"
import TabNavigator from "./TabNavigator"

const Drawer = createDrawerNavigator();
const DrawerNavigator = ()=>{
  return(
    <Drawer.Navigator>
      <Drawer.Screen name = "Home" component = {TabNavigator}/>
      <Drawer.Screen name = "Profile" component = {Profile}/>
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;