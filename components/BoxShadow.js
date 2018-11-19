import React, { Component } from 'react';
import { View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
// import CardView from 'react-native-cardview';
import { LinearGradient, } from 'expo';



export default class BoxShadow extends Component {
  render() {
      const shadowStyle={
          shadowOpacity: 0.5,
          shadowRadius: 20,
          shadowColor: 'red',
          shadowOffset: {width: 1, height: 1}
      }
    return (
      // <LinearGradient style={{height: 300}} colors={['#61045f', '#20011f']}>
      <View>
        <View style={styles.boxColor}>
            <Text>
                Test
            </Text>
        </View>
        <View style={{ marginBottom: 12, }}>
        <LinearGradient
            colors={['rgba(0,0,0,.85)', 'transparent']}
            style={{
                left: 0,
                right: 0,
                height: 60,
            }}
        />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
    boxColor:{
        backgroundColor: '#142922', width: '100%', height: 250,
    }

});