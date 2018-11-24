import React from 'react';
import { View, Text, ScrollView, StyleSheet, StatusBar } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import axios from 'axios';
import { scaleWidth, scaleHeight } from '../assets/responsive/fontSize';

export default class PrayerTimes extends React.Component {
  state = {
    persons: [],
    name: 'Romo man',
  }



  
  componentDidMount() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var time =  date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    console.log(
      time
    );
    this.setState({currentTime: time});
    

    axios.get(
      'https://sheetlabs.com/ACCT/AMA_APP_DATA?date=' + year + '-' + month + '-' + day + ''
      // 'https://sheetlabs.com/ACCT/AMA_APP_DATA?date=2018-09-14'
    )
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons[0].empname);
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>" + persons[0].fajr_na);

      })
      // this.whatPrayerTime();

  }

   

  static navigationOptions = {
    title: 'Prayer Times: ',
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
        <StatusBar
          // backgroundColor="blue"
          barStyle="light-content"
        />
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

          
          <View>
            {
              this.state.persons.map((item, index) => {

                return (
                  // <Text>
                  //   {item.maghrib}
                  // </Text>
                  <View>
                    <View style={styles.timeContainer}>
                      <View style={styles.leftColumn}>
                        <Text style={styles.timeTitle}>
                          Fajr: 
                        </Text>
                      </View>
                      <View style={styles.rightColumn}>
                        <Text style={styles.timeText}>
                          {item.fajr_na}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.iqamahContainer}>
                      <View style={styles.leftColumn_iqamah}>
                        <Text style={styles.timeTitle}>
                          Iqamah: 
                        </Text>
                      </View>
                      <View style={styles.rightColumn_iqamah}>
                        <Text style={styles.timeText}>
                          {item.fajr_iqamah}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.sunriseContainer}>
                      <View style={styles.leftColumn_iqamah}>
                        <Text style={styles.timeTitle}>
                          Sunrise: 
                        </Text>
                      </View>
                      <View style={styles.rightColumn_iqamah}>
                        <Text style={styles.timeText}>
                          {item.sunrise}
                        </Text>
                      </View>
                    </View>

                    <View style={styles.timeContainer}>
                      <View style={styles.leftColumn}>
                        <Text style={styles.timeTitle}>
                          Zuhr: 
                        </Text>
                      </View>
                      <View style={styles.rightColumn}>
                        <Text style={styles.timeText}>
                          {item.dhuhr}
                        </Text>
                      </View>
                    
                    </View>

                    <View style={styles.iqamahContainer}>
                    <View style={styles.leftColumn_iqamah}>
                      <Text style={styles.timeTitle}>
                        Iqamah: 
                      </Text>
                    </View>
                    <View style={styles.rightColumn_iqamah}>
                      <Text style={styles.timeText}>
                        {item.dhuhr_iqamah}
                      </Text>
                    </View>
                  </View>

                    <View style={styles.timeContainer}>
                    <View style={styles.leftColumn}>
                      <Text style={styles.timeTitle}>
                        Asr: 
                      </Text>
                    </View>
                    <View style={styles.rightColumn}>
                      <Text style={styles.timeText}>
                        {item.asr_hanafi}
                      </Text>
                    </View>
                  
                  </View>
                  <View style={styles.iqamahContainer}>
                  <View style={styles.leftColumn_iqamah}>
                    <Text style={styles.timeTitle}>
                      Iqamah: 
                    </Text>
                  </View>
                  <View style={styles.rightColumn_iqamah}>
                    <Text style={styles.timeText}>
                      {item.asr_iqamah}
                    </Text>
                  </View>
                </View>
                    
                  <View style={styles.timeContainer}>
                    <View style={styles.leftColumn}>
                      <Text style={styles.timeTitle}>
                        Maghrib: 
                      </Text>
                    </View>
                    <View style={styles.rightColumn}>
                      <Text style={styles.timeText}>
                        {item.maghrib}
                      </Text>
                    </View>
                
                  </View>

                  <View style={styles.iqamahContainer}>
                  <View style={styles.leftColumn_iqamah}>
                    <Text style={styles.timeTitle}>
                      Iqamah: 
                    </Text>
                  </View>
                  <View style={styles.rightColumn_iqamah}>
                    <Text style={styles.timeText}>
                      {item.maghrib_iqamah}
                    </Text>
                  </View>
                </View>

                  <View style={styles.timeContainer}>
                    <View style={styles.leftColumn}>
                      <Text style={styles.timeTitle}>
                        Isha: 
                      </Text>
                    </View>
                    <View style={styles.rightColumn}>
                      <Text style={styles.timeText}>
                        {item.isha}
                      </Text>
                    </View>
                  
                  </View>

                  <View style={styles.iqamahContainer}>
                  <View style={styles.leftColumn_iqamah}>
                    <Text style={styles.timeTitle}>
                      Iqamah: 
                    </Text>
                  </View>
                  <View style={styles.rightColumn_iqamah}>
                    <Text style={styles.timeText}>
                      {item.isha_iqamah}
                    </Text>
                  </View>
                </View>

                </View>
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
  timeContainer: {
    width: '100%',
    height: 50,
    // padding: 10,
    backgroundColor: '#3d7b66',
    marginTop: 10,
    flexDirection: 'row',
    flexWrap: 'wrap'
    
  },
  timeTitle: {
    color: '#fff',
    // fontSize: '10%',
    fontWeight: 'bold',
    fontSize: scaleWidth(45),

    
  },
  timeText: {
    color: '#fff',
    // fontSize: 25,
    fontSize: scaleWidth(45),
    fontWeight: 'bold',
  },
  leftColumn:{
    backgroundColor: '#142922',
    width: '44%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'

  },
  rightColumn:{
    width: '44%',
    height: 50,
    padding: 10,
    paddingLeft: 35,
    alignItems: 'center',
    justifyContent: 'center'
    

  },
  iqamahContainer: {
    width: '100%',
    height: 40,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: '#51a45f',
    marginTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'

  },

  leftColumn_iqamah :{
    // backgroundColor: '#142922',
    width: '44%',
    padding: 5,
    paddingTop: 0,
    alignItems: 'center',
    justifyContent: 'center'

  },
  rightColumn_iqamah:{
    width: '44%',
    height: 50,
    padding: 5,
    paddingTop: 0,
    paddingLeft: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
    

  },
  sunriseContainer: {
    width: '100%',
    height: 40,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: 'red',
    marginTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
