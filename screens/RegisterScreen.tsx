import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../config/config';

export default function RegisterScreen({ navigation }: { navigation: any }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usuario, setUsuario] = useState('');
    const [celular, setCelular] = useState('');

    const guardarUsuario = () => {
        if (email && password && usuario && celular) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    Alert.alert("Mensaje", "¡Usuario registrado correctamente!");
                    setUsuario('');
                    setEmail('');
                    setPassword('');
                    setCelular('');
                    navigation.navigate('Perfil');
                    console.log(user);
                })
                .catch(error => {
                    Alert.alert("Error", "Hubo un problema al registrar el usuario: " + error.message);
                });
        } else {
            Alert.alert("Advertencia", "Por favor ingresa todos los campos requeridos.");
        }
    };

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
            <Text style={styles.label}>Usuario</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingresa tu usuario"

                onChangeText={text => setUsuario(text)}
            />
            <Text style={styles.label}>Celular</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingresa tu número celular"

                onChangeText={text => setCelular(text)}
                keyboardType="phone-pad"
            />
            <Button title="Registrar" onPress={guardarUsuario} />
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
