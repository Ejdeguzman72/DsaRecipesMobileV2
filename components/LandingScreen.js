import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native';

export default function LandingScreen() {
    return (
        <View style={styles.container} >
            <Image source={require('../assets/chef.gif')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});