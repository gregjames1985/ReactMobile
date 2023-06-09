import React from "react";
import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import { cards } from "../data/cards";
import CardList from '../components/CardList'


const HomeScreen = ()=>{
    return (
        
<ScrollView 
  showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text>Home</Text>
        <CardList items={cards}/> 
      </View>
</ScrollView>
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