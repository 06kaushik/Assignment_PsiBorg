import React from 'react'
import {View, Text,Image,StyleSheet,StatusBar} from 'react-native'
import Images from '../constant/Images'


const TopBar = () => {

    return(
        <View >
            <StatusBar hidden={true} />
           <View style={{flexDirection:'row', justifyContent:'space-between',backgroundColor:'green',}}>
               <View >
               <Image source={Images.menu} style={styles.menu}/>
               </View>
               <View>
                   <Image source={Images.cow} style={styles.cow} />
               </View>
               <View>
                   <Image source={Images.bell} style={styles.bell} />
               </View>
           </View>
        </View>

    )
}

export default TopBar;

const styles = StyleSheet.create({
    // conatainer:{
    //     backgroundColor:'white',
    //     height:'100%',
    //     width:'100%'
    // },
    menu:{
        height:20,
        marginTop:17,
        marginLeft:5
    },
    cow:{
        height:55,
        width:55,
        marginTop:10
    },
    bell:{
        height:28,
        width:28,
        marginTop:15,
        marginRight:5
    },
})