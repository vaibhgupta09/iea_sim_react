import React from 'react';
import { Image, TouchableOpacity, View,ImageBackground,Text,StyleSheet,TouchableHighlight } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import bg from '../../assets/images/bg.png';
import logo from '../../assets/images/logo.png';
import { SwipeListView } from 'react-native-swipe-list-view';
import colors from '../../helpers/colors';
import Header from '../../component/header';
import Icon from 'react-native-vector-icons/Feather';

export default class Home extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    renderItem = data => (
        <TouchableHighlight
            onPress={() => console.log('You touched me')}
            style={styles.rowFront}
            underlayColor={'#AAA'}
        >
           <>
            <View style={{flexDirection:'row',width:'90%',justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{fontFamily: 'RobotoCondensed-Regular',color:'green',fontSize: hp('2%'),}}>Status: Synced Record</Text>

                <Text style={{fontFamily: 'RobotoCondensed-Regular',color:colors.text_dark,fontSize: hp('2%'),}}>Status: SAM ID:2344545HT47487584</Text>
            </View>
            <View style={{flexDirection:'row',width:'90%',marginTop:15,justifyContent:'space-between',alignItems:'center'}}>
                <Text style={{fontFamily: 'RobotoCondensed-Bold',color:colors.text_dark,fontSize: hp('2.5%'),}}>Created By:IEC SAM</Text>

                <Text style={{fontFamily: 'RobotoCondensed-Regular',color:colors.text_light,fontSize: hp('2%'),}}>Incident Date:Jan-15-2020 11:57</Text>
            </View>
            
            </>
           
        </TouchableHighlight>
    );

    renderHiddenItem = (data, rowMap) => (
        <View style={styles.rowBack}>
           
           
           <TouchableOpacity
                style={[styles.backRightBtn, styles.backLeft]}
                onPress={() => closeRow(rowMap, data.item.key)}
            >
                <Icon name={"trash"} style={{color:'white'}} size={hp('4.5%')}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnLeft]}
                onPress={() => closeRow(rowMap, data.item.key)}
            >
                <Icon name={"edit"} style={{color:'white'}} size={hp('4.5%')}/>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
               // onPress={() => deleteRow(rowMap, data.item.key)}
            >
                <Icon name={"eye"} style={{color:'white'}} size={hp('4.5%')}/>
            </TouchableOpacity>
    
        </View>
    );
    render() {
        return (
         <View style={styles.container}>
          <Header navigation={this.props.navigation} hasFilter hasDrawer title={'View Incident'}/>
         
          <SwipeListView
                data={[1,2,3]}
                renderItem={this.renderItem}
                renderHiddenItem={this.renderHiddenItem}
                leftOpenValue={75}
                rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                contentContainerStyle={{padding:20}}
                //onRowDidOpen={onRowDidOpen}
            />
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('AddIncident')} style={{width:hp('10%'),height:hp('10%'),backgroundColor:colors.dark,bottom:hp('5%'),position:'absolute',borderRadius:hp('5%'),right:wp('5%'),justifyContent:'center',alignItems:'center'}}>
            <Icon name={"plus"} style={{color:'white'}} size={hp('5%')}/>
            </TouchableOpacity>
        </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        backgroundColor: colors.card,
        // backgroundColor:'pink',
        justifyContent: 'center',
        height: hp('13%'),
        marginTop:10,
        padding:25,

    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
        marginTop:10
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: colors.iea_green,
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: colors.iea_blue,
        right: 0,
    },
    backLeft:{
        backgroundColor:'red'
    }
});