import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { Left, Right, Header, Icon, Body, List, H1, H2, ListItem } from 'native-base';

class GherkinScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={() => { this.props.navigation.openDrawer() }} />
                    </Left>
                    <Body>
                        <Text>
                            行为驱动测试简介
                        </Text>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <ScrollView>
                    <List>
                        <ListItem itemDivider>
                            <H2 style={{ color: "#1e90ff" }}>剧本文件编辑</H2>
                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'Gherkin1' }) }} >
                            <Left>
                                <Text>剧本编辑概述</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>

                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'Gherkin2' }) }} >
                            <Left>
                                <Text>可视模式</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>

                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'Gherkin3' }) }}>
                            <Left>
                                <Text>文本模式</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'Gherkin4' }) }}>
                            <Left>
                                <Text>场景编辑</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'Gherkin5' }) }}>
                            <Left>
                                <Text>步骤编辑</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'Gherkin6' }) }}>
                            <Left>
                                <Text>剧本示例表(Example)</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'Gherkin7' }) }}>
                            <Left>
                                <Text>标签和过滤</Text>
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

export default GherkinScreen;