import React from 'react';
import { SafeAreaView, View, Text, Image,Linking, TouchableOpacity, StyleSheet, ImageBackground, Button } from 'react-native';
import style from './style'


export default class search extends React.Component {

    constructor() {
        super()
        this.state = { value: '' }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <Text>Search</Text>
                </View>
            </SafeAreaView>
        )
    }
}
