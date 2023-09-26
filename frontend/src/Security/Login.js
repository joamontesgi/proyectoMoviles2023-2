import { StyleSheet, Text, View, TextInput, Button} from 'react-native'
import React from 'react'

export default function Login() {
  return (
    <View style={styles.container}>
      <Text>Inicio de sesión</Text>
      <TextInput style={styles.inputs} placeholder="Email" />
      <TextInput style={styles.inputs} placeholder="Contraseña" />
      <Button title="Iniciar sesión"  />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
})