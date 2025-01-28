/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import SubHeader from '../../components/SubHeader';
import {
  commonstyles,
} from '../../styles/commonstyles';
import { ContactStyles } from '../../styles/contactScreenStyles';

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView styles={commonstyles.container}>
              <SubHeader
          title={'About Us'}
          isShare={true}
          leftBtnClick={() => this.props.navigation.goBack()}
         
          
        />
        <ScrollView>
          <View style={ContactStyles.mainView}>
            <View style={ContactStyles.subView}>
              <Text style={ContactStyles.title}>TelanganaToday
              </Text>
              <Text style={ContactStyles.content}>
                The newest entrant into the highly competitive media arena of Telangana,
                we are an energetic team of both experienced and young journalists,
                striving to bring everything that is Telangana, and Hyderabad, to our readers.
              </Text>
              <Text style={ContactStyles.content}>
                And we hope to do that in the fastest way possible, using the latest technology,
                combining multimedia with the highest standards of long form journalism, with
                credibility, and in whichever way that connects with the reader, be it through
                our pages, through various social media including Twitter and Facebook or our
                own website,which will be up to date and alert round the clock, just like our
                journalists.
              </Text>
              <Text style={ContactStyles.content}>
                Telangana Today is published from Hyderabad in Telangana,
                we bring breaking news, timely updates and extensive coverage,
                apart from a daily rich spread of news and views on Hyderabad
                and Telangana, the politics here, the burgeoning business
                centres, IT hubs and the cutting edge technology crafted
                in the youngest State in India, transportation and civic
                issues, developmental projects across varied sectors,
                the heritage that defines Hyderabad, exciting sports
                events, Tollywood’s groundbreaking movies, and much more.
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
