import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import CustomHeader from '../../components/Header/index';

export default class SearchScreen extends PureComponent {
  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader
          title={'Search'}
          isHome={false}
          navigation={this.props.navigation}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>Search!</Text>
        </View>
      </SafeAreaView>
    );
  }
}
