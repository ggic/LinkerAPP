import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import HomeScreen from './src/HomeScreen.js'
import DetailScreen from './src/DetailScreen.js'
import ScrollScreen from './src/ScrollScreen.js'
import ProfileScreen from './src/ProfileScreen.js'
import ChatScreen from './src/ChatScreen.js'



class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* other code from before here */}
        <Button
          title="Go to Details1"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  Details: DetailScreen,
  Scroll:ScrollScreen,
});

const SettingsStack = createStackNavigator({
  Profile: ProfileScreen
});
const MessagesStack = createStackNavigator({
  Chat: ChatScreen,
});
const TabAPP = createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeStack,
      Messages: MessagesStack,
      Me: SettingsStack,
    },
    {
      /* Other configuration remains unchanged */
    }
  )
);


export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <TabAPP />
      </View>
    );
  }
}