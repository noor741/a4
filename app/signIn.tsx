import { View, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { router } from "expo-router";
import { getUsers } from "../lib/supabase_crud";

export default function SignIn() {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [users, setUsers] = useState<any[]>([]);

     const fetchUsers = async () => {
        const data = await getUsers();
        console.log(data);
        setUsers([...data]);
      };
      useEffect(() => {
        fetchUsers();
      }, []);

    const handleSignIn = () => {
        if(Email === "" || Password === ""){
            Alert.alert("Please fill all fields");
            return;
        }
        const user = users.find((user) => user.Email === Email && user.Password === Password);
        if(user){
            Alert.alert("Signed In Successfully");
            router.push("/homePage");
        }else{
            Alert.alert("Invalid Email or Password");
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={Email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                value={Password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleSignIn}>
                <Text style={{
                    fontSize: 18,
                    color: "#fff",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                }}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push("/signUp")}>
                <Text style={styles.link}>Don't have an account? Sign Up</Text>
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
    title: {
        fontSize: 30,
        fontWeight: "bold"
    },
    input: {
        height: 40,
        width: "90%",
        borderColor: "#ccc",
        borderWidth: 1,
        marginTop: 12,
        paddingHorizontal: 12,
        borderRadius: 8,
        backgroundColor: "#fff",
        elevation: 2,
    },
    link: {
        color: "blue",
        marginTop: 20
    },
    button: {
        backgroundColor: "black",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 16,
        elevation: 3,
    }
})