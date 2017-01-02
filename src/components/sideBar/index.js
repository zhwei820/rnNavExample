
import React, { Component } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

// import { connect } from 'react-redux';

// import { closeDrawer } from '../../actions/drawer';
// import { actions } from 'react-native-navigation-redux-helpers';

import { Container, Content, Text, Icon, List, ListItem, Thumbnail } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

// import onPushPress from '../../actions/sideBarNav';

import styles from './style';

const singUp = require('../../../images/BG-signUp.png');

// const {
//   reset,
// } = actions;

export default class SideBar extends Component {

    static propTypes = {

    }

    onPushPress() {
        // this._toggleDrawer();
        this.props.navigator.showModal({
            title: "Modal",
            screen: "example.ModalScreen"
        });
    }

    _toggleDrawer() {
        this.props.navigator.toggleDrawer({
            to: 'closed',
            side: 'left',
            animated: true
        });
    }

    onReplaceTab2Press() {
        this._toggleDrawer();
        // push/pop navigator actions affect the navigation stack of the current screen only.
        // since side menu actions are normally directed at sibling tabs, push/pop will
        // not help us. the recommended alternative is to use deep links for this purpose
        this.props.navigator.handleDeepLink({
            link: "tab2/example.SecondTabScreen"
        });
    }

    render() {
        return (
            <Container>
                <Image source={require('../../../images/sid.png')} style={styles.background} >
                    <Content style={styles.drawerContent}>
                        <List foregroundColor={'white'} >
                            <ListItem button onPress={() => this.onReplaceTab2Press()} iconLeft style={styles.links} >
                                <Icon name='ios-grid-outline' />
                                <Text style={styles.linkText} >NEWS</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.onPushPress()} iconLeft style={styles.links} >
                                <Icon name='ios-keypad-outline' />
                                <Text style={styles.linkText}>CHANNELS</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.onPushPress()} iconLeft style={styles.links} >
                                <Icon name='ios-stats' />
                                <Text style={styles.linkText}> OVERVIEW</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.onPushPress()} iconLeft style={styles.links} >
                                <Icon name='ios-calendar-outline' />
                                <Text style={styles.linkText}>CALENDAR</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.onPushPress()} iconLeft style={styles.links} >
                                <Icon name='ios-timer-outline' />
                                <Text style={styles.linkText}>TIMELINE</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.onPushPress()} iconLeft style={styles.links} >
                                <Icon name='ios-person-outline' />
                                <Text style={styles.linkText}> PROFILE</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.onPushPress()} iconLeft style={styles.links} >
                                <Icon name='ios-grid' />
                                <Text style={styles.linkText}>WIDGETS</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.onPushPress()} iconLeft style={styles.links}>
                                <Icon name='ios-settings-outline' />
                                <Text style={styles.linkText}>SETTINGS</Text>
                            </ListItem>
                            <ListItem button onPress={() => this.onPushPress()} iconLeft style={styles.links} >
                                <Icon name='ios-paper-outline' />
                                <Text style={styles.linkText}>FEEDBACK</Text>
                            </ListItem>
                        </List>

                        <View style={styles.logoutContainer}>
                            <View style={styles.logoutbtn} foregroundColor={'white'}>
                                <Grid>
                                    <Col>
                                        <TouchableOpacity onPress={() => this.onPushPress()} style={{ alignSelf: 'flex-start' }}>
                                            <Text style={{ fontWeight: 'bold', color: '#fff' }}>LOG OUT</Text>
                                            <Text note style={{ color: '#fff' }} >Kumar Sanket</Text>
                                        </TouchableOpacity>
                                    </Col>
                                    <Col>
                                        <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={() => this.onPushPress()}>
                                            <Thumbnail source={require('../../../images/contacts/sanket.png')} style={styles.profilePic} />
                                        </TouchableOpacity>
                                    </Col>
                                </Grid>
                            </View>
                        </View>
                    </Content>
                </Image>
            </Container>
        );
    }
}

// function bindAction(dispatch) {
//   return {
//     onPushPress: (route, homeRoute) => dispatch(onPushPress(route, homeRoute)),
//     reset: key => dispatch(closeDrawer(),reset([{ key: 'login' }], key, 0))
//   };
// }

// const mapStateToProps = state => ({
//   navigation: state.cardNavigation,
// });

// export default connect(mapStateToProps, bindAction)(SideBar);
