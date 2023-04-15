import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/HomeScreen';
import Mustang from './screen/Mustang';
import Porsche from './screen/Porsche';
import Camaro from './screen/Camaro';
import BMW from './screen/BMW';
import Challenger from './screen/Challenger';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Mustang" component={Mustang}/>
        <Stack.Screen name="Camaro" component={Camaro}/>
        <Stack.Screen name="BMW" component={BMW}/>
        <Stack.Screen name="Challenger" component={Challenger}/>
        <Stack.Screen name="Porsche" component={Porsche}/>
      </Stack.Navigator>
    </NavigationContainer>
    
      
  );
}


