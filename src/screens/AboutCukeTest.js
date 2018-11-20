import React, { Component } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import {Left,Right,Header,Icon} from 'native-base';

class AboutCukeTest extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={()=>{this.props.navigation.openDrawer()}}/>
                    </Left>

                    <Body>
                        <Text>
                            
                        </Text>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <ScrollView>
                    <List>
                        <ListItem itemDivider>
                            <H2 style={{ color: "#1e90ff" }}></H2>
                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'CukeTests1' }) }} >
                            <Left>
                                <Text></Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>

                        </ListItem>
                        <ListItem onPress={() => { this.props.navigation.navigate('myModel', { name: 'CukeTests2' }) }} >
                            <Left>
                                <Text></Text>
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

export default AboutCukeTest;