import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import CountDown from 'react-native-countdown-component';
export default class Timer extends Component {
    constructor() {
        super()
        this.state = {
            isRunning: true,
            relax: '#EA4444',
            time: 30*60,
            uniqueValue: 1,
        }
    }
    toggleTimer = () => {
        this.setState({ isRunning: !this.state.isRunning })
    }
    toggleWork = () => {
        this.setState({ relax: '#58CCED', time: 10*60 })
    }
    forceReset = () => {
        this.setState({
            relax: '#EA4444',
            time: 30*60,
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
                <View style={styles.btns}>
                    <TouchableOpacity style={styles.btn} onPress={this.toggleTimer}>
                        <Icon name="play-circle" size={30} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btn} onPress={this.forceReset}>
                        <Icon name='undo' size={30} color='white' />
                    </TouchableOpacity>
                </View>
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
    },
    btns: {
        flexDirection: 'row',
        margin: 'auto',
        width: '80%',
        justifyContent: 'center'
    },
    btn: {
        padding: 10,
        marginHorizontal: 5,
        borderColor: 'white',
        backgroundColor: 'rgba(230, 230, 230,0.24)',
        borderWidth: 3,
        borderRadius: 5
    }
});
