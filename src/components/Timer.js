import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CountDown from 'react-native-countdown-component';
export default class Timer extends Component {
    constructor() {
        super()
        this.state = {
            isRunning: true,
            relax: '#EA4444',
            time: 10,
            uniqueValue: 1,
        }
    }
    toggleTimer = () => {
        this.setState({ isRunning: !this.state.isRunning })
    }
    toggleWork = () => {
        this.setState({ relax: '#58CCED', time: 20 })
    }
    forceReset = () => {
        this.setState({
            relax: '#EA4444',
            time: 10,
            uniqueValue: this.state.uniqueValue + 1
        })
    }
    render() {
        console.log(this.state.time);
        return (
            <View style={[styles.container, { backgroundColor: this.state.relax }]}>

                <CountDown
                    key={this.state.uniqueValue}
                    until={this.state.time}
                    onFinish={() => this.toggleWork()}
                    onPress={() => alert('hello')}
                    size={20}
                    running={this.state.isRunning}
                />
                <TouchableOpacity onPress={this.toggleTimer}>
                    <Text>Play / Pause</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.forceRemount}>
                    <Text>Reset Button</Text>
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
    },
    Timer: {
        fontSize: 30,
        textAlign: 'center',
        color: 'white',
    }
});
