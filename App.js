import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "./screens/Feed";
import CreatePost from "./screens/createPost";
import Profile from "./screens/Profile"
import DrawerNavigator from "./Navigation/Drawer"

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator/>
      
    </NavigationContainer>
  );
}