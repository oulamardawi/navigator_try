/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {Text, Button, View,} from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';

 
 const data = require('../assets/data.json');

 function Home({ navigation }) {
    return (
      <View
      style={{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#03cafc"
      }}
      >
      {data.map(x => {

            return(
                <Text>{x.name}</Text>
            )
      })}
      </View>
    )
  }



 const Stack = createStackNavigator();

 function MyStacks() {

   return (
    <Stack.Navigator>
        <Stack.Screen
         name="Home"    
         component={Home} 
         options={{
            headerTintColor: 'white',
            headerStyle: {backgroundColor:'green'} 
         }}
            />
        <Stack.Screen 
        /* name="Profile" 
        component={Profile}
        options={} */
         />
      </Stack.Navigator>
   )
 }
 

 
 export default function routeparamsNavigator() {
   return(
    <NavigationContainer>
      <MyStacks />
    </NavigationContainer>
   )

 }

