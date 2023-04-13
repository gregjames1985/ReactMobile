import React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native-safe-area-context';
import { cards } from "../data/cards";
import CardList from '../components/CardList'


const HomeScreen = ()=>{
    return (
      <View style={styles.container}>
        <Text>Home</Text>
    
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