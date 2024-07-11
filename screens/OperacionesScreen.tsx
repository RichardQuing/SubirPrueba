import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

export default function OperacionesScreen() {

    const [id, setId] = useState('');
    const [tipoOperacion, setTipoOperacion] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [monto, setMonto] = useState('');




    const ejecutarOperacion = () => {

        Alert.alert('Éxito', 'Operación realizada con éxito.');

        setId('');
        setTipoOperacion('');
        setDescripcion('');
        setMonto('');
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Operaciones</Text>

            <Text style={styles.label}>Id Operación</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese"
                value={tipoOperacion}
                onChangeText={(text) => setId(text)}
            />
            <Text style={styles.label}>Monto</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese"
                value={monto}
                onChangeText={(text) => setMonto(text)}
                keyboardType="numeric"
            />

            <Text style={styles.label}>Tipo de Operación</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese"
                value={tipoOperacion}
                onChangeText={(text) => setTipoOperacion(text)}
            />

            <Text style={styles.label}>Comentario</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese"
                value={descripcion}
                onChangeText={(text) => setDescripcion(text)}
            />

            

            <Button title="Guardar Operación" onPress={ejecutarOperacion} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',

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
})