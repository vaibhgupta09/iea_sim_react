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
const Dropdown = props => {
  const {title,hasBack,navigation,hasRight} = props;
  const [visible,setVisible]=React.useState(false);
  const onSelect = (picked) => {
    setVisible(false);
    props.onSelect(picked);
  }
  return (
    <View style={{height:'100%',width:'100%'}}>
 <Text style={{fontFamily: 'RobotoCondensed-Bold',color:colors.text_dark,fontSize: heightPercentageToDP('3.5%')}}>{props.title}</Text>
    <TouchableOpacity onPress={()=>setVisible(true)} style={{height:'90%',width:'100%',marginTop:10,justifyContent:'space-between',alignItems:'center',padding:10,borderRadius:15,backgroundColor:colors.card,flexDirection:'row'}}>
        <TextInput
        style={{width:'90%',fontSize:heightPercentageToDP('3.5%'),padding:10,height:'100%'}}
        placeholder={props.placeholder}
        editable={false}
        />
        <View style={{width:'10%',height:'100%'}}>
        <Icon name={'caret-down-outline'} style={{color:colors.dark}} size={heightPercentageToDP('5%')}/>
        </View>
    



    </TouchableOpacity>
    <ModalFilterPicker
          visible={visible}
          onSelect={onSelect}
          onCancel={()=>setVisible(false)}
          options={props.data}
        />
    </View>
  );
};

export default Dropdown;