import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import { WebBrowser, Font } from 'expo';
import moment from 'moment';
import { MonoText } from '../components/StyledText';
import axios from 'axios';
import { LinearGradient, } from 'expo';

// import {BoxShadow} from 'react-native-shadow'





export default class Home extends React.Component {
  state = {
    persons: [],
    nextDay: [],
    fajrNextDay: '',
    name: 'Romo man',
    currentTime: '',
    nextTime: '',
    fajrTime: '',
    zuhrTime: '',
    asrTime: '',
    maghribTime: '',
    ishaTime: '',
    todaysDate: '',
    tomorrowsDate: '',
    militaryCurrentTime: '',
    
  

  }

  
  componentDidMount() {

    Font.loadAsync({
      'lemon-jelly': require('../assets/fonts/Lobster.otf'),
    });

    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    // var time =  date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    var time = moment().format('h:mm A');

    var militaryTime = '' + date.getHours() + ':' + date.getMinutes() + '';

    this.setState({
      militaryCurrentTime: militaryTime
    })


    console.log('https://sheetlabs.com/ACCT/AMA_APP_DATA?date=' + year + '-' + month + '-' + (day + 1) + '')

    console.log(
      "||||||||||||||||||||||||||||||||||||||||||>" +
      time
    );
    console.log(
      "||||||||||||||||||||||||||||||||||||||||||=====================>" +
      moment().format('h:mm A')
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
          todaysDate: '' + month + '/' + day + '/' + year + '',
          tomorrowsDate: '' + month + '/' + (day + 1) + '/' + year + '',
        }
      );
      })

      axios.get(
        'https://sheetlabs.com/ACCT/AMA_APP_DATA?date=' + year + '-' + month + '-' + (day + 1) + ''
        // 'https://sheetlabs.com/ACCT/AMA_APP_DATA?date=2018-09-14'
      )
        .then(res => {
          const nextDay = res.data;
          this.setState({ nextDay });
          console.log(nextDay[0].empname);
          console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>" + nextDay[0].fajr_na);
          this.setState(
          {
            fajrNextDay: nextDay[0].fajr_iqamah,

          }
        );
        })
      // this.whatPrayerTime();

  }

  whatPrayerTime() {
    console.log(this.state.currentTime > '12:00 AM'  );
    console.log("=================> It works!");
    console.log(this.state.fajrTime);
    console.log(this.state.todaysDate);
    console.log("========123456878798=========> It works!");

    console.log(this.state.fajrNextDay);


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
  // const current_time = new Date('' + this.state.todaysDate + ' 12:15 AM').getTime();

     /**
     |--------------------------------------------------------------------------------
     | Test with hard coded time:
     |---------------------------------------------------------------------------------
      const current_time = new Date('' + this.state.todaysDate + ' 12:39 PM').getTime();
     */ 
    const fajr_time = new Date('' + this.state.todaysDate + ' ' + this.state.fajrTime + '').getTime();
    const zuhr_time = new Date('' + this.state.todaysDate + ' ' + this.state.zuhrTime + '').getTime();
    const asr_time =  new Date('' + this.state.todaysDate + ' ' + this.state.asrTime + '').getTime();
    const maghrib_time =  new Date('' + this.state.todaysDate + ' ' + this.state.maghribTime + '').getTime();
    const isha_time =  new Date('' + this.state.todaysDate + ' ' + this.state.ishaTime + '').getTime();
    const fajr_NextDay = new Date('' + this.state.tomorrowsDate + ' ' + this.state.fajrNextDay + '').getTime();

    console.log(current_time < fajr_time);
    console.log("Testing the time >>>>>>>>> " + this.state.todaysDate + ' ' + this.state.currentTime);
    
    console.log("==========================================================");
    console.log();
    console.log();
    console.log("This is the current time: " + current_time);
    console.log("This is isha time: " + isha_time);
    console.log('This is fajr time ' + fajr_time);
    console.log("Is current time > isha" + current_time > isha_time);
    console.log("Is current time < fajr" + current_time < fajr_time);
    console.log("Is current time < Zuhr" + current_time > fajr_time && current_time <= zuhr_time);
    console.log();
    console.log();
    console.log("==========================================================");
    console.log(fajr_NextDay);
    console.log("==========================================================>");
    console.log("This is the current time: " + current_time);
    console.log("This is the fajr time tomorrow: " + fajr_NextDay);
    console.log(current_time < fajr_NextDay);
    console.log("==========================================================>");
    console.log("This is the current time: " + current_time);
    console.log("This is the isha time: " + isha_time);
    // console.log(current_time > isha_time);







    // const next_time = '' + this.state.todaysDate + ' ' + this.state.currentTime + '';

    // if ( current_time < fajr_time )
    // {
    //   console.log("Its fajr time")
    // }
    if ((current_time > isha_time && current_time <= fajr_NextDay) || (current_time <= fajr_time) )
    {
      console.log("Its Fajr time")
      return ("Fajr");
    }
    else if (current_time > fajr_time && current_time <= zuhr_time)
    {
      console.log("Its zuhr time")
      return ("Zuhr");
    }
    else if (current_time > zuhr_time && current_time <= asr_time)
    {
      console.log("Its asr time")
      return ("Asr");
    }
    else if (current_time > asr_time && current_time <= maghrib_time)
    {
      console.log("Its maghrib time")
      return ("Maghrib");
    }
    else if (current_time > maghrib_time && current_time <= isha_time)
    {
      console.log("Its Isha time")
      return ("Isha");
    }
    // else if (current_time > isha_time && current_time <= fajr_time){
    //   console.log("Its Fajr time yaaaaaaaaaaaaaaaaaaaaaaaaaaaaaayyyyyyyy!");
    //   return ("Fajr");
    //   // this.setState({nextTime: 'Fajr Time'})
    // }

    else {
      console.log("Its null time");
      return ("null");
      // this.setState({nextTime: 'Fajr Time'})
    }


    console.log(current_time);
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    
    return (
                  <View style={styles.container}
      >

      {
        // Loading overlay:
      // this.whatPrayerTime() == 'Fajr'?
      //  <View style={{
      //    height: '100%', 
      //    width: '100%', 
      //    backgroundColor:'#000',
      //    position: 'absolute' ,
      //    top: 0,
      //    left: 0, 
      //    opacity: .6,
      //    marginTop: -80,
      //   }}>
      //   <Text>
      //     NUll
      //   </Text>
      //  </View>
      //  :
      //  null
      }

        <StatusBar
          // backgroundColor="blue"
          barStyle="light-content"
        />
        <View style={styles.nextTime}>
        { /*<LinearGradient 
        start={{x: 0, y: .8}} end={{x: 0, y: 1}}
        colors={['#142922', '#ffffff']}
        style={styles.container}>*/}
        {
          <View style={{height: 30, width: '100%', backgroundColor: '#142922'}}>
          </View>
        }
        {
        // <View style={styles.iqamahTime}>
        //   <Text>
        //   {
        //     "Today's date: " + this.state.todaysDate
        //   }
            
        //   </Text>
        // </View>
        }
          <View style={styles.header}>

            <Text style={styles.title}>
              Next Prayer:
            </Text>
          </View>
          <View style={styles.prayerHeader}>
            <Text style={styles.h1}>
              {
                this.whatPrayerTime() == 'null'?
                null
                :
                this.whatPrayerTime()
              }
            </Text>
          </View>
          {

            this.state.persons.map((item, index) => {
              return(
                <View>
    
                {
                  //Fajr:
                  
                  this.whatPrayerTime() == 'Fajr'?
                  // Checking which fajr time to display
                  (this.state.militaryCurrentTime < '0:00' && this.state.militaryCurrentTime < '8:00')?
                    // Displays fajr for current date
                    <View>
                    <View style={styles.prayerHeader}>
                      <Text style={styles.h2}>
                        Adhan:
                        {" " + item.fajr_na }
                      </Text>
                    </View>
                    <View style={styles.prayerHeader}>
                      <Text  style={styles.h2}>
                        Iqamah at Al-Madina:
                      </Text>
                    </View>
                    <View style={styles.iqamahTime}>
                      <Text style={[styles.h1, {color: 'red'}]}>
                      {item.fajr_iqamah}
                      </Text>
                    </View>
                  </View>
                  :
                  // displays fajr for tomorrow's date
                  this.state.nextDay.map((item2, index) => {
                    return(
                        <View>
                          <View style={styles.prayerHeader}>
                            <Text style={styles.h2}>
                              Adhan:
                              {" " + item2.fajr_na }
                            </Text>
                          </View>
                          <View style={styles.prayerHeader}>
                            <Text  style={styles.h2}>
                              Iqamah at Al-Madina:
                            </Text>
                          </View>
                          <View style={styles.iqamahTime}>
                            <Text style={[styles.h1, {color: 'red'}]}>
                            {item2.fajr_iqamah}
                            </Text>
                          </View>
                        </View>
                    )
                  }
                )
                    : 
                  null

                }
                    {
                      // Zuhr:
                      
                      this.whatPrayerTime() == 'Zuhr'?
                      <View>
                        <View style={styles.prayerHeader}>
                          <Text style={styles.h2}>
                            Adhan:
                            {" " + item.dhuhr }
                          </Text>
                        </View>
                        <View style={styles.prayerHeader}>
                          <Text  style={styles.h2}>
                            Iqamah at Al-Madina:
                          </Text>
                        </View>
                        <View style={styles.iqamahTime}>
                          <Text style={[styles.h1, {color: 'red'}]}>
                          {item.dhuhr_iqamah}
                          </Text>
                        </View>
                      </View>
                        : 
                      null

                    }
                    {
                      // Asr:
                      
                      this.whatPrayerTime() == 'Asr'?
                      <View>
                        <View style={styles.prayerHeader}>
                          <Text style={styles.h2}>
                            Adhan:
                            {" " + item.asr_hanafi }
                          </Text>
                        </View>
                        <View style={styles.prayerHeader}>
                          <Text  style={styles.h2}>
                            Iqamah at Al-Madina:
                          </Text>
                        </View>
                        <View style={styles.iqamahTime}>
                          <Text style={[styles.h1, {color: 'red'}]}>
                          {item.asr_iqamah}
                          </Text>
                        </View>
                      </View>
                        : 
                      null

                    }
                    {
                      // Maghrib:
                      
                      this.whatPrayerTime() == 'Maghrib'?
                      <View>
                        <View style={styles.prayerHeader}>
                          <Text style={styles.h2}>
                            Adhan:
                            {" " + item.maghrib }
                          </Text>
                        </View>
                        <View style={styles.prayerHeader}>
                          <Text  style={styles.h2}>
                            Iqamah at Al-Madina:
                          </Text>
                        </View>
                        <View style={styles.iqamahTime}>
                          <Text style={[styles.h1, {color: 'red'}]}>
                          {item.maghrib_iqamah}
                          </Text>
                        </View>
                      </View>
                        : 
                      null

                    }
                    {
                      // Isha:
                      
                      this.whatPrayerTime() == 'Isha'?
                      <View>
                        <View style={styles.prayerHeader}>
                          <Text style={styles.h2}>
                            Adhan:
                            {" " + item.isha }
                          </Text>
                        </View>
                        <View style={styles.prayerHeader}>
                          <Text  style={styles.h2}>
                            Iqamah at Al-Madina:
                          </Text>
                        </View>
                        <View style={styles.iqamahTime}>
                          <Text style={[styles.h1, {color: 'red'}]}>
                          {item.isha_iqamah}
                          </Text>
                        </View>
                      </View>
                        : 
                      null

                    }


                
                </View>
              );
            })
          }
{/*          </LinearGradient> */}
        </View>
        {
            0 == 1 ?
          //Platform.OS === 'android'?
            <View>
            <LinearGradient
                colors={['rgba(0,0,0,.6)', 'transparent']}
                style={{
                    left: 0,
                    right: 0,
                    height: 40,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                }}
            />
            </View>
            :
            null
          }



        
       
      </View>
    );
  

}
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 0,
    height: '100%',
    width: '100%',

  },
  nextTime: {
      backgroundColor: '#142922'




  },
  header: {
      backgroundColor: '#3d7b66'


  },

  h2: {

  },
  title: {

    
  },
  prayerHeader: {

  },
  h1:{
  
  },
  iqamahTime:{
      backgroundColor: '#51a45f'
   
  },
  dateHeader:{
    
  },
  dateText:{
    
  }


});
