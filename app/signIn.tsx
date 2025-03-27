import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { createUsers, getUsers } from '../lib/supabase_crud';
import { SupabaseClient } from '@supabase/supabase-js';
import supabase from '../lib/supabase';

export default function SignIn() {

    const [FirstName, setFirstName] = useState('');
    const [LastName, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [users, setUsers] = useState<any[]>([]);

    const fetchUsers = async () => {
        const data = await getUsers();
        console.log(data);
        setUsers([...data]);
    }
    useEffect(() => {
        fetchUsers();
    }, []);


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Sign in</Text>
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
            <Button title='Sign up' onPress={() => {createUsers({FirstName, LastName, Email, Password})}} />

            <Text>
                {
                    users.map((user) => {
                        return <Text key={user.id}>{user.username}</Text>
                    })
                }
            </Text>

        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 150,
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    text: {
        fontSize: 24,
        color: '#333333',
    },
    input: {
        height: 40,
        gap: 10,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8,
        padding: 10,
        borderRadius: 5,
    },
});

