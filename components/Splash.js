import React from "react";
import { View, StyleSheet } from "react-native";
import AnimatedLottieView from "lottie-react-native";

export default function Splash({navigation}){
    return (
        <View style={styles.container}>
            <AnimatedLottieView
                source={require('../assets/Splash.json')}
                autoPlay
                loop={false}
                speed={0.5}
                onAnimationFinish={()=>{
                    console.log('Animation Finished!')
                    navigation.push('Home');
                }}
            />
        </View>
    );
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
      },
      text:{
        color: '#38E54D'
      }
});