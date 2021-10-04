import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import MyStack from "./Navigation"
export default function App() {
 


  return (
      
    <View style={styles.container}>
 <NavigationContainer>
<MyStack />
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
