import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import axios from 'axios';

export default class LinksScreen extends React.Component {
  state = {
    persons: [],
    name: 'Romo man'
  }
  componentDidMount() {
    axios.get(`https://sheetlabs.com/ACCT/testAMANew?date=2018-08-28T00:00:00+00:00`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons[0].empname);
      })
  }

  static navigationOptions = {
    title: 'Links',
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
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text>
            Links:
          </Text>
          <Text>
            1. {this.state.name}

          </Text>
          <View>
            {
              this.state.persons.map((item, index) => {
                return (
                  <Text>
                    {item.maghrib}
                  </Text>
                )
              }
                        
            )

            }
          </View>
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
