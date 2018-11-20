import React, { Component } from 'react';
import { SafeAreaView, Text, View, Image, ScrollView } from 'react-native';
import { createDrawerNavigator, DrawerItems, createSwitchNavigator,createStackNavigator } from 'react-navigation'

import HomeScreen from './HomeScreen';
import CukeTestScreen from './CukeTest';
import GherkinScreen from './GherkinScreen';
import CodeEditScreen from './CodeEditScreen';
import ExecAndReportScreen from './ExecAndReportScreen';
import OtherThemeScreen from './OtherThemeScreen';
import CTManageScreen from './CTManageScreen';
import AboutCukeTest from './AboutCukeTest';
import ReadMeScreen from './ReadMeScreen';

import ModelScreen from '../details/ModelScreen';

const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }}>
      <Image source={require('../../assets/CT_logo.png')} style={{ width: 120, height: 120 }} />
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)


const AppDrawerNavigator = createDrawerNavigator({
  "行为驱动测试简介": HomeScreen,
  "CukeTest 概述": CukeTestScreen,
  "剧本文件编辑": GherkinScreen,
  "代码编辑": CodeEditScreen,
  "执行及测试报告": ExecAndReportScreen,
  "其它主题": OtherThemeScreen,
  "CukeTest操作指南": CTManageScreen,
  // "Cucumber.js参考": AboutCukeTest,
  // "附录": ReadMeScreen
},
  {
    contentComponent: CustomDrawerComponent,
    backBehavior:"initialRoute"
  })

const AppNavigator =  createStackNavigator({
  home: AppDrawerNavigator,
  myModel: ModelScreen
},{
  mode:'modal',
  headerMode:'none',
  headerBackTitleVisible:true
})

export default class MainScreen extends Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}



