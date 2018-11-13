import React from 'react';
import { Alert, Platform, StatusBar, StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import { AppLoading, Asset, Font, Icon, LinearGradient,  } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import NewHomeScreen from './screens/NewHomeScreen';
import BottomTabBar from './components/BottomTabBar'
import PrayerTimes from './screens/PrayerTimes';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
    whichScreen: ''
  };

  changeScreen() {
    Alert.alert('Button was tapped')
  }
  render() {
    console.log("Which Screen ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||*******************************************************************************************===========================>")

    console.log(this.state.whichScreen)
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          
          {  
            1 == 1?    
             <NewHomeScreen/>
             :
             <PrayerTimes/>
          }
        

        {/* Tab bar:*/}
        <LinearGradient 
        colors={['#04E1BC', '#04B490']}
        style={styles.tabBar}>

        <LinearGradient 
            colors={['#04E1BC', '#04B490']}
            style={styles.navigationTab}>
            <TouchableOpacity
                onPress={this.changeScreen}
              >
                <Text>Home</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient 
            colors={['#04E1BC', '#04B490']}
            style={styles.navigationTab}>
              <TouchableOpacity
                onPress={this.changeScreen}
              >
                <Text>Time</Text>
              </TouchableOpacity>
            </LinearGradient>

        </LinearGradient>
        
       
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fff',
  },
  tabBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    // backgroundColor: '#ecf0f1',
    backgroundColor: '#3EDDD8',
    width: '100%',
    height: 100,
    position: 'absolute',
      bottom: 0
    // top: WINDOW_HEIGHT - 600, 
    // top: 50,
  },
  navigationTab: {
    width: '50%',
    height: '100%', 
    alignItems: 'center',
    justifyContent: 'center',
},
});
