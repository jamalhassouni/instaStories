/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n'
});

const stories = [
  {
    id: '2',
    source: require('./assets/stories/2.jpg'),
    user: 'derek.russel',
    avatar: require('./assets/avatars/derek.russel.png'),
  },
  {
    id: '4',
    source: require('./assets/stories/4.jpg'),
    user: 'jmitch',
    avatar: require('./assets/avatars/jmitch.png'),
  },
  {
    id: '5',
    source: require('./assets/stories/5.jpg'),
    user: 'monicaa',
    avatar: require('./assets/avatars/monicaa.png'),
  },
  {
    id: '3',
    source: require('./assets/stories/3.jpg'),
    user: 'alexandergarcia',
    avatar: require('./assets/avatars/alexandergarcia.png'),
  },
  {
    id: '1',
    source: require('./assets/stories/1.jpg'),
    user: 'andrea.schmidt',
    avatar: require('./assets/avatars/andrea.schmidt.png'),
  },
];


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
