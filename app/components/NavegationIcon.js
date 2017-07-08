import React, { Component, PropTypes } from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';


import AssetMap from '../config/AssetMap';

const hitSlop = {
  top: 10,
  bottom: 10,
  left: 10,
  right: 10,
}

export default class NavigationIcon extends Component {



  render() {

    return (

      <TouchableOpacity
        style={styles.container}
        hitSlop={hitSlop}
      >
        <Image
          style={styles.icon}
           source={require('../img/icon-hamburger.png')}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    top: 36,
    left: 22,
  },
  icon: {
    width: 21,
    height: 21,
  },
})