import Config from '../../config'

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    ListView,
    TouchableOpacity,
} from 'react-native';

import { Grid, Col, Row } from 'react-native-easy-grid';
import { Button, Icon } from 'native-base';

import { PullList } from 'react-native-pull';

import styles from './styles';


export default class extends Component {

    constructor(props) {
        super(props);
        this.dataSource = [{
            id: 0,
            title: `this is the first.`,
        }];
        this.state = {
            list: (new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })).cloneWithRows(this.dataSource),
        };
        this.renderHeader = this.renderHeader.bind(this);
        this.renderRow = this.renderRow.bind(this);
        this.renderFooter = this.renderFooter.bind(this);
        this.loadMore = this.loadMore.bind(this);
        // this.loadMore();
    }


    onStoryPress() {
        this.props.navigator.push({
            title: "More",
            screen: "example.StoryScreen"
        });
    }


    onPullRelease(resolve) {
        //do something
        setTimeout(() => {
            resolve();
        }, 3000);
    }

    topIndicatorRender(pulling, pullok, pullrelease) {
        return <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60 }}>
            <ActivityIndicator size="small" color="gray" />
            {pulling ? <Text>当前PullList状态: pulling...</Text> : null}
            {pullok ? <Text>当前PullList状态: pullok......</Text> : null}
            {pullrelease ? <Text>当前PullList状态: pullrelease......</Text> : null}
        </View>;
    }

    render() {
        return (
            <View style={styles.container}>
                <PullList
                    style={{}}
                    onPullRelease={this.onPullRelease} topIndicatorRender={this.topIndicatorRender} topIndicatorHeight={60}
                    renderHeader={this.renderHeader}
                    dataSource={this.state.list}
                    pageSize={5}
                    initialListSize={5}
                    renderRow={this.renderRow}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={60}
                    renderFooter={this.renderFooter}
                    />
            </View>
        );
    }

    renderHeader() {
        return (
            <View style={{ height: 50, backgroundColor: '#eeeeee', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontWeight: 'bold' }}>This is header</Text>
            </View>
        );
    }

    renderRow(item, sectionID, rowID, highlightRow) {
        return (

            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.onStoryPress('story')}>
                <View style={styles.newsContentWrap}>
                    <Text numberOfLines={2} style={styles.newsHeader}>{item.title}</Text>
                    <Grid style={styles.newsContent}>
                        <Col style={{ flexDirection: 'row' }}>
                            <TouchableOpacity>
                                <Text style={styles.newsLink}>SKY.com</Text>
                            </TouchableOpacity>
                            <Icon name='ios-time-outline' style={styles.timeIcon} />
                            <Text style={styles.newsLink}>Dec 17, 2015</Text>
                        </Col>
                    </Grid>
                </View>
            </TouchableOpacity>
        );
    }

    renderFooter() {
        if (this.state.nomore) {
            return null;
        }
        return (
            <View style={{ height: 30 }}>
                <ActivityIndicator />
            </View>
        );
    }

    fetchData() {
        var REQUEST_URL = Config.BaseUrl + "";
        console.log(REQUEST_URL)
        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                for (var i = 0; i < 100; i++) {
                    this.dataSource.push({
                        id: i + 1,
                        title: `this is ${i}`,
                    })
                }
            })
            .done();
    }

    loadMore() {
        this.dataSource.push({
            id: 0,
            title: `begin to create data ...`,
        });
        this.fetchData()
        this.dataSource.push({
            id: 6,
            title: `finish create data ...`,
        });

        this.setState({
            list: this.state.list.cloneWithRows(this.dataSource)
        });

        // setTimeout(() => {
        //     this.setState({
        //         list: this.state.list.cloneWithRows(this.dataSource)
        //     });
        // }, 1000);
    }

}