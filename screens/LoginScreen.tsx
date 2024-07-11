import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/config'

export default function LoginScreen({ navigation }: { navigation: any }) {
    
    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function login() {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                
                const user = userCredential.user;

                console.log(user);
                navigation.navigate('Main');
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);

                let titulo = ""
                let mensaje = ""

                if (errorCode == "auth/wrong-password") {
                    titulo = "Error de contraseña"
                    mensaje = "Contraseña incorrecta, revisar credenciales"
                } else if (errorCode == "auth/user-not-found") {
                    titulo = "Error de usuario"
                    mensaje = "Usuario no encontrado, revisar el correo electronico"
                } else {
                    titulo = "Advertencia"
                    mensaje = "Revisar credenciales de correo y contraseña"
                }


                Alert.alert(titulo, mensaje)
            });

    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Correo</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingresa tu correo"
                onChangeText={text => setEmail(text)}
                autoCapitalize="none"
            />
            <Text style={styles.label}>Contraseña</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingresa tu contraseña"
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            
            <Button title="Iniciar" onPress={() => login()} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#d3b50d'
    },
    label: {
        fontSize: 18,
        marginVertical: 5,
    },
    input: {
        height: 50,
        width: '80%',
        marginVertical: 10,
        borderRadius: 21,
        fontSize: 20,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
        color: '#747272',
        textAlign: 'center',
    },
});
