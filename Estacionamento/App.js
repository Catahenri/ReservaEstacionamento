import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './compnents/header';
import HomeScreen from './screens/homeScreen';

export default function App() {
  
  return (
    <View style={ styles.screen }>
      <Header />
      <HomeScreen />
    </View>
  );
 
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
