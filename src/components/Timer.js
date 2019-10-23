import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import CountDown from 'react-native-countdown-component';
export default class Timer extends Component {
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
            <>
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
            </>
        );
    }
}

const styles = StyleSheet.create({
    Timer: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white'
    }
});
