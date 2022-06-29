import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Image, FlatList, TouchableOpacity } from 'react-native'
import TopBar from "../component/TopBar";
import Images from "../constant/Images";
import BreedData from "../component/BreedData";


const BreedScreen = ({ navigation }) => {



    const renderItem = ({ item }) => {
        return (
            <View>
                <View style={styles.box}>
                    <Image source={item.image} style={styles.imagelist} />
                    <View>
                        <Text style={{ marginLeft: 20, marginTop: 10, color: 'black' }}>{item.title}</Text>
                        <Text style={{ marginLeft: 150, marginTop: -17, color: 'black' }}>{item.cows}</Text>
                        <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 20, marginLeft: 25 }}>{item.name}</Text>
                        <Text style={{ color: 'black', fontWeight: 'bold', marginLeft: 170, marginTop: -18 }}>{item.number}</Text>
                        <Text style={{ color: 'green', marginLeft: 180, marginTop: 10 }}>{item.view}</Text>
                    </View>
                </View>
            </View>
        )
    }


    return (
        <View style={styles.container}>
            <TopBar />

            <View>
                <View >
                    <TextInput
                        style={styles.textInput}
                        placeholder='search here ..'
                        placeholderTextColor='black'
                    />
                    <Image source={Images.search} style={{ marginLeft: 300, marginTop: -45 }} />
                </View>
            </View>
            <View>
                <Text style={{ color: 'black', paddingLeft: 10, fontWeight: 'bold', marginTop: 20 }}>sort by: New</Text>
            </View>
            <View>
                <FlatList
                    data={BreedData}
                    renderItem={renderItem}
                    ListFooterComponent={<View style={{ margin: 100 }} />}
                />
            </View>
            <View style={styles.footerContainer}>
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                        <Image source={Images.cow} style={{ height: 35, width: 35, marginLeft: 20, marginTop: 10 }} />
                    </TouchableOpacity>
                    <Image source={Images.filled} style={{ height: 45, width: 45, marginTop: 5 }} />
                    <Image source={Images.stat} style={{ height: 35, width: 35, marginTop: 10 }} />
                    <Image source={Images.profile} style={{ height: 35, width: 35, marginTop: 10, marginRight: 10 }} />
                </View>
            </View>
        </View>
    )
}

export default BreedScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        width: '100%'
    },
    textInput: {
        height: 40,
        paddingLeft: 30,
        margin: 10,
        borderColor: 'black',
        borderRadius: 14,
        backgroundColor: 'rgb(196,197,202)',
        width: 330,
        color: 'black'
    },
    box: {
        width: 335,
        height: 105,
        padding: 1,
        margin: 10,
        backgroundColor: "rgb(196,197,202)",
        borderRadius: 10,
        flexDirection: 'row'
    },
    imagelist: {
        marginTop: 5
    },
    listText: {
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold'
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