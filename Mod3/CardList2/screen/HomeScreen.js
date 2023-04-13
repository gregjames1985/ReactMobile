import React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';


const HomeScreen = ({navigation})=>{
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <SafeAreaView> <CardList items={cards}/> </SafeAreaView>
      </View>
    );
}
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });