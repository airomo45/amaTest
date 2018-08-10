import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TabBarIconAlt from '../components/TabBarIconAlt';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'ios-home'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

const AboutStack = createStackNavigator({
  Settings: AboutScreen,
});

AboutStack.navigationOptions = {
  tabBarLabel: 'About',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-contact${focused ? '' : '-outline'}` : 'md-person'}
    />
  ),
};

// const AboutStack = createStackNavigator({
//   Settings: AboutScreen,
// });

// AboutStack.navigationOptions = {
//   tabBarLabel: 'About',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIconAlt
//       focused={focused}
//       name={Platform.OS === 'ios' ? `user${focused ? '' : ''}` : 'md-options'}
//     />
//   ),
// };


const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  AboutStack,
  LinksStack,
  SettingsStack,
  
  
},
{
  navigationOptions: ({ navigation }) => ({
    
  }),
  tabBarOptions: {
    activeTintColor: '#2f95dc',
    inactiveTintColor: 'gray',
    activeBackgroundColor: '#001a33',
    inactiveBackgroundColor: '#003366'
  },
}

);
