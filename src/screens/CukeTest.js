import React, { Component } from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import { Left, Right, Body, Header, Icon, List, ListItem, Separator, Button, H2 } from 'native-base';

class CukeTestScreen extends Component {
    render() {

        return (
            <View style={{ flex: 1 }}>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={() => { this.props.navigation.openDrawer() }} />
                    </Left>
                    <Body>
                        <Text>
                            CukeTest 概述
                        </Text>
                    </Body>
                    <Right></Right>
                </Header>
                <ScrollView>
                    <List>
                        <ListItem itemDivider>
                            <H2 style={{ color: "#1e90ff" }}>CukeTest 概述</H2>
                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'CukeTests1' }) }} >
                            <Left>
                                <Text>CukeTest 概述</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>

                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'CukeTests2' }) }} >
                            <Left>
                                <Text>CukeTest 演示脚本</Text>
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

export default CukeTestScreen;