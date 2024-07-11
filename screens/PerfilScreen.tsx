import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PerfilScreen({ navigation }: { navigation: any }) {

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Perfil de Usuario</Text>
    <View style={styles.infoContainer}> 
    </View>
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Mis Productos</Text> 
    </View>
    <Button title="Cerrar Sesión" onPress={() => navigation.navigate('Register')}/>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 20,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  horizontalList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  accountType: {
    backgroundColor: '#e3e3e3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  accountText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})