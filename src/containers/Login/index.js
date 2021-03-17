import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import CustomHeader from '../../components/Header/index';

export default class LoginScreen extends PureComponent {
  render() {
    console.log('loginScreen===', this.props);
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Login Screen!</Text>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => this.props.navigation.navigate('HomeApp')}>
            <Text>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => this.props.navigation.navigate('Register')}>
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
