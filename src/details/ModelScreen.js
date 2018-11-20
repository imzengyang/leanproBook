import React, { Component } from 'react';
import { Button, ScrollView, Dimensions, Image,SafeAreaView } from 'react-native';
import { Container, Body, Content, H1, H2, H3, Text, Label, Separator, View } from "native-base";

import resolveAssetSource from "resolveAssetSource";
const win = Dimensions.get('window')
const w = win.width - 40;
const h = win.height;

import Prefacedata from '../data/Preface';
import WhyBddData from '../data/WhyBdd';
import HowBddData from '../data/HowBdd';
import CukeTest1Data from '../data/cuketest/cuketest1'
import CukeTest2Data from "../data/cuketest/cuketest2";

import Gherkin1Data from '../data/gherkin/gherkin1'
import Gherkin2Data from '../data/gherkin/gherkin2'
import Gherkin3Data from '../data/gherkin/gherkin3'
import Gherkin4Data from '../data/gherkin/gherkin4'
import Gherkin5Data from '../data/gherkin/gherkin5'
import Gherkin6Data from '../data/gherkin/gherkin6'
import Gherkin7Data from '../data/gherkin/gherkin7';


import CodeEdit1Data from '../data/code/codeedit1';
import CodeEdit2Data from "../data/code/codeedit2";

import ExecAndReport1Data from '../data/exec/execandreport1';
import ExecAndReport2Data from '../data/exec/execandreport2';
import ExecAndReport3Data from '../data/exec/execandreport3';
import ExecAndReport4Data from '../data/exec/execandreport4';

import OtherThemeData1 from "../data/othertheme/othertheme1";
import OtherThemeData2 from "../data/othertheme/othertheme2";
import OtherThemeData3 from "../data/othertheme/othertheme3";
import OtherThemeData4 from "../data/othertheme/othertheme4";
import OtherThemeData5 from "../data/othertheme/othertheme5";
import OtherThemeData6 from "../data/othertheme/othertheme6";
import OtherThemeData7 from "../data/othertheme/othertheme7";
import OtherThemeData8 from "../data/othertheme/othertheme8";

import CTManageData1 from '../data/ctmanage/ctmanage1';
import CTManageData2 from '../data/ctmanage/ctmanage2';
import CTManageData3 from '../data/ctmanage/ctmanage3';
import CTManageData4 from '../data/ctmanage/ctmanage4';
import CTManageData5 from '../data/ctmanage/ctmanage5';



export default class ModelScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }



  componentWillMount() {
    console.log("this.props", this.props.navigation.getParam("name"))
    let file = this.props.navigation.getParam("name");
    switch (file) {
      case "Preface":
        this.setState({
          data: Prefacedata
        })
        break;
      case "WhyBdd":
        this.setState({
          data: WhyBddData
        })
        break;
      case "HowBdd":
        this.setState({
          data: HowBddData
        })
        break;
      case "CukeTests1":
        this.setState({
          data: CukeTest1Data
        })
        break;
      case "CukeTests2":
        this.setState({
          data: CukeTest2Data
        })
        break;
      case "Gherkin1":
        this.setState({
          data: Gherkin1Data
        })
        break;
      case "Gherkin2":
        this.setState({
          data: Gherkin2Data
        })
        break;
      case "Gherkin3":
        this.setState({
          data: Gherkin3Data
        })
        break;
      case "Gherkin4":
        this.setState({
          data: Gherkin4Data
        })
        break;
      case "Gherkin5":
        this.setState({
          data: Gherkin5Data
        })
        break;
      case "Gherkin6":
        this.setState({
          data: Gherkin6Data
        })
        break;
      case "Gherkin7":
        this.setState({
          data: Gherkin7Data
        })
        break;
      case "CodeEdit1":
        this.setState({
          data: CodeEdit1Data
        })
        break;
      case "CodeEdit2":
        this.setState({
          data: CodeEdit2Data
        })
        break;
      case "ExecAndReport1":
        this.setState({
          data: ExecAndReport1Data
        })
        break;
      case "ExecAndReport2":
        this.setState({
          data: ExecAndReport2Data
        })
        break;
      case "ExecAndReport3":
        this.setState({
          data: ExecAndReport3Data
        })
        break;
      case "ExecAndReport4":
        this.setState({
          data: ExecAndReport4Data
        })
        break;
      case "OtherTheme1":
        this.setState({
          data: OtherThemeData1
        })
        break;
      case "OtherTheme2":
        this.setState({
          data: OtherThemeData2
        })
        break;
      case "OtherTheme3":
        this.setState({
          data: OtherThemeData3
        })
        break;
      case "OtherTheme4":
        this.setState({
          data: OtherThemeData4
        })
        break;
      case "OtherTheme5":
        this.setState({
          data: OtherThemeData5
        })
        break;
      case "OtherTheme6":
        this.setState({
          data: OtherThemeData6
        })
        break;
      case "OtherTheme7":
        this.setState({
          data: OtherThemeData7
        })
        break;
      case "OtherTheme8":
        this.setState({
          data: OtherThemeData8
        })
        break;
      case "CTmanage5":
        this.setState({
          data: CTManageData5
        })
        break;
      case "CTmanage1":
        this.setState({
          data: CTManageData1
        })
        break;
      case "CTmanage2":
        this.setState({
          data: CTManageData2
        })
        break;
      case "CTmanage3":
        this.setState({
          data: CTManageData3
        })
        break;
      case "CTmanage4":
        this.setState({
          data: CTManageData4
        })
        break;

      default:
        this.setState({
          data: HowBddData
        })
        break;
    }
  }

  renderContent() {

    let data = this.state.data;
    let content = data.content;
    return content.map((val, key) => {
      if (val.type === "Text") {
        return <Text key={key} style={{ paddingBottom: 18, lineHeight: 22 }}>{`\t`} {val.content}</Text>
      } else if (val.type === "Image") {
        if (val.position !== 'inline') {
          let imgSrc = resolveAssetSource(val.Uri);
          let imgwidth = imgSrc.width;
          let height = imgSrc.height;
          let h = Math.floor(w / imgwidth * height)
          return <Image key={key} style={{ marginBottom: 20 }} source={val.Uri} width={w} height={h} resizeMode={"contain"} />
        }

      } else if (val.type === "H2") {
        return <H2 key={key} style={{ paddingBottom: 18, lineHeight: 32 }}>{`\t`} {val.content}</H2>
      } else if (val.type === "H3") {
        return <H3 key={key} style={{ paddingBottom: 18, lineHeight: 32 }}>{`\t`} {val.content}</H3>
      }
      else {
        return <Text key={key} style={{ paddingBottom: 18, lineHeight: 22 }}>{`\t`} {val.content}</Text>
      }

    })

  }

  render() {
    return (
      <SafeAreaView>
      <ScrollView style={{ paddingTop: 0 }}>
        
        <View style={{ paddingLeft: 20, paddingRight: 20 }}>
        
         
          <H1 style={{ flex: 1, alignItems: 'center', paddingBottom: 30, paddingTop: 30 }} >{this.state.data.title}</H1>
          {this.renderContent()}

          <Button
            onPress={() => this.props.navigation.goBack()}
            title="Dismiss"
          />
          </View>
      </ScrollView>
      </SafeAreaView>
      

    );
  }
}