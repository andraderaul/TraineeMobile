import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class Cronometro extends Component {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.digitContainer}>
          <Text style={styles.digit}>{}</Text>
          <Text style={[styles.divider, styles.digit]}>:</Text>
          <Text style={styles.digit}>{}</Text>
          <Text style={[styles.divider, styles.digit]}>:</Text>
          <Text style={styles.digit}>{}}</Text>
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={this.toggleCounter}>
            <Icon name="md-pause" style={styles.icon}/> 
            <Icon name="md-play" style={styles.icon}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.clear}>
            <Icon name="md-refresh" style={[styles.icon, styles.leftMargin]}/> 
          </TouchableOpacity>
        </View>

      </View>
    )
  }
}
