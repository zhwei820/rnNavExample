import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

// collapsingToolBarImage = require('../../img/gyro_header.jpg')
// collapsingToolBarImage: "https://static.wixstatic.com/media/ec14061b42d1dc5b809367f7cfda8eff.jpg/v1/fill/w_1002,h_499,q_80/ec14061b42d1dc5b809367f7cfda8eff.webp",

export default class ThirdTabScreen extends Component {
  static navigatorStyle = {
    navBarBackgroundColor: '#4dbce9',
    navBarTextColor: '#ffff00',
    navBarSubtitleTextColor: '#ff0000',
    navBarButtonColor: '#ffffff',
    statusBarTextColorScheme: 'light',
    tabBarBackgroundColor: '#4dbce9',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ffff00',
    drawUnderTabBar: true,
    collapsingToolBarImage: 'https://static.wixstatic.com/media/ec14061b42d1dc5b809367f7cfda8eff.jpg/v1/fill/w_1002,h_499,q_80/ec14061b42d1dc5b809367f7cfda8eff.webp',
    collapsingToolBarCollapsedColor: '#4dbce9',

  };

  static navigatorButtons = {
    rightButtons: [
      {
        title: 'Edit',
        id: 'edit'
      },
      {
        icon: require('../../img/navicon_add.png'),
        id: 'add'
      }
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      navBarVisibility: 'shown'
    }
  }
  render() {
    return (
        <ScrollView style={styles.container}>
          <View style={{flex: 1, backgroundColor: '#ffffff'}}>
            <Text style={styles.button}>Row 0</Text>
            <Text style={styles.button}>Row 1</Text>
            <Text style={styles.button}>Row 2</Text>
            <Text style={styles.button}>Row 3</Text>
            <Text style={styles.button}>Row 4</Text>
            <Text style={styles.button}>Row 5</Text>
            <Text style={styles.button}>Row 6</Text>
            <Text style={styles.button}>Row 7</Text>
            <Text style={styles.button}>Row 8</Text>

            <TouchableOpacity onPress={ this.onPushPress.bind(this) }>
              <Text style={styles.button}>Push Plain Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ this.onPushStyledPress.bind(this) }>
              <Text style={styles.button}>Push Styled Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ this.onPushStyled2Press.bind(this) }>
              <Text style={styles.button}>Push Styled Screen 2</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ this.onModalPress.bind(this) }>
              <Text style={styles.button}>Show Modal Screen</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={ this.onToggleNavBarPressed.bind(this) }>
              <Text style={styles.button}>Toggle Navigation Bar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
    );
  }
  onPushPress() {
    this.props.navigator.push({
      title: "More",
      screen: "example.PushedScreen"
    });
  }
  onPushStyledPress() {
    this.props.navigator.push({
      title: "Styled",
      screen: "example.StyledScreen"
    });
  }
  onPushStyled2Press () {
    this.props.navigator.push({
      title: "Styled",
      titleImage: require('../../img/two.png'),
      screen: "example.StyledScreen"
    });
  }
  onModalPress() {
    this.props.navigator.showModal({
      title: "Modal",
      screen: "example.ModalScreen"
    });
  }

  onToggleNavBarPressed() {
    this.state.navBarVisibility = (this.state.navBarVisibility === 'shown') ? 'hidden' : 'shown';
    this.props.navigator.toggleNavBar({
      to: this.state.navBarVisibility,
      animated: true  // true is default
    });
  }

  componentDidUpdate() {
    console.error('this is an error: ' + Math.random());
    this.state.navBarState = 'shown';
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#eeeeee'
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop:30,
    color: 'blue'
  }
});
