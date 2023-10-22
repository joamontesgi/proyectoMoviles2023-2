import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TouchableHighlight, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Menu = ({ navigation }) => {
    
    const handleLogout = () => {
        navigation.navigate('Logout');
    };

    const handleHome = () => {
        navigation.navigate('Home');
    };

    const handlePerfil = () => {
        navigation.navigate('Perfil');
    };

    const [hasToken, setHasToken] = useState(false);

    useEffect(() => {
        const checkToken = async () => {
            const userToken = await AsyncStorage.getItem('token');
            setHasToken(!!userToken);
        };

        checkToken();
    });

    if (hasToken) {
        return (
            <View style={styles.menuContainer}>
                <TouchableButton title="Ir a Home" onPress={handleHome} style={styles.smallButton} />
                <TouchableButton title="Ir a Perfil" onPress={handlePerfil} style={styles.smallButton} />
                <TouchableButton title="Cerrar Sesión" onPress={handleLogout} style={styles.smallButton} />
            </View>
        );
    } else {
        return null;
    }
};

const TouchableButton = ({ title, onPress, style }) => (
    <TouchableHighlight
        style={[styles.button, style]}
        onPress={onPress}
        underlayColor="#E0E0E0"
    >
        <Text style={styles.buttonText}>{title}</Text>
    </TouchableHighlight>
);

const styles = StyleSheet.create({
    menuContainer: {
        flexDirection: 'column',
        position: 'absolute',  
        top: 0,  
        left: 0, 
        marginTop: 100,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 5,
        margin: 5,
        borderRadius: 5,
    },
    smallButton: {
        width: 100,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default Menu;
