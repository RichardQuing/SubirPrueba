import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function welcomeScreen({ navigation }:any) {
  return (
    
    <View style={styles.conatiner}>
      
      <Button
        title="REGISTRATE"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="iNICIA SESION"
        onPress={() => navigation.navigate('Login')}
      />
      <Text>DESARROLLADO POR: Richard Quinaucho</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  conatiner:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#d3b50d'
  },button:{
    padding:20
  }
})
