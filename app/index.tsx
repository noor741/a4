import { View, Text, StyleSheet } from 'react-native';
import ButtonTemp from '../components/buttonTemp';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20}}>Hello, world!</Text>
            <ButtonTemp width={150} color="#0ba6ff" link={"/signIn"} text={"sign in"} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});