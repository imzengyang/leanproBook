import React, { Component } from 'react';
import { SafeAreaView, View, Text,ScrollView} from 'react-native';
import { Left, Right, Body, Header, Icon, List, ListItem, H2 } from 'native-base';


class CodeEditScreen extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={()=>{this.props.navigation.openDrawer()}}/>
                    </Left>

                    <Body>
                        <Text>
                            代码编辑
                        </Text>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <ScrollView>
                    <List>
                        <ListItem itemDivider>
                            <H2 style={{ color: "#1e90ff" }}>代码编辑</H2>
                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'CodeEdit1' }) }} >
                            <Left>
                                <Text>代码/剧本匹配</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>

                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'CodeEdit2' }) }} >
                            <Left>
                                <Text>NPM 包</Text>
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

export default CodeEditScreen;