import React, {PureComponent} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';

export default class CustomDrawer extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{height: 150, alignItems: 'center', justifyContent: 'center'}}>
          <Image
            style={{height: 120, width: 120, borderRadius: 60}}
            source={require('../../images/user.png')}
          />
        </View>
        <ScrollView style={{marginLeft: 5}}>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text>Menu Tab</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => this.props.navigation.navigate('Ideas')}>
            <Text>Ideas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 20}}>
            <Text>E-Invites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 20}}>
            <Text>HELP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 20}}>
            <Text>ABOUT US</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 20}}>
            <Text>PIVACY POLICY</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 20}}>
            <Text>RATE APP</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{marginTop: 20}}>
            <Text>LOGOUT</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
