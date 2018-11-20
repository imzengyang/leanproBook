import React, { Component } from 'react';
import { SafeAreaView, View, Text, ScrollView } from 'react-native';
import { Left, Right, Header, Body, Icon, H1, H2, H3, List, ListItem, Button } from 'native-base';



export default class HomeScreen extends Component {
    
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
                    <H2 style={{ color: "#1e90ff" }}>行为驱动测试</H2>
                </ListItem>
                <ListItem onPress={()=>{this.props.navigation.navigate('myModel',{name: 'Preface'})}} >
                    <Left>
                        <Text>关于本书</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>

                </ListItem>
                <ListItem onPress={()=>{this.props.navigation.navigate('myModel',{name: 'WhyBdd'})}} >
                    <Left>
                        <Text>为什么要行为驱动开发</Text>
                    </Left>
                    <Right>
                        <Icon name="arrow-forward" />
                    </Right>

                </ListItem>
                <ListItem onPress={()=>{this.props.navigation.navigate('myModel',{name: 'HowBdd'})}}>
                    <Left>
                        <Text>Cucumber如何工作</Text>
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

