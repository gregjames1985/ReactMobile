import React from "react";
import { Button, StyleSheet, Text, View, Image } from 'react-native';

const Mustang = ({navigation})=>{
    return (
      <View style={styles.container}>
        <Image
  source={{uri: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80/500x500'}}
  style={{width: 400, height: 400}}
/>

           
        <Text><h1>Mustang Screen</h1></Text>
        <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</Text>
        <Button title='Home' onPress={() => {navigation.navigate('Home')}}/>
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