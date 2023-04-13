import React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';

const Mustang = ({navigation})=>{
    return (
      <View style={styles.container}>
        <Text>Mustang Screen</Text>
        <Button title='click me' onPress={() => {navigation.navigate('Details')}}/>
      </View>
    );
}
export default Mustang;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });