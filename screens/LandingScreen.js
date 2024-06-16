import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

export default function LandingScreen() {

    const handleButtonPress = () => {
        setLandingPageVisible(false);
        setRecipesVisible(true);
    };

    return (
        <View style={styles.background}>
            <View style={styles.container} >
                <Image source={require('../assets/chef.gif')} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});