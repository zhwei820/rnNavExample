
import React, { Component } from 'react';
import { Image, Platform } from 'react-native';
// import { connect } from 'react-redux';
// import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Content, Text, InputGroup, Input, Button, Icon, View } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import login from './login-theme';
import styles from './styles';

// const {
//   replaceAt,
//   pushRoute
// } = actions;

const bg = require('../../../images/BG.png');
const logo = require('../../../images/logo.png');

import {Navigation} from 'react-native-navigation';

import {createTabs} from '../../createTabs';


export default class Login extends Component {

  static propTypes = {
 
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.constructor.childContextTypes = {
      theme: React.PropTypes.object,
    };
  }

  onPushPress() {
    // this.props.navigator.push({
    //   title: "More",
    //   screen: "example.PushedScreen"
    // });


    Navigation.startTabBasedApp({
      tabs: createTabs(),
      appStyle: {
        tabBarBackgroundColor: '#0f2362',
        tabBarButtonColor: '#ffffff',
        tabBarSelectedButtonColor: '#63d7cc'
      },
      drawer: {
        left: {
          screen: 'example.SideMenu'
        }
      }
    });


  }

  render() {
    return (
      <Container>
        <Content theme={login} scrollEnabled={false}>
          <Image source={bg} style={styles.background} >
            <Image source={logo} style={Platform.OS === 'android' ? styles.aShadow : styles.iosShadow} />

            <View style={styles.bg}>
              <InputGroup borderType="rounded" style={[styles.inputGrp, { borderWidth: 0, paddingLeft: 15 }]}>
                <Icon name="ios-person-outline" />
                <Input
                  placeholder="Username"
                  onChangeText={username => this.setState({ username })}
                  style={styles.input}
                />
              </InputGroup>

              <InputGroup borderType="rounded" style={[styles.inputGrp, { borderWidth: 0, paddingLeft: 15 }]}>
                <Icon name="ios-unlock-outline" />
                <Input
                  placeholder="Password"
                  secureTextEntry
                  onChangeText={password => this.setState({ password })}
                  style={styles.input}
                />
              </InputGroup>

              <Button
                rounded primary block large
                style={styles.loginBtn}
                textStyle={Platform.OS === 'android' ? { marginTop: -5, fontSize: 16 } : { fontSize: 16, marginTop: -5, fontWeight: '900' }}
                onPress={() => this.onPushPress()}
              >
                  Get Started
              </Button>

              <View style={styles.otherLinksContainer}>
                <Grid>
                  <Col>
                    <Button transparent style={{ alignSelf: 'flex-start' }} onPress={() => this.pushRoute('signUp')}>
                      <Text style={styles.helpBtns}>
                          Create Account
                      </Text>
                    </Button>
                  </Col>
                  <Col>
                    <Button transparent style={{ alignSelf: 'flex-end' }} onPress={() => this.pushRoute('needhelp')}>
                      <Text style={styles.helpBtns}>
                          Need Help?
                      </Text>
                    </Button>
                  </Col>
                </Grid>
              </View>
            </View>

          </Image>

        </Content>
      </Container>
    );
  }
}


// function bindActions(dispatch) {
//   return {
//     replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
//     pushRoute: (route, key) => dispatch(pushRoute(route, key)),
//   };
// }

// const mapStateToProps = state => ({
//   navigation: state.cardNavigation,
// });

// export default connect(mapStateToProps, bindActions)(Login);
