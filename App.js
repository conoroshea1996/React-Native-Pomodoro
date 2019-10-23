import React, { Component } from 'react';
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CountDown from 'react-native-countdown-component';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isRunning: true,
    }
  }
  toggleTimer = () => {
    this.setState({ isRunning: !this.state.isRunning })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.Timer}>Hello</Text>
        <CountDown
          until={1000}
          onFinish={() => alert('finished')}
          onPress={() => alert('hello')}
          size={20}
          running={this.state.isRunning}
        />
        <TouchableOpacity onPress={this.toggleTimer}>
          <Text>Play / Pause</Text>
        </TouchableOpacity>
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
  },
  Timer: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  }
});
