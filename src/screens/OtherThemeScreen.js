import React, { Component } from 'react';
import { SafeAreaView, View, Text,ScrollView } from 'react-native';
import {Left,Right,Header,Icon,Body,List,ListItem,H2,H1,H3} from 'native-base';

class OtherThemeScreen extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={()=>{this.props.navigation.openDrawer()}}/>
                    </Left>

                    <Body>
                        <Text>
                        其它主题
                        </Text>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <ScrollView>
                    <List>
                        <ListItem itemDivider>
                            <H2 style={{ color: "#1e90ff" }}>其它主题</H2>
                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'OtherTheme1' }) }} >
                            <Left>
                                <Text>CukeTest演示</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>

                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'OtherTheme2' }) }} >
                            <Left>
                                <Text>常见问题(FAQ)</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>

                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'OtherTheme3' }) }} >
                            <Left>
                                <Text>许可</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>

                        </ListItem>
                        {/* <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'OtherTheme4' }) }} >
                            <Left>
                                <Text>安装许可证书</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>

                        </ListItem> */}
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'OtherTheme5' }) }} >
                            <Left>
                                <Text>新建项目</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>

                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'OtherTheme6' }) }} >
                            <Left>
                                <Text>设置</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>

                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'OtherTheme7' }) }} >
                            <Left>
                                <Text>工具栏</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>

                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'OtherTheme8' }) }} >
                            <Left>
                                <Text>问题诊断</Text>
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

export default OtherThemeScreen;