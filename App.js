import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import BreedScreen from './src/screens/BreedScreen'

const Stack = createStackNavigator();

function App() {

  return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{headerShown: false}}>
           <Stack.Screen name="HomeScreen" component={HomeScreen} /> 
          <Stack.Screen name="BreedScreen" component={BreedScreen} /> 
          </Stack.Navigator>
        </NavigationContainer>
        
    );  
}

export default App;