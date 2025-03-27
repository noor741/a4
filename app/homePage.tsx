import { View, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

export default function HomePage() {


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Page</Text>
            <Text style={{ color: 'red', fontSize: 22, marginTop: 20 }}>Welcome to our application</Text>
            <Text>  </Text>

            <TouchableOpacity
                onPress={() => router.push("/")}
                style={{
                    backgroundColor: "black",
                    paddingVertical: 12,
                    paddingHorizontal: 24,
                    borderRadius: 8,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 100,
                    elevation: 3,
                }}>
                <Text style={{
                    fontSize: 18,
                    color: "#fff",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                }}>Sign Out</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff"
    },
    text: {
        fontWeight: "bold",
        fontSize: 30,
        color: "#333"
    }
})