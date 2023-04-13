import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { cards } from './data/cards';
import CardList from './components/CardList';
import HomeScreen from './screen/HomeScreen';
import Mustang from './screen/Mustang';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:'Welcome'}}/>
        <Stack.Screen name="Mustang" component={Mustang} options={{title:'Mustang'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    
      
  );
}


