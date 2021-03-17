import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import CustomHeader from '../../components/Header/index';

export default class SettingsScreen extends PureComponent {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title={'Settings'}
          isHome={false}
          navigation={this.props.navigation}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Settings!</Text>
        </View>
      </SafeAreaView>
    );
  }
}
