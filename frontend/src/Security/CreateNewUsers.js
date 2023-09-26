import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

export default function CreateNewUsers() {
  const [formData, setFormData] = useState({
    document_type: '',
    document_number: '',
    name: '',
    last_name: '',
    email: '',
    password: '',
    confirmarContraseña: '',
    phone_number: '',
    address: '',
  });

  const navigation = useNavigation(); // Inicializa la navegación

  const handleCreateUser = () => {
    // Construye el objeto de datos del usuario en el formato requerido por Laravel
    const userData = {
      name: formData.name,
      last_name: formData.last_name,
      document_type: formData.document_type,
      document_number: formData.document_number,
      address: formData.address,
      phone_number: formData.phone_number,
      email: formData.email,
      password: formData.password,
    };

    // Realiza la solicitud POST con los datos del usuario
    axios
      .post('http://192.168.0.11:8000/api/users/', userData)
      .then((response) => {
        Alert.alert('Registro exitoso', 'El usuario se ha registrado correctamente.', [
          {
            text: 'OK',
            onPress: () => {
              // Limpia los campos de entrada después del registro exitoso
              setFormData({
                document_type: '',
                document_number: '',
                name: '',
                last_name: '',
                email: '',
                password: '',
                confirmarContraseña: '',
                phone_number: '',
                address: '',
              });

              // Redirige al usuario después de limpiar los campos
              navigation.navigate('Login'); // Reemplaza 'Login' con el nombre de la pantalla de inicio de sesión correcto
            },
          },
        ]);
      })
      .catch((error) => {
        Alert.alert('Error', 'No se ha podido registrar el usuario.');
      });
  };

  const handleClearInputs = () => {
    // Limpia los campos de entrada
    setFormData({
      document_type: '',
      document_number: '',
      name: '',
      last_name: '',
      email: '',
      password: '',
      confirmarContraseña: '',
      phone_number: '',
      address: '',
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Registro de usuario: </Text>
        <Text>Tipo de documento: </Text>
        <TextInput
          style={styles.inputs}
          placeholder="Tipo de documento"
          onChangeText={(text) => setFormData({ ...formData, document_type: text })}
          value={formData.document_type}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Número de documento"
          onChangeText={(text) =>
            setFormData({ ...formData, document_number: text })
          }
          value={formData.document_number}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Nombre"
          onChangeText={(text) => setFormData({ ...formData, name: text })}
          value={formData.name}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Apellidos"
          onChangeText={(text) =>
            setFormData({ ...formData, last_name: text })
          }
          value={formData.last_name}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Email"
          onChangeText={(text) => setFormData({ ...formData, email: text })}
          value={formData.email}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Contraseña"
          onChangeText={(text) => setFormData({ ...formData, password: text })}
          secureTextEntry={true}
          value={formData.password}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Confirmar contraseña"
          onChangeText={(text) =>
            setFormData({ ...formData, confirmarContraseña: text })
          }
          secureTextEntry={true}
          value={formData.confirmarContraseña}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Teléfono"
          onChangeText={(text) =>
            setFormData({ ...formData, phone_number: text })
          }
          value={formData.phone_number}
        />
        <TextInput
          style={styles.inputs}
          placeholder="Dirección"
          onChangeText={(text) => setFormData({ ...formData, address: text })}
          value={formData.address}
        />
        <Button title="Crear nuevo usuario" onPress={handleCreateUser} />
        <Button title="Limpiar campos" onPress={handleClearInputs} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Para permitir que el contenido crezca y sea desplazable
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputs: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#000',
    width: 200,
    height: 40,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
});
