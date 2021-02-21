import React, {memo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  TextInput
} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ModalFilterPicker from 'react-native-modal-filter-picker'

import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../../helpers/colors';
const TextField = props => {
  const {title,hasBack,navigation,hasRight} = props;
  const [visible,setVisible]=React.useState(false);

  return (
    <View style={{height:'100%',width:'100%'}}>
 <Text style={{fontFamily: 'RobotoCondensed-Bold',color:colors.text_dark,fontSize: heightPercentageToDP('3.5%')}}>{props.title}</Text>
    <View style={{height:'90%',borderWidth:props.nonEdit?2:0,borderColor:props.nonEdit?colors.iea_blue:null,width:'100%',marginTop:10,justifyContent:'space-between',alignItems:'center',padding:10,borderRadius:15,backgroundColor:colors.card,flexDirection:'row'}}>
        <TextInput
        style={{width:'90%',fontSize:heightPercentageToDP('3.5%'),padding:10,height:'100%'}}
        placeholder={props.placeholder}
        value={props.value}
        editable={props.nonEdit?false:true}
        onChange={(e)=>props.onChange(e)}
        />
    

    </View>
    </View>
  );
};

export default TextField;