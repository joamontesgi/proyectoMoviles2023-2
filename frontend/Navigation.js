import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importamos los componentes que vamos a usar para las pestañas
import About from './src/About/About';
import Login from './src/Security/Login';
import CreateNewUsers from './src/Security/CreateNewUsers';

// Creamos el componente que va a contener las pestañas
const Tab = createBottomTabNavigator();

// Creamos el componente que va a contener la navegación de pestañas
function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="About" component={About} />
            <Tab.Screen name="Login" component={Login} />
            <Tab.Screen name="Crear nuevo usuario" component={CreateNewUsers} style={styles.nuevoUsuario} />
        </Tab.Navigator>
    );
}

// Creamos el componente que va a contener la navegación principal
export default function Navigation() {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    nuevoUsuario: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
    },
});

