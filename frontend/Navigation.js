import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

// Importamos los componentes que vamos a usar para las pestañas
import About from './src/About/About';
import Login from './src/Security/Login';
import CreateNewUsers from './src/Security/CreateNewUsers';

// Creamos el componente que va a contener las pestañas
const Tab = createBottomTabNavigator();

// Creamos el componente que va a contener la navegación de pestañas
function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName="Iniciar sesión"
            tabBarOptions={{
                activeTintColor: '#e91e63',
            }}
        >
            <Tab.Screen name="Iniciar sesión" component={Login}
                options={{
                    tabBarLabel: 'Iniciar sesión',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="login" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen name="Crear nuevo usuario" component={CreateNewUsers} style={styles.nuevoUsuario}
                options={{
                    tabBarLabel: 'Crear nuevo usuario',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-plus" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name="Sobre nosotros" component={About}
                options={{
                    tabBarLabel: 'Sobre nosotros',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="information" color={color} size={size} />
                    ),
                }}
            />
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

