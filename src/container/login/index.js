import React from 'react';
import { Image, TouchableOpacity, View,ImageBackground,Text } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import bg from '../../assets/images/bg.png';
import logo from '../../assets/images/logo.png';

import colors from '../../helpers/colors';
export default class Login extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = async () => {
        // try {
        //     let token = await APIServices.getLoginToken()
        //     if (token) {
        //         //this.props.navigation.navigate('AddAccident')
        //         this.props.navigation.navigate('List')
        //     }
        // } catch (error) {

        // }
    };


    render() {

        return (
            <ImageBackground source={bg} style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Image source={logo} style={{ height: hp('25%'), width: wp('25%'),resizeMode:'contain' }} />
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')} style={{width:wp('60%'),height:hp('8%'),marginTop:hp('5%'),backgroundColor:colors.iea_blue,borderRadius:hp('25%'),justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontFamily: 'RobotoCondensed-Bold',color:'white',fontSize: wp('5%'),}}>Login</Text>

                </TouchableOpacity>
            </ImageBackground>

        )
    }
}