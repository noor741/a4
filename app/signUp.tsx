import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useState, useEffect } from "react";
import { createUsers, getUsers } from "../lib/supabase_crud";
import { SupabaseClient } from "@supabase/supabase-js";
import supabase from "../lib/supabase";
import { router } from "expo-router";

export default function SignUp() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");


  const HandleCreateUser = async () => {
    try {
      await createUsers({ FirstName, LastName, Email, Password });
      Alert.alert("User Created Successfully");
      setEmail("");
      setFirstName("");
      setLastName("");
      setPassword("");
      router.push("/homePage");
    } catch (error) {
      console.log(error);
      Alert.alert("Error Creating User");
    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={FirstName}
        onChangeText={setFirstName}

      />
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={LastName}
        onChangeText={setLastName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={Email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={Password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity
        onPress={HandleCreateUser}
        style={{
          backgroundColor: "black",
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 8,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 16,
          elevation: 3,
        }}
      >
        <Text
          style={{
            fontSize: 18,
            color: "#fff",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 150,
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 24,
    color: "#333",
    fontWeight: "bold",
    textAlign: "center",
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
});
