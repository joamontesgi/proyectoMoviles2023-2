import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Enrutamiento from './Enrutamiento';

const App = () => {
  return (
    <View style={styles.container}>
      <Enrutamiento />
      <Text style={styles.foot}>Desarrollado por: Albeiro Montes para la asignatura Programación con Tecnologías Móviles</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  foot: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#000000',
    color: '#ffffff',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
