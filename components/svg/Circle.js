import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { Constants, Svg, LinearGradient, } from 'expo';
const {Circle, Defs, Stop, G, Polygon, Ellipse, TSpan} = Svg;

const { width, height } = Dimensions.get('window');


export default class SVG extends Component {
  render() {
    return (
      // <LinearGradient style={{height: 300}} colors={['#61045f', '#20011f']}>

      <View style={styles.container}>
        <View style={styles.CircleShapeView}>
          {
          <LinearGradient 
          colors={['#04E1BC', '#04B490']}
          style={styles.CircleShapeView}>
          <Text>New test</Text>
          </LinearGradient>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    // backgroundColor: '#ecf0f1',
  },
  CircleShapeView: {
    width: 350,
    height: 350,
    borderRadius: 350/2,
    backgroundColor: '#00BCD4',
    alignItems: 'center',
    justifyContent: 'center',
},
});