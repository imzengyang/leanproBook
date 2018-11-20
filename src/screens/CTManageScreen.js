import React, { Component } from 'react';
import { SafeAreaView, View, Text,ScrollView } from 'react-native';
import {Left,Right,Header,Icon,Body,List,ListItem,H1,H2,H3} from 'native-base';

class CTManageScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={() => { this.props.navigation.openDrawer() }} />
                    </Left>
                    <Body>
                        <Text>
                        CukeTest 操作指南
                        </Text>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <SafeAreaView>
                <ScrollView>
                    <List>
                        <ListItem itemDivider>
                            <H2 style={{ color: "#1e90ff" }}>CukeTest 操作指南</H2>
                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'CTmanage1' }) }} >
                            <Left>
                                <Text>简单的测试项目</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>

                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'CTmanage2' }) }} >
                            <Left>
                                <Text>创建并运行API自动化测试项目</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>

                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'CTmanage3' }) }}>
                            <Left>
                                <Text>创建Web自动化测试项目</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'CTmanage4' }) }}>
                            <Left>
                                <Text>编辑feature文件</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'CTmanage5' }) }}>
                            <Left>
                                <Text>编辑JavaScript文件</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        
                    </List>
                </ScrollView>
                </SafeAreaView>
            </View>
        );
    }
}

export default CTManageScreen;