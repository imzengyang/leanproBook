import React, { Component } from 'react';
import { SafeAreaView, View, Text,ScrollView } from 'react-native';
import {Left,Right,Header,Icon,Body,List,ListItem,H2} from 'native-base';

class ExexAndReportScreen extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={()=>{this.props.navigation.openDrawer()}}/>
                    </Left>

                    <Body>
                        <Text>
                            执行及测试报告
                        </Text>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <ScrollView>
                    <List>
                        <ListItem itemDivider>
                            <H2 style={{ color: "#1e90ff" }}>执行及测试报告</H2>
                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'ExecAndReport1' }) }} >
                            <Left>
                                <Text>执行概述</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>

                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'ExecAndReport2' }) }} >
                            <Left>
                                <Text>配置文件编辑</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>

                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'ExecAndReport3' }) }} >
                            <Left>
                                <Text>执行报告</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>

                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'ExecAndReport4' }) }} >
                            <Left>
                                <Text>命令行界面</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>

                        </ListItem>

                    </List>
                </ScrollView>
            </View>
        );
    }
}

export default ExexAndReportScreen;