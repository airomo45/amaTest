import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
    headerStyle: {
      backgroundColor: '#142922',
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
            Settings
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