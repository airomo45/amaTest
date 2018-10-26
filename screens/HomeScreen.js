import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import axios from 'axios';





export default class HomeScreen extends React.Component {
  state = {
    persons: [],
    name: 'Romo man',
    currentTime: '',
    nextTime: '',
    fajrTime: '',
    zuhrTime: '',
    asrTime: '',
    maghribTime: '',
    ishaTime: '',
    todaysDate: ''
  

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
        this.setState(
        {
          fajrTime: persons[0].fajr_iqamah,
          zuhrTime: persons[0].dhuhr_iqamah,
          asrTime: persons[0].asr_iqamah,
          maghribTime: persons[0].maghrib_iqamah,
          ishaTime: persons[0].isha_iqamah,
          todaysDate: '' + month + '/' + day + '/' + year + ''
        }
      );
      })
      // this.whatPrayerTime();

  }

  whatPrayerTime() {
    console.log("=================> It works!");
    console.log(this.state.fajrTime);
    console.log(this.state.todaysDate);


    /**
    |-----------------------------------------------------------------------------------------
    | Algorithm for the next prayer time:
    |-----------------------------------------------------------------------------------------
      step 1 putting the date and the time string together into one string
      step 2 convert them into unix time codes
      use this link for reference on how the time comparison works:
      https://stackoverflow.com/questions/27117730/how-to-compare-time-with-am-pm-in-javascript
    **/

    // const current_time = '' + this.state.todaysDate + ' ' + this.state.currentTime + '';

    const current_time = new Date('' + this.state.todaysDate + ' ' + this.state.currentTime + '').getTime();
     /**
     |--------------------------------------------------------------------------------
     | Test with hard coded time:
     |---------------------------------------------------------------------------------
      const current_time = new Date('' + this.state.todaysDate + ' 7:30 PM').getTime(); 
     */

    const fajr_time = new Date('' + this.state.todaysDate + ' ' + this.state.fajrTime + '').getTime();
    const zuhr_time = new Date('' + this.state.todaysDate + ' ' + this.state.zuhrTime + '').getTime();
    const asr_time =  new Date('' + this.state.todaysDate + ' ' + this.state.asrTime + '').getTime();
    const maghrib_time =  new Date('' + this.state.todaysDate + ' ' + this.state.maghribTime + '').getTime();
    const isha_time =  new Date('' + this.state.todaysDate + ' ' + this.state.ishaTime + '').getTime();

    console.log(current_time < fajr_time);


    // const next_time = '' + this.state.todaysDate + ' ' + this.state.currentTime + '';

    // if ( current_time < fajr_time )
    // {
    //   console.log("Its fajr time")
    // }
    if (current_time > fajr_time && current_time < zuhr_time)
    {
      console.log("Its zuhr time")
      return ("Zuhr");
    }
    else if (current_time > zuhr_time && current_time < asr_time)
    {
      console.log("Its asr time")
      return ("Asr");
    }
    else if (current_time > asr_time && current_time < maghrib_time)
    {
      console.log("Its maghrib time")
      return ("Maghrib");
    }
    else if (current_time > maghrib_time && current_time < isha_time)
    {
      console.log("Its Isha time")
      return ("Isha");
    }
    else {
      console.log("Its Fajr time");
      return ("Fajr");
      // this.setState({nextTime: 'Fajr Time'})
    }

    console.log(current_time);
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    console.log(this.state.currentTime);
    console.log("Fajr time: " + this.state.fajrTime);
    console.log("Zuhr time: " + this.state.zuhrTime);
    console.log("Asr time: " + this.state.asrTime);
    console.log("Maghrib time: " + this.state.maghribTime);
    console.log("Isha time: " + this.state.ishaTime);
    console.log("Todays Date: " + this.state.todaysDate); 
    this.whatPrayerTime();
    console.log("====> " + this.whatPrayerTime());
    return (
      <View style={styles.container}>
        <Text>
          Next Prayer:
        </Text>
        <Text>
          {
            this.whatPrayerTime()
          }
        </Text>
        {

          this.state.persons.map((item, index) => {
            return(
              <View>
   
                  {
                    // Fajr:
                    
                    this.whatPrayerTime() == 'Fajr'?
                    <View>
                      <Text>
                        Adhan:
                        {" " + item.fajr_na }
                      </Text>
                      <Text>
                        Iqamah:
                        {" " + item.fajr_iqamah}
                      </Text>
                    </View>
                      : 
                    null

                  }
                  {
                    // Zuhr:
                    
                    this.whatPrayerTime() == 'Zuhr'?
                    <View>
                      <Text>
                        Adhan:
                        {" " + item.dhuhr }
                      </Text>
                      <Text>
                        Iqamah:
                        {" " + item.dhuhr_iqamah}
                      </Text>
                    </View>
                      : 
                    null

                  }
                  {
                    // Asr:
                    
                    this.whatPrayerTime() == 'Asr'?
                    <View>
                      <Text>
                        Adhan:
                        {" " + item.asr_hanafi }
                      </Text>
                      <Text>
                        Iqamah:
                        {" " + item.asr_iqamah}
                      </Text>
                    </View>
                      : 
                    null

                  }
                  {
                    // Maghrib:
                    
                    this.whatPrayerTime() == 'Maghrib'?
                    <View>
                      <Text>
                        Adhan:
                        {" " + item.maghrib }
                      </Text>
                      <Text>
                        Iqamah:
                        {" " + item.maghrib_iqamah}
                      </Text>
                    </View>
                      : 
                    null

                  }
                  {
                    // Isha:
                    
                    this.whatPrayerTime() == 'Isha'?
                    <View>
                      <Text>
                        Adhan:
                        {" " + item.isha }
                      </Text>
                      <Text>
                        Iqamah:
                        {" " + item.isha_iqamah}
                      </Text>
                    </View>
                      : 
                    null

                  }


              
              </View>
            );
          })
        }

      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2ff',
    justifyContent: 'center',
     alignItems: 'center' 
  },

});
