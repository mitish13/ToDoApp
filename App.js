import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {BlogProvider} from './src/context/BlogContext';
import HomeScreen from "./src/screen/HomeScreen";
import ShowScreen from "./src/screen/ShowScreen";
import CreateScreen from "./src/screen/CreateScreen";

import EditScreen from "./src/screen/EditScreen";


const navigator=createStackNavigator({
  Home:HomeScreen,
  Show:ShowScreen,
  Create:CreateScreen,
  Edit:EditScreen

},{
  initialRouteName:"Home",
  defaultNavigationOptions:{
    title:"TO DO's to do"
  }
});
const App=createAppContainer(navigator);

export default()=>{
  return <BlogProvider><App/></BlogProvider>
}; 