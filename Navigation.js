import { createStackNavigator } from '@react-navigation/stack';
import Weather from "./Weather"
import Login from "./Login"
import Signup from "./Signup"
import Splash from "./Splash"
import React from 'react';

const Stack = createStackNavigator();

console.log("sign in",Login)

export default function MyStack() {
  return (
    <Stack.Navigator >
    <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
       <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Weather" component={Weather} />

    </Stack.Navigator>
  );
}