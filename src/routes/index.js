import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ScrollView} from 'react-native-gesture-handler';
import HomeScreen from '../containers/Home';
import IdeasScreen from '../containers/Ideas';
import InviteScreen from '../containers/Invite';
import LoginScreen from '../containers/Login';
import RegisterScreen from '../containers/Register';
import SearchScreen from '../containers/Search';
import SettingsScreen from '../containers/Settings';
import CustomDrawer from '../components/Drawer';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const StackApp = createStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});

const Routes = (props) => {
  const TabNavigator = () => {
    return (
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? require('../images/home.png')
                : require('../images/home.png');
            } else if (route.name === 'Settings') {
              iconName = focused
                ? require('../images/settings.png')
                : require('../images/settings.png');
            } else if (route.name === 'Ideas') {
              iconName = focused
                ? require('../images/idea.png')
                : require('../images/idea.png');
            } else if (route.name === 'Search') {
              iconName = focused
                ? require('../images/loupe.png')
                : require('../images/loupe.png');
            } else if (route.name === 'Invites') {
              iconName = focused
                ? require('../images/invitation.png')
                : require('../images/invitation.png');
            }

            // You can return any component that you like here!
            return (
              <Image
                source={iconName}
                style={{width: 20, height: 20}}
                resizeMode="contain"
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'black',
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Ideas" component={IdeasScreen} />
        <Tab.Screen name="Invites" component={InviteScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    );
  };

  const DrawerStack = () => {
    return (
      <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}>
        <Drawer.Screen name="Home" component={TabNavigator} />
      </Drawer.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="Login">
        <StackApp.Screen
          name="HomeApp"
          component={DrawerStack}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="Login"
          component={LoginScreen}
          options={navOptionHandler}
        />
        <StackApp.Screen
          name="Register"
          component={RegisterScreen}
          options={navOptionHandler}
        />
      </StackApp.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
