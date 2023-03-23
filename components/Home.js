import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello I'm Home!
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1/10,
        backgroundColor:'#000000',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'#38E540',
    }
});