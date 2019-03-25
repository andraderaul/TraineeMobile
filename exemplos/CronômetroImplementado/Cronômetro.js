import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import moment from "moment";

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class Master extends Component {

  state = {
    startOne: true,
    startTwo: false,
  }

  componentDidMount = () => {
    setInterval(this.toggleCounters, 5000)
  }

  toggleCounters = () => {
    this.setState({
      startOne: !this.state.startOne,
      startTwo: !this.state.startTwo,
    })
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
        <Cronometro start={this.state.startOne}/>
        <Cronometro start={this.state.startTwo}/>
      </View>
    )
  }
}


class Cronometro extends Component {

  constructor() {
    super()
    this.interval = null
  }

  static defaultProps = {
    start: false,
  }

  state = {
    time: 0,
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.start) {
      this.interval = setInterval(this.increment, 1000)
    } else {
      clearInterval(this.interval)
      this.interval = null
    }
  }

  increment = () => {
    this.setState({ time: this.state.time + 1 })
  }

  clear = () => {
    this.setState({ time: 0 })
  }

  toggleCounter = () => {
    if (this.interval != null) {
      clearInterval(this.interval)
      this.interval = null
    } else {
      this.interval = setInterval(this.increment, 1000)
    }
  }

  padStart = (str) => {
    return String("00" + str).slice(-2)
  }

  render() {
    time = moment.duration(this.state.time, 's')
    return (
      <View style={styles.container}>
        
        <View style={styles.digitContainer}>
          <Text style={styles.digit}>{this.padStart(time.hours())}</Text>
          <Text style={[styles.divider, styles.digit]}>:</Text>
          <Text style={styles.digit}>{this.padStart(time.minutes())}</Text>
          <Text style={[styles.divider, styles.digit]}>:</Text>
          <Text style={styles.digit}>{this.padStart(time.seconds())}</Text>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={this.toggleCounter}>
            {this.interval ? 
            <Icon name="md-pause" style={styles.icon}/> : 
            <Icon name="md-play" style={styles.icon}/>}
          </TouchableOpacity>

          <TouchableOpacity onPress={this.clear}>
            <Icon name="md-refresh" style={[styles.icon, styles.leftMargin]}/> 
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}
