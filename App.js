import React, { Component } from 'react';
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Timer from './src/components/Timer';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>Hello</Text>
        <Timer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EA4444',
  }
});
