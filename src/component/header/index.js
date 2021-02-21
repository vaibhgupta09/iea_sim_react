import React, {memo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  StatusBar
} from 'react-native';


import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { heightPercentageToDP } from 'react-native-responsive-screen';
import colors from '../../helpers/colors';
const Header = props => {
  const {title,hasBack,navigation,hasRight} = props;
  const onBack =()=>{
    navigation.goBack();
  }
  return (
    <View style={{width:'100%',flexDirection:'row',marginTop:20,height:heightPercentageToDP('13%'),padding:15,backgroundColor:colors.dark,alignItems:'center'}}>
        <View style={{width:'10%',height:'100%',justifyContent:'center',alignItems:'center'}}>
            {props.hasDrawer &&
            <TouchableOpacity>
                <Icon name={"menu"} size={heightPercentageToDP('8%')} style={{color:'white'}}/>
            </TouchableOpacity>
            }
             {props.hasBack &&
            <TouchableOpacity onPress={()=>onBack()}>
                <Icon name={"arrow-back"} size={heightPercentageToDP('8%')} style={{color:'white'}}/>
            </TouchableOpacity>
            }
        </View>
        <View style={{width:'80%',height:'100%',justifyContent:'center'}}>
        <Text style={{fontFamily: 'RobotoCondensed-Bold',color:'white',fontSize: heightPercentageToDP('5%'),}}>{props.title}</Text>
        </View>
        <View style={{width:'10%',height:'100%',justifyContent:'center',alignItems:'center'}}>
            {props.hasFilter &&
            <TouchableOpacity>
                <FontAwesome name={"filter"} size={heightPercentageToDP('6%')} style={{color:'white'}}/>
            </TouchableOpacity>
            }
        </View>

    </View>
  );
};

export default Header;