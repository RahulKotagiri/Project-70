import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WriteStoryScreen from './screens/WriteStoryScreen';
import ReadStoryScreen from './screens/ReadStoryScreen';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
    return (
      <AppContainer />
    );
  }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const SwitchNavigator = createSwitchNavigator({
  WriteStoryScreen: WriteStoryScreen,
  ReadStoryScreen: ReadStoryScreen
})

const AppContainer = createAppContainer(SwitchNavigator);