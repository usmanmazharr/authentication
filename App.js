//import 'react-native-gesture-handler'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import SignIn from './Screens/SignIn'
import SignUp from './Screens/SignUp'
import FirstScreen from './Screens/FirstScreen'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const App:() => Node = () => {

  const Stack = createStackNavigator();
  return (

    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name= "FirstScreen" component = {FirstScreen} options={{headerShown:false}}/>
            <Stack.Screen name= "SignIn" component ={SignIn} options={{headerShown:false}} />
            <Stack.Screen name="SignUp" component ={SignUp} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>

    
  );
}

export default App;

