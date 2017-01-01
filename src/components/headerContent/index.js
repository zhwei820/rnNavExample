
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Icon, View, Button } from 'native-base';

import styles from './styles';


const headerLogo = require('../../../images/Header-Logo.png');

export default class HeaderContent extends Component {

  static propTypes = {

  }


  render() {
    return (
      <View style={styles.header} >
        <View style={styles.rowHeader}>
          <Button transparent style={styles.btnHeader} onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Image source={headerLogo} style={styles.imageHeader} />
          <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
            <Icon name="ios-menu" />
          </Button>
        </View>
      </View>
    );
  }
}
