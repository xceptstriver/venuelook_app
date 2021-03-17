import React, {PureComponent} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, Image} from 'react-native';

export default class CustomHeader extends React.PureComponent {
  render() {
    let {navigation, isHome, title} = this.props;
    console.log(this.props.navigation);
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
        }}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          {isHome ? (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                style={{width: 30, height: 30, marginLeft: 5}}
                source={require('../../images/menu.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => navigation.goBack()}>
              <Image
                style={{width: 30, height: 30, marginLeft: 5}}
                source={require('../../images/left-arrow.png')}
                resizeMode="contain"
              />
              <Text>Back</Text>
            </TouchableOpacity>
          )}
        </View>

        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <Text style={{textAlign: 'center'}}>{title}</Text>
        </View>
        <View style={{flex: 1}}></View>
      </View>
    );
  }
}
