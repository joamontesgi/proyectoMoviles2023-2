import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const handleLogin = () => {
        axios.post('http://192.168.236.154:8000/api/login', {
            email: email,
            password: password,
        })
            .then((response) => {
                Alert.alert('Bienvenido', 'Inicio de sesión correcto.');
                const token = response.data.token;
                AsyncStorage.setItem('token', token);
                    navigation.navigate('Home');
                setEmail('');
                setPassword('');
            })
            .catch((error) => {
                if (error.response && error.response.status === 401) {
                    alert('Contraseña incorrecta. Inténtalo de nuevo.');
                    navigation.navigate('Login');
                } else {
                    Alert.alert('Error', 'Error al iniciar sesión. Inténtalo de nuevo.');
                    navigation.navigate('Login');
                }
            });
};

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30, marginBottom: 40 }}>Iniciar sesión</Text>
            <TextInput
                style={styles.inputs}
                placeholder="Correo electrónico"
                onChangeText={(text) => setEmail(text)}
                value={email} 
            />
            <TextInput
                style={styles.inputs}
                placeholder="Contraseña"
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                value={password} 
            />
            <Button title="Iniciar sesión" onPress={handleLogin} color="#000000" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#D3B87D'
    },
    inputs: {
        backgroundColor: '#fff',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#000',
        width: 200,
        height: 40,
        padding: 10,
        margin: 10,
        borderRadius: 10,
    }
});

