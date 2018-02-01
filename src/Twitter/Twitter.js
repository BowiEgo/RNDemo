/*
 * Twitter
*/ 

'use strict'

import React, { Component } from 'react'
import { Image, StyleSheet, StatusBar, Text, View } from 'react-native'
// import Util from './utils'
// import TwitterTab from './TwitterTab'


class Twitter extends Component {
  componentDidMount () {
    StatusBar.setBarStyle(1)
  }

  render() {
    return (
      <View style={styles.twitterContainer}>
        <Text>
          TwitterTab
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  twitterContainer: {
    // width: Util.size.width,
    // height: Util.size.height,
    backgroundColor: '#000'
  }
})

export default Twitter
