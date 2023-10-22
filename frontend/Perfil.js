import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import React from 'react';
import Menu from './Menu';


const Perfil = ({ navigation }) => {


    return (
        <View style={styles.container}>
            <Text>Bienvenido a la pantalla de Perfil</Text>
            <Menu navigation={navigation} />
        </View>
    );
};

export default Perfil;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#D3B87D"
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});
