import React from 'react';
import { Platform, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import TabBarIconAlt from '../components/TabBarIconAlt';
import HomeScreen from '../screens/HomeScreen';
import PrayerTimes from '../screens/PrayerTimes';
import SettingsScreen from '../screens/SettingsScreen';
import AboutScreen from '../screens/AboutScreen';
import NewHomeScreen from '../screens/NewHomeScreen';

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

const PrayerStack = createStackNavigator({
  Prayer: PrayerTimes,
});

PrayerStack.navigationOptions = {
  tabBarLabel: 'Prayer Times',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-time${focused ? '' : '-outline'}` : 'md-time'}
    />
  ),
};

// const AboutStack = createStackNavigator({
//   Settings: AboutScreen,
// });

// AboutStack.navigationOptions = {
//   tabBarLabel: 'About',
//   tabBarIcon: ({ focused }) => (
//     <TabBarIcon
//       focused={focused}
//       name={Platform.OS === 'ios' ? `ios-contact${focused ? '' : '-outline'}` : 'md-person'}
//     />
//   ),
// };

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

const NewHomeStack = createStackNavigator({
  NewHome: NewHomeScreen,
});

NewHomeStack.navigationOptions = {
  tabBarLabel: 'New Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

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
  NewHomeStack,
  HomeStack,
  // AboutStack,

  PrayerStack,
  SettingsStack,
  
  
},
{
  navigationOptions: ({ navigation }) => ({
    
  }),
  tabBarOptions: {
    activeTintColor: '#66CDAA',
    inactiveTintColor: 'gray',
    activeBackgroundColor: '#0a1411',
    inactiveBackgroundColor: '#142922'
  },
}

);
