import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import React from 'react'

export default function CreateUser() {
  const handleCreateUser = () => {
    
  };
}

export default function CreateNewUsers() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputs} placeholder="Nombre" />
      <TextInput style={styles.inputs} placeholder="Apellidos" />
      <TextInput style={styles.inputs} placeholder="Email" />
      <TextInput style={styles.inputs} placeholder="Contraseña" />
      <Button title="Crear nuevo usuario"  onPress={handleCreateUser} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputs: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,

  },
})