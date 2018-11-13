import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
const { width, height } = Dimensions.get('window');
import { Constants, Svg, LinearGradient, } from 'expo';

const WINDOW_HEIGHT = height;


export default class BottomTabBar extends Component {
  render() {
    return (
      // <LinearGradient style={{height: 300}} colors={['#61045f', '#20011f']}>

      // <View>
      <LinearGradient 
          colors={['#04E1BC', '#04B490']}
          style={styles.tabBar}>

          <LinearGradient 
          colors={['#04E1BC', '#04B490']}
          style={styles.navigationTab}>
            <TouchableOpacity>
              <Text>Home</Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient 
          colors={['#04E1BC', '#04B490']}
          style={styles.navigationTab}>
            <TouchableOpacity>
              <Text>Time</Text>
            </TouchableOpacity>
          </LinearGradient>

      </LinearGradient>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
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