import React from 'react'
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import TopBar from '../component/TopBar'
import Images from '../constant/Images'
import CowData from '../component/CowData'
import Explore from '../component/Explore'
import Explored from '../component/Explored'


const HomeScreen = ({ navigation }) => {

    const renderItem = ({ item }) => {
        return (
            <View>
                <View style={styles.box}>
                    <Image source={item.image} style={styles.imagelist} />
                    <Text style={styles.listText}>{item.title}</Text>
                    <Text style={styles.listText}>{item.number}</Text>
                </View>
            </View>
        )
    }

    const renderExplore = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row' }}>
                <View style={styles.exploreBox}>
                    <Image source={item.image} style={{ height: 120, alignSelf: 'center' }} />
                    <Text style={{ color: 'black', textAlign: 'center', fontWeight: 'bold' }}>{item.title}</Text>
                </View>
            </View>
        )
    }
   

    return (
        <View style={styles.conatainer}>
            <View>
                <TopBar />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.cowText}>Cows</Text>
                <View>
                    <Text style={styles.seeall}>See all</Text>
                </View>
            </View>
            <View>
                <FlatList
                    data={CowData}
                    renderItem={renderItem}
                    horizontal={true}
                />
            </View>
            <View>
                <Text style={{ color: 'black', fontWeight: 'bold', paddingTop: 30, paddingLeft: 7 }}>Explore</Text>
            </View>
            <View>
                <FlatList
                    data={Explore}
                    renderItem={renderExplore}
                    horizontal={true}

                />
            </View>
            <View>
                <TouchableOpacity style={styles.plus}>
                    <Image source={Images.plus} style={{ height: 30, width: 30 }} />
                </TouchableOpacity>
            </View>
            <View style={styles.footerContainer}>
                <View style={styles.footer}>
                    <Image source={Images.cow} style={{ height: 35, width: 35, marginLeft: 20, marginTop: 10 }} />
                    <TouchableOpacity onPress={() => navigation.navigate('BreedScreen')} >
                        <Image source={Images.breed} style={{ height: 45, width: 45, marginTop: 5 }} />
                    </TouchableOpacity>
                    <Image source={Images.stat} style={{ height: 35, width: 35, marginTop: 10 }} />
                    <Image source={Images.profile} style={{ height: 35, width: 35, marginTop: 10, marginRight: 10 }} />
                </View>
            </View>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    conatainer: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    },
    cowText: {
        color: 'black',
        fontWeight: 'bold',
        paddingTop: 20,
        paddingLeft: 7
    },
    seeall: {
        color: 'black',
        fontWeight: 'bold',
        paddingTop: 20,
        paddingRight: 10
    },
    box: {
        width: 100,
        height: 130,
        padding: 1,
        margin: 10,
        backgroundColor: "rgb(196,197,202)",
        borderRadius: 10

    },
    imagelist: {
        alignSelf: 'center',

    },
    listText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
    },
    exploreBox: {
        width: 160,
        height: 145,
        padding: 1,
        margin: 10,
        backgroundColor: "rgb(196,197,202)",
        borderRadius: 10,
    },
    plus: {
        borderWidth: 1,
        borderColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        position: 'absolute',
     
        right: 10,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 100,
    },
    footerContainer: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },

    footer: {
        backgroundColor: 'green',
        flexDirection: 'row',
        elevation: 50,
        height: 50,
        justifyContent: 'space-between'
    },

})