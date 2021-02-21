import React from 'react';
import { Image, TouchableOpacity, View,ImageBackground,Text,StyleSheet,TouchableHighlight } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import bg from '../../assets/images/bg.png';
import logo from '../../assets/images/logo.png';
import { SwipeListView } from 'react-native-swipe-list-view';
import colors from '../../helpers/colors';
import Header from '../../component/header';
import Icon from 'react-native-vector-icons/Feather';
import Dropdown from '../../component/dropdown';
import TextField from '../../component/textfield';
const options = [
    {
      key: 'kenya',
      label: 'Kenya',
    },
    {
      key: 'uganda',
      label: 'Uganda',
    },
    {
      key: 'libya',
      label: 'Libya',
    },
    {
      key: 'morocco',
      label: 'Morocco',
    },
    {
      key: 'estonia',
      label: 'Estonia',
    },
  ];
export default class AddIncident extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
         <View style={styles.container}>
          <Header navigation={this.props.navigation} hasBack title={'Add Incident'}/>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%',padding:25}}>
              <View style={{width:'48%',height:hp('9%')}}>
              <Dropdown data={options} onSelect={(e)=>console.log(e)} title={"JOB *"} placeholder={"Make a selection"}/>
              </View>
              <View style={{width:'48%',height:hp('9%')}}>
              <Dropdown data={options} onSelect={(e)=>console.log(e)} title={"COMPANY *"} placeholder={"Make a selection"}/>
              </View>

          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%',padding:25}}>
              <View style={{width:'48%',height:hp('9%')}}>
              <Dropdown data={options} onSelect={(e)=>console.log(e)} title={"STATE *"} placeholder={"Make a selection"}/>
              </View>
              <View style={{width:'48%',height:hp('9%')}}>
              <Dropdown data={options} onSelect={(e)=>console.log(e)} title={"PHASE CODE *"} placeholder={"Make a selection"}/>
              </View>

          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%',padding:25}}>
              <View style={{width:'48%',height:hp('9%')}}>
              <TextField value={''} onChange={(e)=>console.log(e)} title={"INCIDENT DATE & TIME *"} placeholder={"Make a selection"}/>
              </View>
              <View style={{width:'48%',height:hp('9%')}}>
              <TextField value={''} onChange={(e)=>console.log(e)} title={"INCIDENT REPORTED *"} placeholder={"Make a selection"}/>
              </View>

          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%',padding:25}}>
              <View style={{width:'48%',height:hp('9%')}}>
              <TextField value={''} onChange={(e)=>console.log(e)} nonEdit title={"CREATED BY *"} placeholder={"Make a selection"}/>
              </View>
              <View style={{width:'48%',height:hp('9%')}}>
              <TextField value={''} onChange={(e)=>console.log(e)} title={"REPORTED BY *"} placeholder={"Make a selection"}/>
              </View>

          </View>

         
         
        </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
   
});