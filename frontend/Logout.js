import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Logout = ({ navigation }) => {
  useEffect(() => {
    const performLogout = () => {
      AsyncStorage.getItem('token', function(error, userToken) {
        if (error) {
          console.error('Error al obtener el token:', error);
        } else if (userToken) {
          // Petición
          fetch('http://192.168.236.154:8000/api/logout', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${userToken}`,
            },
          })
          .then(function(response) {
            // Elimina el token
            AsyncStorage.removeItem('token', function(error) {
              if (error) {
                console.error('Error al eliminar el token:', error);
              } else {
                // Redirige a la vista inicial
                navigation.navigate('Login');
              }
            });
          })
          .catch(function(error) {
            console.error('Error al cerrar sesión:', error);
          });
        } else {
          console.error('Error al cerrar sesión. Token no encontrado.');
        }
      });
    };

    // Llama a la función de logout solo una vez, después de la primera renderización
    performLogout();
  }, []); // Pasa un array vacío como segundo argumento para que se ejecute una vez

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Cerrando sesión...</Text>
    </View>
  );
};

export default Logout;
