import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    title: 'About',
    headerStyle: {
      backgroundColor: '#003366',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },

  };

  render() {

    return (
      <ScrollView style={styles.container}>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            About
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#e6f2ff',

  },
});