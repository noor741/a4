import { View, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import ButtonTemp from '../components/buttonTemp';

export default function App() {
    

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 30, marginBottom: 100, fontWeight: 'bold'}}>Hello, world!</Text>
            <ButtonTemp width={150} color="#0ba6ff" link={"/signUp"} text={"sign Up"} />
            <ButtonTemp width={150} color="#0ba6ff" link={"/signIn"} text={"Sign In"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f8f9fa", 
        alignItems: "center",
        justifyContent: "center",
        padding: 16, 
    },
});